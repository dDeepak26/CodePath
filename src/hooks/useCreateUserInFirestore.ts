import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase/firebase";

export function useCreateUserInFirestore() {
  const { user, isSignedIn } = useUser();
  console.log(user);

  const createUserInFirestore = async () => {
    try {
      const userRef = doc(
        db,
        "users",
        user?.primaryEmailAddress?.emailAddress || ""
      );

      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          username: user?.fullName,
          createdAt: user?.createdAt?.toString(),
          solvedProblem: [],
        });
        console.log("User created in Firestore!");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    if (!isSignedIn || !user?.id) return;
    createUserInFirestore();
  }, [user, isSignedIn]);
}
