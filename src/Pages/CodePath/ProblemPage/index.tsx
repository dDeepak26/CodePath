import { useUser } from "@clerk/clerk-react";
import AuthRedirect from "@/components/AuthRedirect";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ProblemPageNavBar from "./components/ProblemPageNavBar";

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
    <div className="h-screen">
      <ProblemPageNavBar />
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <h1 className="text-center text-2xl">Problem Page</h1>
        </div>
        <div className="flex w-full h-full">
          <div className="bg-gray-50 flex-1 h-full">1</div>
          <div className="bg-gray-100 flex-1 h-full">2</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
