import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { LogOut, CheckCircle2 } from "lucide-react";
import useGetUserDataOnProblem from "@/hooks/useGetUserDataOnProblem";
import useProblemDataFB from "@/hooks/useProblemDataFB";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ProfilePage = () => {
  const { user } = useUser();
  const { solvedProblem } = useGetUserDataOnProblem();
  const problemData = useProblemDataFB();

  const data = [
    {
      name: "Solved",
      value: solvedProblem.length,
    },
    {
      name: "Remaining",
      value: problemData.length - solvedProblem.length,
    },
  ];

  const COLORS = ["#10B981", "#EF4444"]; // Emerald for solved, red for remaining

  const completionPercentage = Math.round(
    (solvedProblem.length / problemData.length) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <img
                src={user?.imageUrl}
                alt="user profile"
                className="w-48 h-48 rounded-full border-4 border-emerald-500 shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-emerald-500 text-white rounded-full p-1">
                <CheckCircle2 size={24} />
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {user?.fullName}
              </h1>
              <p className="text-gray-600 mb-6">
                {user?.primaryEmailAddress?.emailAddress}
              </p>

              <SignOutButton>
                <Button
                  variant="destructive"
                  className="w-full flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 transition-colors"
                >
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </Button>
              </SignOutButton>
            </div>
          </div>

          {/* Problem Completion Section */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Problem Completion
            </h2>

            <div className="relative">
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={130}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      className="transition-all duration-300 hover:opacity-80"
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-gray-800">
                  {`${solvedProblem.length}/${problemData.length}`}
                </div>
                <div className="text-sm text-gray-600">
                  {completionPercentage}% Completed
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-500 ease-out"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
