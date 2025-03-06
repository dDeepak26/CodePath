import useGetUserDataOnProblem from "@/hooks/useGetUserDataOnProblem";
import { Problem } from "@/types/problems";
import { CircleCheckBig } from "lucide-react";

const ProblemDescriptionSplitScreen = ({
  currentProblemData,
}: {
  currentProblemData: Problem;
}) => {
  const userData = useGetUserDataOnProblem();

  const difficultyColor =
    currentProblemData?.difficulty === "Easy"
      ? "text-green-600 bg-green-100"
      : currentProblemData?.difficulty === "Medium"
      ? "text-yellow-600 bg-yellow-100"
      : "text-red-600 bg-red-100";

  return (
    <div className="bg-white text-gray-900">
      {/* TAB */}
      <div className="flex h-11 w-full items-center bg-gray-200 text-gray-900 overflow-x-hidden">
        <span className="text-sm p-3 bg-white">Description</span>
      </div>

      <div className="flex px-0 pt-2 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg font-medium">{`${currentProblemData?.order}. ${currentProblemData?.title}`}</div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={`${difficultyColor} inline-block rounded-[21px] px-2.5 py-1 text-xs font-medium capitalize`}
              >
                {currentProblemData?.difficulty}
              </div>
              {userData?.solvedProblem?.includes(
                currentProblemData?.pageId
              ) && (
                <div className="rounded p-[3px] ml-4 text-lg text-green-600">
                  <CircleCheckBig />
                </div>
              )}
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-gray-800 text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: currentProblemData?.problemStatement || "",
                }}
              />
            </div>

            {/* Examples */}
            <div className="mt-4">
              {currentProblemData &&
                currentProblemData.examples.map(
                  (currentProblemExampleData, index) => (
                    <div key={index}>
                      <p className="font-medium">Example {index + 1}</p>
                      <div className="bg-gray-100 p-3 rounded">
                        {currentProblemExampleData?.img && (
                          <img
                            src={currentProblemExampleData?.img}
                            alt=""
                            className="mt-3"
                          />
                        )}
                        <pre className="text-gray-800">
                          <strong>Input: </strong>{" "}
                          {currentProblemExampleData?.inputText}
                          <br />
                          <strong>Output:</strong>{" "}
                          {currentProblemExampleData?.outputText} <br />
                          {currentProblemExampleData?.explanation && (
                            <>
                              <strong>Explanation:</strong>{" "}
                              {currentProblemExampleData?.explanation}
                            </>
                          )}
                        </pre>
                      </div>
                    </div>
                  )
                )}
            </div>

            {/* Constraints */}
            <div className="my-8 pb-4">
              <div className="text-gray-900 text-sm font-medium">
                Constraints:
              </div>
              <ul className="text-gray-800 ml-5 list-disc">
                <div
                  dangerouslySetInnerHTML={{
                    __html: currentProblemData?.constraints || "",
                  }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescriptionSplitScreen;
