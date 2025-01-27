const LoadingSkeleton = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <div className="w-7 h-7 border-2 border-t-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="ml-3 text-xl text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
