import { db } from "@/utils/firebase/firebase";
import { RootState } from "@/utils/redux/store";
import { doc, getDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { addUsers } from "@/utils/redux/userSlice";
import { User } from "@/types/user";
import { useEffect } from "react";

const useGetUserDataOnProblem = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const getUserDataOnProblem = async () => {
    if (!user) return;

    try {
      const userEmail = user.primaryEmailAddress?.emailAddress;
      if (!userEmail) return;

      const userRef = doc(db, "users", userEmail);
      const querySnapShort = await getDoc(userRef);

      if (querySnapShort.exists()) {
        const data = querySnapShort.data() as User;
        dispatch(addUsers(data));
      }
    } catch (error) {
      console.error("Error fetching user data from Firebase:", error);
    }
  };

  useEffect(() => {
    if (user) {
      getUserDataOnProblem();
    }
  }, [user]);

  return users;
};

export default useGetUserDataOnProblem;
