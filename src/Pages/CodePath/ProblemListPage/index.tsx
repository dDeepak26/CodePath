import ProblemTableBody from "./components/ProblemTableBody";
import ProblemTableHead from "./components/ProblemTableHead";

const ProblemListPage = () => {
  return (
    <>
      <main className="min-h-screen">
        {/* Header title */}
        <h1
          className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5"
        >
          &rdquo;QUALITY OVER QUANTITY&rdquo; 👇
        </h1>
        {/* table */}
        <div className="relative overflow-x-auto mx-auto px-6 pb-10">
          <table className="text-sm text-center sm:w-7/12 w-full max-w-[1200px] mx-auto">
            <ProblemTableHead />
            <ProblemTableBody />
          </table>
        </div>
      </main>
    </>
  );
};

export default ProblemListPage;
