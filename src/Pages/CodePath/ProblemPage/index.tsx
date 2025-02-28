import { useUser } from "@clerk/clerk-react";
import AuthRedirect from "@/components/AuthRedirect";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ProblemPageNavBar from "./components/ProblemPageNavBar";
import WorkSpace from "./components/WorkSpace";

const ProblemPage = () => {
  const { isLoaded, isSignedIn } = useUser();

  // loading state
  if (!isLoaded) {
    return <LoadingSkeleton />;
  }

  // Redirect if user not signed in
  if (!isSignedIn) {
    return <AuthRedirect />;
  }

  return (
    <div>
      <ProblemPageNavBar />
      {/* split screen component for problem description and code editor */}
      <WorkSpace />
    </div>
  );
};

export default ProblemPage;
