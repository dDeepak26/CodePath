import { Link } from "react-router-dom";
import { closeModal, openModal } from "@/utils/redux/modalSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import Modal from "./Modal";
import { CircleCheckBig, Youtube } from "lucide-react";
import useProblemDataFB from "@/hooks/useProblemDataFB";

const ProblemTable = () => {
  const dispatch = useAppDispatch();
  const { isOpen, videoUrl } = useAppSelector((state) => state.modal);

  const handleYoutubeClick = (videoId: any) => {
    if (videoId) {
      dispatch(openModal(`https://www.youtube.com/embed/${videoId}`));
    }
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  // Fetch problems and sort by order
  const problems = useProblemDataFB()
    ?.slice()
    .sort((a, b) => a.order - b.order);

  return (
    <tbody className="text-gray-900">
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
            <td className="px-6 py-4 text-left">
              <Link
                className="hover:text-blue-600 cursor-pointer"
                to={`/codepath/problem/${doc?.pageId}`}
              >
                {`${doc?.order}. ${doc?.title}`}
              </Link>
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
      {/* Modal to show YouTube video */}
      <Modal isOpen={isOpen} onClose={closeModalHandler} videoUrl={videoUrl} />
    </tbody>
  );
};

export default ProblemTable;
