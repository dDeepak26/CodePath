import { useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/utils/firebase/firebase";

export function useCreateUserInFirestore() {
  // const { user, isSignedIn } = useUser();
  const user = auth.currentUser;

  const createUserInFirestore = async () => {
    try {
      const userRef = doc(
        db,
        "users",
        user?.email || ""
      );

      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          username: user?.displayName,
          createdAt: user?.metadata?.creationTime?.toString(),
          solvedProblem: [],
        });
        console.log("User created in Firestore!");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    if (!user || !user?.uid) return;
    createUserInFirestore();
  }, [user]);
}
