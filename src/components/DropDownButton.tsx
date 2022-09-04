import React, {useState} from "react";

import {DropDownForm} from "../pages-layout/DropDownForm";
import {DropDownPostBet} from "../pages-layout/DropDownPostBet";

export const DropDownButton = (props: any) => {
  // change dropDown panel display once user have bet.
  const [isGambled, setIsGambled] = useState(true);

  const dropDownBtnPress = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("drop down press");
  };

  const gambleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("bet confirmation");
  };

  // temp change dropdownContainer display
  const changeDisplay = () => {
    setIsGambled((prevIsGambled) => {
      return !prevIsGambled;
    });
  };

  return (
    <>
      <div className="temp-dropcontainer">
        {/* TEMPS ? */}
        <button className="drop-down__button" onClick={(e) => dropDownBtnPress(e)}>
          {props.teamName}
        </button>

        <section className="drop-down__panel-container">
          {/* ---------------------------------------- */}
          {isGambled ? (
            <DropDownPostBet />
          ) : (
            <DropDownForm gain="420" gambleClick={(e: React.MouseEvent<HTMLElement>) => gambleClick(e)} />
          )}

          {/* ---------------------------------------- */}
        </section>
        {/* TEMPS ? */}
        <button onClick={changeDisplay}>Change drop down</button>
      </div>
    </>
  );
};
