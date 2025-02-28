import { Button } from "@/components/ui/button";
import { Expand, Settings } from "lucide-react";

const PlaygroundNavBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-200 h-11 w-full">
      <div className="flex items-center text-black">
        <Button>JavaScript</Button>
      </div>
      <div className="flex items-center m-2">
        <Button variant={"normal"}>
          <Settings />
        </Button>
        <Button variant={"normal"}>
          <Expand />
        </Button>
      </div>
    </div>
  );
};

export default PlaygroundNavBar;
