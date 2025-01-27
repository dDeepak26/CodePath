import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProblemPageNavBar = () => {
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
          <Link to={"/codepath"}>
            <Button variant={"default"}>Problem List</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProblemPageNavBar;
