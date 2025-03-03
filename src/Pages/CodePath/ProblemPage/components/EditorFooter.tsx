import { Button } from "@/components/ui/button";
import { Problem } from "@/Data/problems";
import { ChevronUp } from "lucide-react";
import { Bounce, toast } from "react-toastify";

const EditorFooter = ({
  userFunction,
  currentProblemData,
}: {
  userFunction: string;
  currentProblemData: Problem;
}) => {
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

  return (
    <div className="flex absolute bottom-0 z-10 w-full bg-gray-300">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <Button variant={"ghost"}>
            Console
            <ChevronUp />
          </Button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button onClick={handleRun}>Run</Button>
          <Button variant={"normal"} className="bg-green-500">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorFooter;
