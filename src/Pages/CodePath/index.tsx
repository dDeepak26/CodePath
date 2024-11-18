import AuthRedirect from "@/components/AuthRedirect";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { UserButton, useUser } from "@clerk/clerk-react";

function CodePath() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    // Handle loading state
    return <LoadingSkeleton />;
  }

  if (!isSignedIn) {
    // Handle signed out state
    return <AuthRedirect />;
  }
  return (
    <div>
      <UserButton />
      <p>{user?.fullName}</p>
      <p>{user?.primaryEmailAddress?.emailAddress}</p>
      hello
    </div>
  );
}

export default CodePath;
