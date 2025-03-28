import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import useGetUserDataOnProblem from "@/hooks/useGetUserDataOnProblem";
import useProblemDataFB from "@/hooks/useProblemDataFB";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const ProfilePage = () => {
  const { user } = useUser();
  const { solvedProblem } = useGetUserDataOnProblem();
  const problemData = useProblemDataFB();
  console.log(solvedProblem.length);
  console.log(problemData.length);
  const data = [
    {
      name: "Solved", value: solvedProblem.length
    },
    { name: "Remaining", value: (problemData.length - solvedProblem.length)  }
  ]
  const COLORS = ["#39FF14", "#E9EAEC"];

  return (
    <div className="flex flex-row">
      <div className="flex justify-center items-center w-full p-6 mt-16">
        <div className="text-center max-w-lg space-y-6">
          <img
            src={user?.imageUrl}
            alt="user profile"
            className="w-40 h-40 rounded-full border-4 border-black mx-auto"
          />
          <h1 className="text-4xl font-semibold">{user?.fullName}</h1>
          <p className="text-lg">{user?.primaryEmailAddress?.emailAddress}</p>

          <SignOutButton>
            <Button className="w-full py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300">
              Sign Out
            </Button>
          </SignOutButton>
        </div>
      </div>
      <div className=" flex justify-center items-center p-6 w-full mt-16">
        <div className="text-center max-w-lg space-y-6">
        <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        startAngle={0}
        endAngle={180}
        innerRadius={80}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>

      {/* Centered Text */}
      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={20}
        fontWeight="bold"
      >
        {`${solvedProblem.length}/${problemData.length}`}
      </text>

      <Tooltip />
      <Legend />
    </PieChart>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
