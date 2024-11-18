import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface HomePageNavBarProps {
  onExploreClick: () => void;
  onProductClick: () => void;
  onDeveloperClick: () => void;
}

const HomePageNavBar: React.FC<HomePageNavBarProps> = ({
  onExploreClick,
  onProductClick,
  onDeveloperClick,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <Button variant="link" onClick={onExploreClick}>
            Explore
          </Button>
          <Button variant="link" onClick={onProductClick}>
            Product
          </Button>
          <Button variant="link" onClick={onDeveloperClick}>
            Developer
          </Button>
          <Link to="/auth">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { HomePageNavBar };
