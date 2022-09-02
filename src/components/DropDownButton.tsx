import React from "react";

import {Button} from "./Button";

export const DropDownButton = () => {
  const gambleClick = () => {
    console.log("bet confirmation");
  };

  return (
    <>
      <button>
        <Button innerHtml="Parier" onClickButton={gambleClick} />
      </button>
    </>
  );
};
