import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ProblemPageNavBar from "./components/ProblemPageNavBar";
import WorkSpace from "./components/WorkSpace";
import useProblemDataFB from "@/hooks/useProblemDataFB";

const ProblemPage = () => {
  const { isLoaded } = useUser();
  const { pageId } = useParams();

  // loading state
  if (!isLoaded) {
    return <LoadingSkeleton />;
  }

  // To fetch the problem data from firebase sort it based on order
  const problemsData = useProblemDataFB()
    ?.slice()
    .sort((a, b) => a.order - b.order);

  // to fetch current problem data based on pageID
  const currentProblemData = problemsData.find(
    (problem) => problem.pageId === pageId
  );

  if (!currentProblemData) {
    return (
      <div className="text-center p-4">
        <h2 className="text-red-500 text-xl">Problem not found</h2>
      </div>
    );
  }

  return (
    <div>
      <ProblemPageNavBar currentProblemData={currentProblemData} />
      {/* split screen component for problem description and code editor */}
      <WorkSpace currentProblemData={currentProblemData} />
    </div>
  );
};

export default ProblemPage;
