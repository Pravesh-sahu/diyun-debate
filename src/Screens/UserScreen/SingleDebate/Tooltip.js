import React from "react";
import "./Tooltip.css";

const Tooltip = ({ x, y, title }) => {
  const style = {
    position: "absolute",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "350px",
    maxHeight: "200px",
    overflowY: "auto",
    left: x + 10,
    top: y + 10,
  };

  return <div className="debate-tooltip" style={style}>{title}</div>;
};

export default Tooltip;