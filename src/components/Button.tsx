import React from "react";

type ButtonProps = {
  onClickButton: React.MouseEventHandler<HTMLButtonElement>;
  innerHtml: string;
};

export const Button = (props: ButtonProps) => {
  return <button onClick={props.onClickButton}> {props.innerHtml} </button>;
};
