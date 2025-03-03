import { useEffect, useState } from "react";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import * as themes from "@uiw/codemirror-themes-all";
import { langs } from "@uiw/codemirror-extensions-langs";
import { Problem } from "@/Data/problems";
import PlaygroundNavBar from "./PlaygroundNavBar";
import EditorFooter from "./EditorFooter";
import { db } from "@/utils/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Playground = ({
  currentProblemData,
}: {
  currentProblemData: Problem;
}) => {
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
  const [currentProblemDataTest, setCurrentProblemDataTest] =
    useState<Problem>();

  useEffect(() => {
    getData();
  }, [currentProblemData]);

  const getData = async () => {
    try {
      const docRef = doc(db, "problems", "0");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const problemDataF = docSnap.data() as Problem;
        console.log("Fetched Problem Data:", problemDataF);
        console.log(problemDataF.starterCode);
        setCurrentProblemDataTest(problemDataF);
      } else {
        console.error("No such document exists!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  return (
    <div className="flex flex-col relative">
      <PlaygroundNavBar />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        {/* split for ide */}
        <div className="w-full overflow-auto">
          <CodeMirror
            value={currentProblemData?.starterCode}
            theme={themes.xcodeLight}
            extensions={[langs.javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>

        {/* split for test cases */}
        <div className="w-full px-5 overflow-auto pb-16">
          {/* test case heading */}
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium loading-5">Test Cases</div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-black" />
            </div>
          </div>

          <div className="flex">
            {/* Test case heading */}
            {currentProblemData?.examples.map((currentProblemExampleData) => (
              <div
                className="mr-2 items-start mt-2 "
                key={currentProblemExampleData?.id}
                onClick={() =>
                  setActiveTestCaseId(currentProblemExampleData?.id)
                }
              >
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-gray-300 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ${
                      activeTestCaseId === currentProblemExampleData?.id
                        ? "text-black"
                        : "text-gray-400"
                    }`}
                  >
                    Case {currentProblemExampleData.id + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Test case input output */}
          <div className="font-semibold my-4">
            <p className="text-sm font-medium mt-4">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-gray-300 border-transparent mt-2">
              {currentProblemData.examples[activeTestCaseId].inputText}
            </div>
            <p className="text-sm font-medium mt-4">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-gray-300 border-transparent mt-2">
              {currentProblemData.examples[activeTestCaseId].outputText}
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter />
    </div>
  );
};

export default Playground;
