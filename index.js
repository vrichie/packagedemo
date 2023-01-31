import React, { useState } from "react";

const Button = (props) => {
  const [hover, setHover] = useState(false);
  const buttonStyles = {
    alignItems: "center",
    backgroundColor: "transparent",
    width: "fit-content",
    color: "#012044",
    cursor: " pointer",
    display: "flex",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.5",
    textDecoration: "none",
    outline: "0",
    border: " 0",
    padding: "5px 20px",
    border: "1px solid #012044",
    transition: "all .42s cubic-bezier(.25,.8,.25,1)",

    borderRadius: "20px",
  };
  const beforeStyles = {
    backgroundColor: "#fff",
    content: "",
    display: "inline-block",
    height: "2px",
    borderRadius: "10px",
    marginRight: "10px",
    transition: "all .42s cubic-bezier(.25,.8,.25,1)",
    width: " 0",
  };
  const hoverStyles = {
    backgroundColor: "#fff",
    width: "2rem",
  };
  const buttonHover = {
    backgroundColor: "#012044",
    color: "#fff",
  };
  return (
    <button
      style={hover ? { ...buttonStyles, ...buttonHover } : { ...buttonStyles }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        style={
          hover ? { ...beforeStyles, ...hoverStyles } : { ...beforeStyles }
        }
      ></span>{" "}
      {props.title}
    </button>
  );
};

export const FancyButton = Button;
export default FancyButton;
