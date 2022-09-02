import React from "react";

import {Button} from "./Button";

export const DropDownButton = (props: any) => {
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
      <div>
        <button className="drop-down-button" onClick={(e) => dropDownPress(e)}>
          {props.teamName}
        </button>

        <section>
          <Button innerHtml="Parier" onClickButton={(e) => gambleClick(e)} />
        </section>
      </div>
    </>
  );
};
