import { problems } from "@/mockData/problems";
import { CircleCheckBig, Youtube } from "lucide-react";

const ProblemTable = () => {
  const handleYoutubeClick = (videoId: string) => {
    if (videoId) {
      window.open(`https://youtu.be/${videoId}`, "_blank");
    }
  };

  return (
    <tbody className="text-gray-900 text-center">
      {problems.map((doc, id) => {
        const difficultyColor =
          doc?.difficulty === "Easy"
            ? "text-green-600"
            : doc?.difficulty === "Medium"
            ? "text-yellow-600"
            : "text-red-600";
        return (
          <tr
            key={doc?.id}
            className={id % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
          >
            {/* CircleCheckBig Icon */}
            <th className="px-6 py-4 font-medium whitespace-nowrap text-green-500">
              <div className="flex justify-center items-center">
                <CircleCheckBig fontSize={18} width={18} />
              </div>
            </th>

            {/* Problem Title */}
            <td className="px-6 py-4">
              <a
                className="hover:text-blue-600 cursor-pointer"
                href={`/codepath/problem/${doc?.id}`}
              >
                {doc?.title}
              </a>
            </td>

            {/* Difficulty */}
            <td className={`px-6 py-4 ${difficultyColor}`}>{doc.difficulty}</td>

            {/* Category */}
            <td className="px-6 py-4">{doc?.category}</td>

            {/* Youtube Icon or "coming soon" */}
            <td className="px-6 py-4">
              {doc?.videoId ? (
                <div
                  className="flex justify-center items-center cursor-pointer hover:text-red-500"
                  onClick={() => handleYoutubeClick(doc?.videoId!)}
                >
                  <Youtube fontSize={18} />
                </div>
              ) : (
                <p>Coming soon...</p>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProblemTable;
