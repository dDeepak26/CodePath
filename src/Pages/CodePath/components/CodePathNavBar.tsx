import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/hooks";
import { useUser } from "@clerk/clerk-react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
interface CodePathNavBarProps {
  togglePage: () => void;
}

const CodePathNavBar: React.FC<CodePathNavBarProps> = ({ togglePage }) => {
  const { user } = useUser();
  const adminEmails = import.meta.env.VITE_ADMIN_EMAILS?.split(",") || [];

  // Get currentPage state from Redux
  const currentPage = useAppSelector((state) => state.page.currentPage);

  // Set the button text based on the currentPage
  const buttonText =
    currentPage === "ProblemListPage" ? "Profile" : "Problem List";

  return (
    <div className="p-5 border-b border-gray-300 shadow-sm bg-white sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* CodePath */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Button variant={"normal"}>
            <img src="/navbarImage.png" alt="logo" width={40} height={25} />
            <span className="font-bold text-xl">CodePath</span>
          </Button>
        </div>
        {/* navigation buttons */}
        <div className="flex items-center space-x-3">
          {/* create button */}
          {adminEmails.includes(
            user?.primaryEmailAddress?.emailAddress || ""
          ) && (
            <Button>
              <Link to={"/codepath/create-problem"}>Create Problem</Link>
            </Button>
          )}
          {/* profile button */}
          <Button variant={"default"} onClick={togglePage}>
            {buttonText === "Profile" ? (
              <>
                <img
                  src={user?.imageUrl}
                  alt="No Profile Image"
                  className="h-6 w-6 rounded-lg border-white mr-2"
                />
                {buttonText}
              </>
            ) : (
              buttonText
            )}
          </Button>
          {/* Home page button */}
          <Button>
            <Home />
            <Link to={"/"}>Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodePathNavBar;
