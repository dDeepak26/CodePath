import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CreateProblemNavBar: React.FC = () => {
  return (
    <nav className="p-4 border-b border-gray-300 shadow-sm bg-white sticky top-0 z-10">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-3 md:flex-row flex-col text-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Button variant="normal" className="flex items-center space-x-2">
            <img src="/navbarImage.png" alt="logo" width={40} height={25} />
            <span className="font-bold text-xl">CodePath</span>
          </Button>
        </div>

        {/* home page codepath Navigation Buttons */}
        <div className="flex items-center space-x-3">
          <Button>
            <Link to={"/codepath"}>Home</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default CreateProblemNavBar;
