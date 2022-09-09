import React, {useEffect, useState} from "react";

import {DropDownForm} from "./DropDownForm";
import {DropDownPostBet} from "../pages-layout/DropDownPostBet";

import arrowDown from "../assets/play-white.png";

// -----------------------------------------------------------
// -----------------------------------------------------------

type dropDownBtnProps = {};

export const DropDownButton = (props: any) => {
  const [betValue, setBetValue] = useState<string>("");

  const [isPanelDropped, setisPanelDropped] = useState<boolean>(false);
  const [isGambled, setIsGambled] = useState<boolean>(false);

  // ==========================================================

  /**
   * Create a delay during which the panel drop cant be activated ( prevent potential css animation issue )
   * @param e - button event
   */
  const trottleDrop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const theButton = e.currentTarget;

    theButton.disabled = true;
    setisPanelDropped((prev) => !prev);
    setTimeout(() => {
      console.log("delay");
      return (theButton.disabled = false);
    }, 200);
  };

  // ==========================================================

  /**
   * Save the bet value with form submit, isGambled state changed to switch display panel
   * @param {string} betValue - string
   */
  const changeBetValue = (betValue: string) => {
    // set bet points ( from input )
    setBetValue(() => betValue);

    // if "parier" button is pressed / form sumbit
    // allow to switch display
    setIsGambled((prevIsGambled) => !prevIsGambled);
  };

  return (
    <section className="drop-down__main-container">
      <button
        className={`
            drop-down__button-general 
            ${isPanelDropped ? "drop-down__button-on" : "drop-down__button-off"}`}
        onClick={(e) => trottleDrop(e)}>
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
            ${props.side === "left" ? "panel-left" : "panel-right"}
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
