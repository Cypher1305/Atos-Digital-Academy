import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-4 h-screen">
      <span className="loading loading-spinner text-info"></span>
      <span className="loading loading-spinner text-primary"></span>
      <span className="loading loading-spinner text-secondary"></span>
    </div>
  );
};

export default Loader;
