import { useUser } from "@clerk/clerk-react";
import { adminEmails } from "../../../../../adminEmails";

const ProblemTableHead = () => {
  const { user } = useUser();
  return (
    <thead className="text-sm text-gray-800 uppercase border-b border-gray-600 shadow-md ">
      <tr>
        <th scope="col" className="px-1 py-3 w-0 font-medium">
          Status
        </th>
        <th scope="col" className="px-6 py-3 w-0 font-medium">
          Title
        </th>
        <th scope="col" className="px-6 py-3 w-0 font-medium">
          Difficulty
        </th>

        <th scope="col" className="px-6 py-3 w-0 font-medium">
          Category
        </th>
        <th scope="col" className="px-6 py-3 w-0 font-medium">
          Solution
        </th>
        {adminEmails.includes(
          user?.primaryEmailAddress?.emailAddress || ""
        ) && (
          <th scope="col" className="px-6 py-3 w-0 font-medium">
            Edit
          </th>
        )}
      </tr>
    </thead>
  );
};

export default ProblemTableHead;
