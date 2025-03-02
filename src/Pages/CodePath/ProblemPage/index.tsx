import { useParams } from "react-router-dom";
import { problems } from "@/Data/problems";
import { useUser } from "@clerk/clerk-react";
import AuthRedirect from "@/components/AuthRedirect";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ProblemPageNavBar from "./components/ProblemPageNavBar";
import WorkSpace from "./components/WorkSpace";

const ProblemPage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { pageId } = useParams();

  // loading state
  if (!isLoaded) {
    return <LoadingSkeleton />;
  }

  // Redirect if user not signed in
  if (!isSignedIn) {
    return <AuthRedirect />;
  }

  // To fetch the problem data
  const currentProblemData = problems.find(
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
      <ProblemPageNavBar />
      {/* split screen component for problem description and code editor */}
      <WorkSpace currentProblemData={currentProblemData} />
    </div>
  );
};

export default ProblemPage;
