import React from "react";

// properties names for when Button component is used
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
