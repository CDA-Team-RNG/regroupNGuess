import React, {useState} from "react";

import {DropDownForm} from "./DropDownForm";
import {DropDownPostBet} from "../pages-layout/DropDownPostBet";

export const DropDownButton = (props: any) => {
  // change dropDown panel display once user have bet.
  const [isGambled, setIsGambled] = useState<boolean>(true);
  const [betValue, setBetValue] = useState<string>("");

  // ==========================================================
  const dropDownBtnPress = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    console.log("drop down press");
  };

  // ==========================================================
  // use gamble button click to switch panel display
  const gambleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsGambled((prevIsGambled) => {
      return !prevIsGambled;
    });
  };

  // ==========================================================
  // form submit, get bet value, to be send to "after bet" display
  const changeBetValue = (betValue: string) => {
    setBetValue(() => betValue);

    console.log("change bet");
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
            <DropDownPostBet gain="420" bet={betValue} />
          ) : (
            <DropDownForm
              gain="420"
              gambleClick={(e: React.MouseEvent<HTMLElement>) => gambleClick(e)}
              sendBet={changeBetValue}
            />
          )}

          {/* ---------------------------------------- */}
        </section>
        {/* TEMPS ? */}
        <button onClick={gambleClick}>Change drop down</button>
      </div>
    </>
  );
};
