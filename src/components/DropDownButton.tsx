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
        {/* TEMPS ? */}
        <button className="drop-down__button" onClick={(e) => dropDownPress(e)}>
          {props.teamName}
        </button>

        <section className="drop-down__panel-container">
          {/* ---------------------------------------- */}
          <form className="drop-down__form">
            <div>
              <label htmlFor="betValueiD">Mise :</label>
              <input type="text" name="betValue" id="betValueiD" />
              <p>
                Gain : <span>420</span>
              </p>
            </div>
            <Button innerHtml="Parier" onClickButton={(e) => gambleClick(e)} />
          </form>
          {/* ---------------------------------------- */}
        </section>
        {/* TEMPS ? */}
      </div>
    </>
  );
};
