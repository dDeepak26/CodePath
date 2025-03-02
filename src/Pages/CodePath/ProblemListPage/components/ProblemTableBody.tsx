import { problems } from "@/Data/problems";
import { CircleCheckBig, Youtube } from "lucide-react";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { closeModal, openModal } from "@/utils/redux/modalSlice";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase/firebase";

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

  // const getData = async () => {
  //   try {
  //     const docRef = doc(db, "problems", "0"); // Ensure "0" exists as a string
  //     const docSnap = await getDoc(docRef);
  //     const problemDataF = docSnap.data();
  //     console.log("Document Data:", problemDataF);
  //     console.log(problemDataF?.title);
  //     console.log(problemDataF?.examples);
  //     console.log(problemDataF?.constraints);
  //     console.log(problemDataF?.handlerFunction);
  //   } catch (error) {
  //     console.error("Error fetching document:", error);
  //   }
  // };

  // getData();

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
                {`${doc?.id + 1}. ${doc?.title}`}
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
      {/* Modal to show yt video */}
      <Modal isOpen={isOpen} onClose={closeModalHandler} videoUrl={videoUrl} />
    </tbody>
  );
};

export default ProblemTable;
