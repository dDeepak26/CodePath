import { CircleCheckBig, Star, ThumbsDown, ThumbsUp } from "lucide-react";

const ProblemDescriptionSplitScreen = () => {
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
              <div className="flex-1 mr-2 text-lg font-medium">1. Two Sum</div>
            </div>
            <div className="flex items-center mt-3">
              <div className="text-green-600 bg-green-200 inline-block rounded-[21px] px-2.5 py-1 text-xs font-medium capitalize">
                Easy
              </div>
              <div className="rounded p-[3px] ml-4 text-lg text-green-600">
                <CircleCheckBig />
              </div>
              <div className="flex items-center cursor-pointer hover:bg-gray-300 space-x-1 rounded p-[3px] ml-4 text-lg text-gray-700">
                <ThumbsUp />
                <span className="text-xs">120</span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-gray-300 space-x-1 rounded p-[3px] ml-4 text-lg text-gray-700">
                <ThumbsDown />
                <span className="text-xs">2</span>
              </div>
              <div className="cursor-pointer hover:bg-gray-300 rounded p-[3px] ml-4 text-xl text-gray-700">
                <Star />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-gray-800 text-sm">
              <p className="mt-3">
                Given an array of integers{" "}
                <code className="text-black bg-gray-100">nums</code> and an
                integer <code className="text-black bg-gray-100">target</code>,
                return
                <em> indices of the two numbers such that they add up to </em>
                <code className="text-black bg-gray-100">target</code>.
              </p>
              <p className="mt-3">
                You may assume that each input would have{" "}
                <strong>exactly one solution</strong>, and you may not use the
                same element twice.
              </p>
              <p className="mt-3">You can return the answer in any order.</p>
            </div>

            {/* Examples */}
            <div className="mt-4">
              {/* Example 1 */}
              <div>
                <p className="font-medium">Example 1: </p>
                <div className="bg-gray-100 p-3 rounded">
                  <pre className="text-gray-800">
                    <strong>Input: </strong> nums = [2,7,11,15], target = 9{" "}
                    <br />
                    <strong>Output:</strong> [0,1] <br />
                    <strong>Explanation:</strong> Because nums[0] + nums[1] ==
                    9, we return [0, 1].
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <p className="font-medium">Example 2: </p>
                <div className="bg-gray-100 p-3 rounded">
                  <pre className="text-gray-800">
                    <strong>Input: </strong> nums = [3,2,4], target = 6 <br />
                    <strong>Output:</strong> [1,2] <br />
                    <strong>Explanation:</strong> Because nums[1] + nums[2] ==
                    6, we return [1, 2].
                  </pre>
                </div>
              </div>
              {/* Example 3 */}
              <div>
                <p className="font-medium">Example 3: </p>
                <div className="bg-gray-100 p-3 rounded">
                  <pre className="text-gray-800">
                    <strong>Input: </strong> nums = [3,3], target = 6 <br />
                    <strong>Output:</strong> [0,1] <br />
                  </pre>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className="my-5">
              <div className="text-gray-900 text-sm font-medium">
                Constraints:
              </div>
              <ul className="text-gray-800 ml-5 list-disc">
                <li className="mt-2">
                  <code className="text-black bg-gray-100">
                    2 ≤ nums.length ≤ 10
                  </code>
                </li>
                <li className="mt-2">
                  <code className="text-black bg-gray-100">
                    -10 ≤ nums[i] ≤ 10
                  </code>
                </li>
                <li className="mt-2">
                  <code className="text-black bg-gray-100">
                    -10 ≤ target ≤ 10
                  </code>
                </li>
                <li className="mt-2 text-sm">
                  <strong>Only one valid answer exists.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescriptionSplitScreen;
