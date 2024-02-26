import React from "react";
// import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <>
      <ReactLoading type={"bars"} color={"#0069e0"} height={100} width={100} />
    </>
  );
};

export default Loader;
