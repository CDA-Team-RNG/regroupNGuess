import React from "react";

// properties names for when Button component is used
// add the e.preventDefault() & e.stopPropagation() in function assiciated to the button on click in the current parent
type ButtonProps = {
  onClickButton: React.MouseEventHandler<HTMLButtonElement>;
  innerHtml: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button className="button-component" onClick={props.onClickButton}>
      {props.innerHtml}
    </button>
  );
};
