import { Button } from "@/components/ui/button";
import { AlignJustify, ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Timer from "./Timer";
import { UserButton } from "@clerk/clerk-react";
import { Problem } from "@/types/problems";
import useProblemDataFB from "@/hooks/useProblemDataFB";

const ProblemPageNavBar = ({
  currentProblemData,
}: {
  currentProblemData: Problem;
}) => {
  const problems = useProblemDataFB();
  const navigate = useNavigate();

  const handleProblemChange = (isForward: boolean) => {
    if (!currentProblemData || !problems) return;

    const problemList = Object.values(problems);
    const totalProblems = problemList.length;

    if (totalProblems === 0) return;

    const currentOrder = currentProblemData?.order;

    const direction = isForward ? 1 : -1;
    let nextProblemOrder = currentOrder + direction;

    // Wrap around if nextProblemOrder is out of bounds
    if (nextProblemOrder < 1) {
      nextProblemOrder = totalProblems; // Go to last problem
    } else if (nextProblemOrder > totalProblems) {
      nextProblemOrder = 1; // Go to first problem
    }

    const nextProblem = problemList.find(
      (object) => object?.order === nextProblemOrder
    );
    const nextProblemKey = nextProblem?.pageId;

    if (nextProblemKey) {
      navigate(`/codepath/problem/${nextProblemKey}`);
    }
  };

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

        {/* Problem Navigation Buttons */}
        <div className="flex items-center space-x-3">
          {/* Navigate to Previous Problem */}
          <ArrowLeft
            className="cursor-pointer hover:h-7 w-7"
            onClick={() => handleProblemChange(false)}
          />

          <Link to={"/codepath"}>
            <Button variant="normal" className="text-sm hover:text-base">
              <AlignJustify /> Problem List
            </Button>
          </Link>

          {/* Navigate to Next Problem */}
          <ArrowRight
            className="cursor-pointer hover:h-7 w-7"
            onClick={() => handleProblemChange(true)}
          />
        </div>

        {/* Timer & User Button */}
        <div className="flex items-center space-x-3">
          <Timer />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default ProblemPageNavBar;
