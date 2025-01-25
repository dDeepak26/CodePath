import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { togglePage } from "../../utils/pageSlice";
import AuthRedirect from "@/components/AuthRedirect";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import CodePathNavBar from "./components/CodePathNavBar";
import ProblemListPage from "./ProblemListPage/index";
import ProfilePage from "./ProfilePage";

const CodePath: React.FC = () => {
  const { isLoaded, isSignedIn } = useUser();
  const currentPage = useAppSelector((state) => state.page.currentPage);
  const dispatch = useAppDispatch();

  if (!isLoaded) {
    // Loading state
    return <LoadingSkeleton />;
  }

  if (!isSignedIn) {
    // Redirect if not signed in
    return <AuthRedirect />;
  }

  return (
    <div>
      {/* Nav bar */}
      <CodePathNavBar togglePage={() => dispatch(togglePage())} />
      {/* Rendering Problem | Profile page */}
      {currentPage === "ProblemListPage" ? (
        <ProblemListPage />
      ) : (
        <ProfilePage />
      )}
    </div>
  );
};

export default CodePath;
