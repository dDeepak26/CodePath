import Split from "react-split";
import ProblemDescriptionSplitScreen from "./ProblemDescriptionSplitScreen";
import Playground from "./Playground";

const WorkSpace = () => {
  return (
    <>
      <Split className="split" minSize={0}>
        <ProblemDescriptionSplitScreen />
        <Playground />
      </Split>
    </>
  );
};

export default WorkSpace;
