const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-[#667eea] to-[#764ba2]">
      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      <p className="text-white mt-5 text-lg font-medium">{text}</p>
    </div>
  );
};

export default Loading;
