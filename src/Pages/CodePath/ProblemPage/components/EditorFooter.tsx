import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const EditorFooter = () => {
  return (
    <div className="flex absolute bottom-0 z-10 w-full bg-gray-300">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <Button variant={"ghost"}>
            Console
            <ChevronUp />
          </Button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button>Run</Button>
          <Button variant={"normal"} className="bg-green-500">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorFooter;
