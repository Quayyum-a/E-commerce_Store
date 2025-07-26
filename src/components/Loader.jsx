const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-yellow-500 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
