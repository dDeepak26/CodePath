export type ExampleType = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
};

// local problem data
export type ProblemType = {
  id: string;
  title: string;
  problemStatement: string;
  examples: ExampleType[];
  constraints: string;
  order: number;
  starterCode: string;
  handlerFunction: ((fn: any) => boolean) | string;
  starterFunctionName: string;
};

export type DBProblemType = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  likes: number;
  dislikes: number;
  order: number;
  videoId?: string;
  link?: string;
};
