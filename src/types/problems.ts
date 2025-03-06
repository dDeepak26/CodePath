export type ExampleType = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
};

export type Problem = {
  id: number | string;
  pageId: string;
  title: string;
  difficulty: string;
  category: string;
  order: number;
  videoId?: string;
  problemStatement: string;
  examples: ExampleType[];
  constraints: string;
  starterCode: string;
  starterFunctionName?: string;
  handlerFunction: ((fn: any) => boolean) | string;
};

export const problems: Problem[] = [
  {
    id: 0,
    pageId: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    order: 1,
    videoId: "UXDSeD9mN-k?si=IdCi5ZQU4i7uCzG5",
    problemStatement: `<p class='mt-3'>
  Given an array of integers <code>nums</code> and an integer <code>target</code>, return
  <em>indices of the two numbers such that they add up to</em> <code>target</code>.
</p>
<p class='mt-3'>
  You may assume that each input would have <strong>exactly one solution</strong>, and you
  may not use the same element twice.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
    examples: [
      {
        id: 0,
        inputText: "nums = [2,7,11,15], target = 9",
        outputText: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        id: 1,
        inputText: "nums = [3,2,4], target = 6",
        outputText: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
      {
        id: 2,
        inputText: " nums = [3,3], target = 6",
        outputText: "[0,1]",
      },
    ],
    constraints: `<li class='mt-2'>
<code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
    starterCode: `// Do not edit function name 
    function twoSum(nums,target) {
  // Write your code here
};`,
    starterFunctionName: `twoSum`,
    handlerFunction: `(fn) => {
      try {
        const nums = [
          [2, 7, 11, 15],
          [3, 2, 4],
          [3, 3],
        ];
    
        const targets = [9, 6, 6];
        const answers = [
          [0, 1],
          [1, 2],
          [0, 1],
        ];
    
        // loop all tests to check if the user's code is correct
        for (let i = 0; i < nums.length; i++) {
          // result is the output of the user's function and answer is the expected output
          const result = fn(nums[i], targets[i]);
          
          // Manual array comparison instead of using expect
          if (!arraysEqual(result, answers[i])) {
            throw new Error(\`Test case \${i + 1} failed: expected \${JSON.stringify(answers[i])}, got \${JSON.stringify(result)}\`);
          }
        }
        return true;
      } catch (error) {
        console.log("twoSum handler function error");
        throw new Error(error.message || String(error));
      }
    }
    
    // Helper function to check if arrays are equal
    function arraysEqual(a, b) {
      if (a.length !== b.length) return false;
      
      // Sort both arrays to handle different order of correct indices
      const sortedA = [...a].sort((x, y) => x - y);
      const sortedB = [...b].sort((x, y) => x - y);
      
      for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) return false;
      }
      return true;
    }`,
  },

  {
    id: 1,
    pageId: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Hard",
    category: "Linked List",
    order: 2,
    videoId: "D2vI2DNJGd8?si=53VudtLwqNQ5SeiU",
    problemStatement: `<p class='mt-3'>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>
	`,
    examples: [
      {
        id: 0,
        inputText: "head = [1,2,3,4,5]",
        outputText: "[5,4,3,2,1]",
        img: "https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg",
      },
      {
        id: 1,
        inputText: "head = [1,2,3]",
        outputText: "[3,2,1]",
        img: "https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg",
      },
      {
        id: 2,
        inputText: "head = [1]",
        outputText: "[1]",
      },
    ],
    constraints: `<li class='mt-2'>The number of nodes in the list is the range <code>[0, 5000]</code>.</li>
<li class='mt-2'><code>-5000 <= Node.val <= 5000</code></li>`,
    starterCode: `
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Do not edit function name
function reverseLinkedList(head) {
  // Write your code here
};`,
    starterFunctionName: `reverseLinkedList`,
    handlerFunction: `(fn) => {
  try {
    const tests = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3], [1]];
    const answers = [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [3, 2, 1], [1]];
    
    // Helper function to create a linked list from an array
    function createLinkedList(arr) {
      if (arr.length === 0) return null;
      
      const head = new LinkedList(arr[0]);
      let current = head;
      
      for (let i = 1; i < arr.length; i++) {
        current.next = new LinkedList(arr[i]);
        current = current.next;
      }
      
      return head;
    }
    
    // Helper function to convert a linked list to an array
    function linkedListToArray(head) {
      const result = [];
      let current = head;
      
      while (current !== null) {
        result.push(current.value);
        current = current.next;
      }
      
      return result;
    }
    
    // Helper function to compare arrays
    function arraysEqual(a, b) {
      if (a.length !== b.length) return false;
      
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
      
      return true;
    }
    
    for (let i = 0; i < tests.length; i++) {
      const list = createLinkedList(tests[i]);
      const resultList = fn(list);
      const resultArray = linkedListToArray(resultList);
      
      if (!arraysEqual(resultArray, answers[i])) {
        throw new Error(\`Test case \${i + 1} failed: expected \${JSON.stringify(answers[i])}, got \${JSON.stringify(resultArray)}\`);
      }
    }
    
    return true;
  } catch (error) {
    console.log("Error from reverseLinkedListHandler: ", error);
    throw new Error(error.message || String(error));
  }
}`,
  },
  {
    id: 2,
    pageId: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 3,
    videoId: "tZAa_jJ3SwQ?si=NgCJQltfsnVUO33E",
    problemStatement: `<p class='mt-3'>
    You are given an integer array <code>nums</code>. You are initially positioned at the <strong>first index</strong>
    and each element in the array represents your maximum jump length at that position.
  </p>
    <p class='mt-3'>
    Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.
    </p>
  `,
    examples: [
      {
        id: 0,
        inputText: `nums = [2,3,1,1,4]`,
        outputText: `true`,
        explanation:
          "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
      },
      {
        id: 1,
        inputText: `nums = [3,2,1,0,4]`,
        outputText: `false`,
        explanation:
          "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.",
      },
    ],
    constraints: `<li class='mt-2'><code>1 <= nums.length <= 10^4</code></li>
    <li class='mt-2'><code>0 <= nums[i] <= 10^5</code></li>`,
    starterCode: `// Do not edit function name
    function canJump(nums) {
  // Write your code here
};`,
    starterFunctionName: `canJump`,
    handlerFunction: `(fn: any) => {
  try {
    const tests = [
      [2, 3, 1, 1, 4],
      [3, 2, 1, 0, 4],
      [2, 0, 0],
      [2, 5, 0, 0],
    ];
    const answers = [true, false, true, true];

    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);

      if (result !== answers[i]) {
        console.log(\`Test case \${i + 1} failed! Expected \${answers[i]}, got \${result}\`);
        return false; // Return false if any test case fails
      }
    }

    return true; // All tests passed
  } catch (error: any) {
    console.log("Error from jumpGameHandler: ", error);
    return false;
  }
};
`,
  },
  {
    id: 3,
    pageId: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    order: 4,
    videoId: "xwjS0iZhw4I?si=M39dqLXGLWOOfInj",
    problemStatement: `<p class='mt-3'>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p> <p class='mt-3'>An input string is valid if:</p> <ul> <li class='mt-2'>Open brackets must be closed by the same type of brackets.</li> <li class='mt-3'>Open brackets must be closed in the correct order.</li>
	<li class="mt-3">Every close bracket has a corresponding open bracket of the same type. </li>
	</ul>`,
    examples: [
      {
        id: 0,
        inputText: 's = "()"',
        outputText: "true",
      },
      {
        id: 1,
        inputText: 's = "()[]{}"',
        outputText: "true",
      },
      {
        id: 2,
        inputText: 's = "(]"',
        outputText: "false",
      },
      {
        id: 3,
        inputText: 's = "([)]"',
        outputText: "false",
      },
    ],
    constraints: `<li class='mt-2'><code>1 <= s.length <= 10<sup>4</sup></code></li>
<li class='mt-2 '><code>s</code> consists of parentheses only <code class="text-md">'()[]{}'</code>.</li>`,
    starterCode: `// Do not edit function name 
    function validParentheses(s) {
  // Write your code here
};`,
    starterFunctionName: `validParentheses`,
    handlerFunction: `(fn: any) => {
  try {
    const tests = ["()", "()[]{}", "(]", "([)]", "{[]}"];
    const answers = [true, true, false, false, true];

    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);

      if (result !== answers[i]) {
        console.log(\`Test case \${i + 1} failed! Expected \${answers[i]}, got \${result}\`);
        return false; // Return false if any test case fails
      }
    }

    return true; // All tests passed
  } catch (error: any) {
    console.error("Error from validParenthesesHandler: ", error);
    return false;
  }
};`,
  },
  {
    id: 4,
    pageId: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Binary Search",
    order: 5,
    videoId: "JXU4Akft7yk?si=mmvpUh8mydBLXNiD",
    problemStatement: `
  <p class='mt-3'>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:</p>
    <li class="mt-3">Integers in each row are sorted from left to right.</li>
    <li class="mt-3">The first integer of each row is greater than the last integer of the previous row.</li>
  <p class='mt-3'>Given <code>matrix</code>, an <code>m x n</code> matrix, and <code>target</code>, return <code>true</code> if <code>target</code> is in the matrix, and <code>false</code> otherwise.</p>
  `,
    examples: [
      {
        id: 0,
        inputText: `matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
], target = 3`,
        outputText: `true`,
        img: "https://assets.leetcode.com/uploads/2020/10/05/mat.jpg",
      },
      {
        id: 1,
        inputText: `matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
], target = 13`,
        outputText: `false`,
        img: "https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg",
      },
      {
        id: 2,
        inputText: `matrix = [[1]], target = 1`,
        outputText: `true`,
      },
    ],
    constraints: `
  <li class='mt-2'><code>m == matrix.length</code></li>
  <li class='mt-2'><code>n == matrix[i].length</code></li>
  <li class='mt-2'><code>1 <= m, n <= 100</code></li>
  <li class='mt-2'><code>-10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup></code></li>
  `,
    starterCode: `// Do not edit function name
function searchMatrix(matrix, target) {
  // Write your code here
};`,
    starterFunctionName: `function searchMatrix()`,
    handlerFunction: `(fn: any) => {
  try {
    const tests = [
      {
        matrix: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        target: 3,
      },
      {
        matrix: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        target: 13,
      },
    ];

    const answers = [true, false];

    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i].matrix, tests[i].target);

      if (result !== answers[i]) {
        console.log(\`Test case \${i + 1} failed! Expected \${answers[i]}, got \${result}\`);
        return false; // Return false if any test case fails
      }
    }

    return true; // All tests passed
  } catch (error: any) {
    console.log("Error from search2DMatrixHandler: ", error);
    return false;
  }
};
`,
  },
  {
    id: 5,
    pageId: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    order: 6,
    videoId: "UuiTKBwPgAo?feature=shared",
    problemStatement: `<p class='mt-3'> 
  Given an integer array <code>height</code> of length <code>n</code>, there are <code>n</code> vertical lines drawn such that 
  the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.
</p>
<p class='mt-3'>
  Find two lines that together with the x-axis form a container, such that the container contains the most water.
</p>
<p class='mt-3'>
  Return the maximum amount of water a container can store.
</p>
<p class='mt-3'>
  <strong>Notice:</strong> You may not slant the container.</p>`,
    examples: [
      {
        id: 0,
        inputText: "height = [1,8,6,2,5,4,8,3,7]",
        outputText: "49",
        explanation:
          "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
        img: "https://assets.leetcode.com/https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg/2021/02/19/rev1ex1.jpg",
      },
      {
        id: 1,
        inputText: "height = [1,1]",
        outputText: "1",
      },
    ],
    constraints: `<li class='mt-2'>
  <code>2 ≤ height.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-2'>
  <code>0 ≤ height[i] ≤ 10<sup>4</sup></code>
</li>`,
    starterCode: `
    /**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
};`,
    starterFunctionName: `maxArea`,
    handlerFunction: `(fn) => {
  try {
    const heights = [
      [1, 8, 6, 2, 5, 4, 8, 3, 7],
      [1, 1],
      [4, 3, 2, 1, 4],
      [1, 2, 1]
    ];

    const answers = [49, 1, 16, 2];

    // Loop through all test cases to verify correctness
    for (let i = 0; i < heights.length; i++) {
      // result is the output of the user's function, and answer is the expected output
      const result = fn(heights[i]);

      if (result !== answers[i]) {
        throw new Error(
          console.log(\`Test case \${i + 1} failed: expected \${answers[i]}, got \${result}');
        );
      }
    }
    return true;
  } catch (error) {
    console.log("Container With Most Water handler function error");
    throw new Error(error.message || String(error));
  }
}`,
  },
  {
    id: 6,
    pageId: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "intervals",
    order: 7,
    videoId: "44H3cEC2fFM?feature=shared",
    problemStatement: `<p class='mt-3'> 
  Given an array of intervals where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, 
  merge all overlapping intervals, and return an array of the non-overlapping intervals 
  that cover all the intervals in the input.
</p>
`,
    examples: [
      {
        id: 0,
        inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        outputText: "[[1,5]]",
        explanation:
          "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
      },
      {
        id: 1,
        inputText: "intervals = [[1,4],[4,5]]",
        outputText: "49",
        explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
      },
    ],
    constraints: `<li class='mt-2'>
  <code>1 ≤ intervals.length ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-2'>
  <code>intervals[i].length == 2</code>
</li> 
<li class='mt-2'>
  <code>0 ≤ start<sub>i</sub> ≤ end<sub>i</sub> ≤ 10<sup>4</sup></code>
</li>
`,
    starterCode: `/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
};`,
    starterFunctionName: `merge`,
    handlerFunction: `const handler = (fn) => {
  try {
    const testCases = [
      { input: [[1,3],[2,6],[8,10],[15,18]], expected: [[1,6],[8,10],[15,18]] },
      { input: [[1,4],[4,5]], expected: [[1,5]] }
    ];

    // Loop through all test cases
    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i].input);
      
      if (!arraysEqual(result, testCases[i].expected)) {
        throw new Error(
          console.log(\`Test case \${i + 1} failed: expected \${JSON.stringify(testCases[i].expected)}, got \${JSON.stringify(result)}\`);
        );
      }
    }
    return true;
  } catch (error) {
    console.log("Merge Intervals handler function error");
    throw new Error(error.message || String(error));
  }
};

// Helper function to check if arrays of intervals are equal
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] !== b[i][0] || a[i][1] !== b[i][1]) return false;
  }
  return true;
}`,
  },
  {
    id: 7,
    pageId: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    order: 8,
    videoId: "hTM3phVI6YQ?feature=shared",
    problemStatement: `<p class='mt-3'> 
  Given the <code>root</code> of a binary tree, return its <strong>maximum depth</strong>.
</p>
<p class='mt-3'> 
  A binary tree's maximum depth is the number of nodes along the longest path 
  from the root node down to the farthest leaf node.
</p>
`,
    examples: [
      {
        id: 0,
        inputText: "root = [3,9,20,null,null,15,7]",
        outputText: "3",
        img: "https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg",
      },
      {
        id: 1,
        inputText: "root = [1,null,2]",
        outputText: "2",
      },
    ],
    constraints: `<li class='mt-2'>
  <code>0 ≤ Number of nodes ≤ 10<sup>4</sup></code>
</li> 
<li class='mt-2'>
  <code>-100 ≤ Node.val ≤ 100</code>
</li>
`,
    starterCode: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
};`,
    starterFunctionName: `maxDepth`,
    handlerFunction: `(fn) => {
  try {
    const testCases = [
      { input: [3,9,20,null,null,15,7], expected: 3 },
      { input: [1,null,2], expected: 2 }
    ];

    // Loop through all test cases
    for (let i = 0; i < testCases.length; i++) {
      const treeRoot = arrayToTree(testCases[i].input);
      const result = fn(treeRoot);
      
      if (result !== testCases[i].expected) {
        throw new Error(
          console.log(\`Test case \${i + 1} failed: expected \${testCases[i].expected}, got \${result}\`);
        );
      }
    }
    return true;
  } catch (error) {
    console.log("Max Depth of Binary Tree handler function error");
    throw new Error(error.message || String(error));
  }
}`,
  },
  {
    id: 8,
    pageId: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    order: 9,
    videoId: "kJZrMGpyWpk?feature=shared",
    problemStatement: `<p class='mt-3'> 
  You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
</p>
<p class='mt-3'> 
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
</p>
<p class='mt-3'> 
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.
</p>
`,
    examples: [
      {
        id: 0,
        inputText: "prices = [7,1,5,3,6,4]",
        outputText: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
      },
      {
        id: 1,
        inputText: "prices = [7,6,4,3,1]",
        outputText: "0",
        explanation:
          "In this case, no transactions are done and the max profit = 0.",
      },
    ],
    constraints: `<li class='mt-2'>
  <code>1 ≤ prices.length ≤ 10<sup>5</sup></code>
</li> 
<li class='mt-2'>
  <code>0 ≤ prices[i] ≤ 10<sup>4</sup></code>
</li>
`,
    starterCode: `/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
};`,
    starterFunctionName: `maxProfit`,
    handlerFunction: `(fn) => {
  try {
    const testCases = [
      { input: [7,1,5,3,6,4], expected: 5 },
      { input: [7,6,4,3,1], expected: 0 }
    ];

    // Loop through all test cases
    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i].input);
      
      if (result !== testCases[i].expected) {
        throw new Error(
          console.log(\`Test case \${i + 1} failed: expected \${testCases[i].expected}, got \${result}\`);
        );
      }
    }
    return true;
  } catch (error) {
    console.log("Max Profit handler function error");
    throw new Error(error.message || String(error));
  }
};`,
  },
  {
    id: 9,
    pageId: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    order: 10,
    videoId: "REOH22Xwdkk?feature=shared",
    problemStatement: `<p class='mt-3'> 
  Given an integer array <code>nums</code> of unique elements, return all possible subsets (the power set).
</p>
<p class='mt-3'> 
  The solution set must not contain duplicate subsets. Return the solution in any order.
</p>
`,
    examples: [
      {
        id: 0,
        inputText: "nums = [1,2,3]",
        outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      },
      {
        id: 1,
        inputText: "nums = [0]",
        outputText: "[[],[0]]",
      },
    ],
    constraints: `<li class='mt-2'>
  <code>1 ≤ nums.length ≤ 10</code>
</li> 
<li class='mt-2'>
  <code>-10 ≤ nums[i] ≤ 10</code>
</li>
<li class='mt-2'>
  <strong>All the numbers in <code>nums</code> are unique.</strong>
</li>
`,
    starterCode: `/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
};`,
    starterFunctionName: `subsets`,
    handlerFunction: `(fn) => {
  try {
    const testCases = [
      { input: [1,2,3], expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] },
      { input: [0], expected: [[],[0]] }
    ];

    // Function to compare two arrays of arrays regardless of order
    function arraysEqual(a, b) {
      if (a.length !== b.length) return false;
      const sortedA = a.map(sub => sub.slice().sort()).sort();
      const sortedB = b.map(sub => sub.slice().sort()).sort();
      return JSON.stringify(sortedA) === JSON.stringify(sortedB);
    }

    // Loop through all test cases
    for (let i = 0; i < testCases.length; i++) {
      const result = fn(testCases[i].input);
      
      if (!arraysEqual(result, testCases[i].expected)) {
        throw new Error(
          console.log(\`Test case \${i + 1} failed: expected \${JSON.stringify(testCases[i].expected)}, got \${JSON.stringify(result)}\`);
        );
      }
    }
    return true;
  } catch (error) {
    console.log("Subsets handler function error");
    throw new Error(error.message || String(error));
  }
}`,
  },
];
