import React from "react";

import {Button} from "./Button";

export const DropDownButton = () => {
  const dropDownPress = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("drop down press");
  };

  const gambleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("bet confirmation");
  };

  return (
    <>
      <button className="drop-down-button" onClick={(e) => dropDownPress(e)}>
        <section>
          <Button innerHtml="Parier" onClickButton={(e) => gambleClick(e)} />
        </section>
      </button>
    </>
  );
};
