import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const { user } = useUser();
  return (
    <div className="mt-28 flex justify-center items-center p-6">
      <div className="text-center w-full max-w-lg space-y-6">
        <img
          src={user?.imageUrl}
          alt="user profile"
          className="w-40 h-40 rounded-full border-4 border-black mx-auto"
        />
        <h1 className="text-4xl font-semibold">{user?.fullName}</h1>
        <p className="text-lg">{user?.primaryEmailAddress?.emailAddress}</p>

        <SignOutButton>
          <Button className="w-full py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300">
            Sign Out
          </Button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default ProfilePage;
