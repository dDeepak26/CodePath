import { useState } from "react";
import Split from "react-split";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import ProblemDescriptionSplitScreen from "./ProblemDescriptionSplitScreen";
import Playground from "./Playground";
import { Problem } from "@/types/problems";

const WorkSpace = ({ currentProblemData }: { currentProblemData: Problem }) => {
  const [success, setSuccess] = useState<boolean>(false);
  const { width, height } = useWindowSize();
  return (
    <>
      <Split className="split" minSize={0}>
        <ProblemDescriptionSplitScreen
          currentProblemData={currentProblemData}
        />
        <Playground currentProblemData={currentProblemData} />
      </Split>
      {success && (
        <Confetti
          gravity={0.3}
          numberOfPieces={200}
          tweenDuration={4000}
          width={width - 1}
          height={height - 1}
        />
      )}
    </>
  );
};

export default WorkSpace;
