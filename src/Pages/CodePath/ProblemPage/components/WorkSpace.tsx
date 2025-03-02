import Split from "react-split";
import ProblemDescriptionSplitScreen from "./ProblemDescriptionSplitScreen";
import Playground from "./Playground";
import { Problem } from "@/Data/problems";

const WorkSpace = ({ currentProblemData }: { currentProblemData: Problem }) => {
  return (
    <>
      <Split className="split" minSize={0}>
        <ProblemDescriptionSplitScreen
          currentProblemData={currentProblemData}
        />
        <Playground currentProblemData={currentProblemData} />
      </Split>
    </>
  );
};

export default WorkSpace;
