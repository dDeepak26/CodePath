import { Button } from "@/components/ui/button";
import { AlignJustify, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

const ProblemPageNavBar = () => {
  return (
    <nav className="p-4 border-b border-gray-300 shadow-sm bg-white sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 md:flex-row flex-col text-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Button variant="normal" className="flex items-center space-x-2">
            <img src="/navbarImage.png" alt="logo" width={40} height={25} />
            <span className="font-bold text-xl">CodePath</span>
          </Button>
        </div>

        {/* Problem Navigation Buttons (Stack on Small Screens) */}
        <div className="flex items-center space-x-3">
          <ArrowLeft className="cursor-pointer hover:h-7 w-7" />
          <Link to={"/codepath"}>
            <Button variant="normal" className="text-sm hover:text-base">
              <AlignJustify /> Problem List
            </Button>
          </Link>
          <ArrowRight className="cursor-pointer hover:h-7 w-7" />
        </div>

        {/* Timer & Page Navigation Buttons */}
        <div className="flex items-center space-x-3">
          <Timer />
          <Link to={"/codepath"}>
            <Button variant="default">Problem List</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProblemPageNavBar;
