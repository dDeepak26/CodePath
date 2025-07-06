import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { togglePage } from "../../utils/redux/pageSlice";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import CodePathNavBar from "./components/CodePathNavBar";
import ProblemListPage from "./ProblemListPage/index";
import ProfilePage from "./ProfilePage";
import { useCreateUserInFirestore } from "@/hooks/useCreateUserInFirestore";
import { auth } from "@/utils/firebase/firebase";
import { useNavigate } from "react-router-dom";

const CodePath: React.FC = () => {

  const user = auth.currentUser;
  const navigate = useNavigate();

  if (!user) {
    navigate("/")
  }

  const currentPage = useAppSelector((state) => state.page.currentPage);
  const dispatch = useAppDispatch();

  // to create user db
  useCreateUserInFirestore();

  // if (!isLoaded) {
  //   // Loading state
  //   return <LoadingSkeleton />;
  // }

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
