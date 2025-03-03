import { Problem } from "@/Data/problems";
import { db } from "@/utils/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { addProblems } from "@/utils/redux/problemSlice";
import { RootState } from "@/utils/redux/store";
import { useEffect } from "react";

const useProblemDataFB = () => {
  const dispatch = useDispatch();
  const problems = useSelector((state: RootState) => state.problems.problem);

  const getProblemDataFirebase = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "problems"));
      const fetchedProblems: Problem[] = [];

      querySnapshot.forEach((doc) => {
        const problemData = { id: doc.id, ...doc.data() } as Problem;
        fetchedProblems.push(problemData);
      });

      dispatch(addProblems(fetchedProblems));
    } catch (error) {
      console.error("Error fetching problems from Firebase:", error);
    }
  };

  useEffect(() => {
    if (problems.length === 0) {
      getProblemDataFirebase();
    }
  }, [problems, dispatch]);

  return problems;
};

export default useProblemDataFB;
