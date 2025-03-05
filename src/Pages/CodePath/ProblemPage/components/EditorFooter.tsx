import { Button } from "@/components/ui/button";
import { Problem } from "@/Data/problems";
import useGetUserDataOnProblem from "@/hooks/useGetUserDataOnProblem";
import { db } from "@/utils/firebase/firebase";
import { useUser } from "@clerk/clerk-react";
import { doc, setDoc } from "firebase/firestore";
import { Bounce, toast } from "react-toastify";

const EditorFooter = ({
  userFunction,
  currentProblemData,
}: {
  userFunction: string;
  currentProblemData: Problem;
}) => {
  const { user } = useUser();
  const userData = useGetUserDataOnProblem();

  // handleRun function to check the user function passes the test cases and display the toast msg
  const handleRun = () => {
    try {
      const userFunctionCode = new Function(`return ${userFunction}`)();
      const handlerFunction = new Function(
        `return ${currentProblemData?.handlerFunction}`
      )();
      const runSuccessStatus = handlerFunction(userFunctionCode);
      console.log(runSuccessStatus);

      if (runSuccessStatus) {
        toast.success("All Test Cases Passed Successfully 🎉", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error("❌ Test Cases Not Passed 🚫", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(`Error: ${error.message || "Something went wrong!"}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // handleSubmit function to check the user function passes the test cases and display the toast msg and update in the db solved problem list(array)
  const handleSubmit = () => {
    try {
      const userFunctionCode = new Function(`return ${userFunction}`)();
      const handlerFunction = new Function(
        `return ${currentProblemData?.handlerFunction}`
      )();
      const runSuccessStatus = handlerFunction(userFunctionCode);
      console.log(runSuccessStatus);

      if (
        runSuccessStatus &&
        !userData?.solvedProblem.includes(currentProblemData.pageId)
      ) {
        const docRef = doc(
          db,
          "users",
          user?.primaryEmailAddress?.emailAddress || ""
        );
        setDoc(docRef, {
          ...userData,
          solvedProblem: [
            ...(userData.solvedProblem || []),
            currentProblemData?.pageId,
          ],
        });
        toast.success("All Test Cases Passed Successfully 🎉 and Submitted", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.success("Already Submitted", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(`Error: ${error.message || "Something went wrong!"}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="flex absolute bottom-0 z-10 w-full bg-gray-300">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="ml-auto flex items-center space-x-4">
          <Button onClick={handleRun}>Run</Button>
          <Button
            variant={"normal"}
            className="bg-green-500"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorFooter;
