import React from "react";

import {DropDownForm} from "../pages-layout/DropDownForm";

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
      <div className="temp-dropcontainer">
        {/* TEMPS ? */}
        <button className="drop-down__button" onClick={(e) => dropDownPress(e)}>
          {props.teamName}
        </button>

        <section className="drop-down__panel-container">
          {/* ---------------------------------------- */}
          <DropDownForm gain="420" gambleClick={(e: React.MouseEvent<HTMLElement>) => gambleClick(e)} />
          {/* ---------------------------------------- */}
        </section>
        {/* TEMPS ? */}
      </div>
    </>
  );
};
