import React from "react";
import "./index.scss";
export const TextExpander = ({ children }) => {
  const [text, setText] = React.useState(children);
  const [textVisible, setTextVisible] = React.useState(false);

  const handleClick = () => {
    setTextVisible(!textVisible);
    if (textVisible == false) {
      setText(children.slice(0, 250) + "...");
    } else {
      setText(children);
    }
  };

  console.log(children.length);
  return (
    <p>
      {text}
      <p className="seeMoreLess" onClick={handleClick}>
        {textVisible ? "Ver mais" : "Ver menos"}
      </p>
    </p>
  );
};
