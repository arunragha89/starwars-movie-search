import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-auto justify-center items-center">
      <div
        style={{ borderTop: "5px solid white" }}
        className="animate-spin border-gray-500 border-4 border-solid	rounded-full w-12 h-12"
      ></div>
    </div>
  );
};

export default Loader;
