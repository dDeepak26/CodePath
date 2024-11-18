import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { Link } from "react-router-dom";

export function AuthNavBar() {
  return (
    <div className="p-5 border-b border-gray-300 shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        {/* CodePath */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src="/navbarImage.png" alt="logo" width={40} height={25} />
          <span className="font-bold text-xl">CodePath</span>
        </div>
        {/* navigation buttons */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <Button>
              <House className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
