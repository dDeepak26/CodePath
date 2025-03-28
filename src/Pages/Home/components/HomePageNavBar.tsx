import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface HomePageNavBarProps {
  onFeatureClick: () => void;
  onExplainClick: () => void;
}

const HomePageNavBar: React.FC<HomePageNavBarProps> = ({
  onFeatureClick,
  onExplainClick,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { user } = useUser();

  return (
    <div className="p-5 border-b border-gray-300 shadow-sm bg-white sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* CodePath */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Button variant={"normal"} onClick={scrollToTop}>
            <img src="/navbarImage.png" alt="logo" width={40} height={25} />
            <span className="font-bold text-xl">CodePath</span>
          </Button>
        </div>
        {/* navigation buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="link" onClick={onFeatureClick}>
            Feature
          </Button>
          <Button variant="link" onClick={onExplainClick}>
            How It Works
          </Button>
          {!user ? (
            <Link to="/auth">
              <Button>
                <Mail className="h-4 w-4" /> Sign In
              </Button>
            </Link>
          ) : (
            <Link to="/codepath">
              <Button>
                Problem
                <UserButton />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { HomePageNavBar };
