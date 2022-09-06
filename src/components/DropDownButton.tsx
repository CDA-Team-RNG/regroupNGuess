import React, {useEffect, useState} from "react";

import {DropDownForm} from "./DropDownForm";
import {DropDownPostBet} from "../pages-layout/DropDownPostBet";

import arrowDown from "../assets/play-white.png";

export const DropDownButton = (props: any) => {
  const [isPanelDropped, setisPanelDropped] = useState<boolean>(false);
  // change dropDown panel display once user have bet.
  const [isGambled, setIsGambled] = useState<boolean>(false);
  const [betValue, setBetValue] = useState<string>("");

  // ==========================================================
  const dropDownBtnPress = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    setisPanelDropped((prev) => !prev);
  };

  // ==========================================================
  // form submit, get bet value, to be send to "after bet" display
  const changeBetValue = (betValue: string) => {
    // set bet points ( from input )
    setBetValue(() => betValue);

    // if "parier" button is pressed / form sumbit
    // allow to switch display
    setIsGambled((prevIsGambled) => !prevIsGambled);
  };

  return (
    <section className="drop-down__main-container">
      {/* TEMPS ? */}
      <button
        className={`
            drop-down__button-general 
            ${isPanelDropped ? "drop-down__button-on" : "drop-down__button-off"}`}
        onClick={(e) => dropDownBtnPress(e)}>
        {props.teamName}

        {isPanelDropped && (
          <figure className="dropdown__arrow">
            <img
              src={arrowDown}
              alt="arrow down"
            />
          </figure>
        )}
      </button>

      <section
        className={`
            drop-down__panel-container 
            ${isPanelDropped ? "drop-down__panel-container-open" : "drop-down__panel-container-close"}
            ${props.number === 0 ? "panel-left" : "panel-right"}
        `}>
        {/* __________________  Switch panel according to gambling confirm ___________________ */}
        {isGambled ? (
          <DropDownPostBet
            gain="420"
            bet={betValue}
            panelDisplay={isPanelDropped}
          />
        ) : (
          <DropDownForm
            gain="420"
            sendBet={changeBetValue}
            panelDisplay={isPanelDropped}
          />
        )}

        {/* ---------------------------------------- */}
      </section>
    </section>
  );
};
