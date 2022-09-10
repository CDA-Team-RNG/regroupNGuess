import React, {useEffect, useState, useRef} from "react";

import {DropDownForm} from "./DropDownForm";
import {DropDownPostBet} from "../pages-layout/DropDownPostBet";

import arrowDown from "../assets/play-white.png";

// -----------------------------------------------------------
// -----------------------------------------------------------

type dropDownBtnProps = {};

export const DropDownButton = (props: any) => {
  const [betValue, setBetValue] = useState<string>("");
  const [isGambled, setIsGambled] = useState<boolean>(false);

  // ==========================================================
  /**
   * Create a delay during which the panel drop cant be activated ( prevent potential css animation issue )
   * @param e - button event
   */
  const trottleDrop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const dropdownbtn = e.currentTarget;

    props.getInfo(props.side, dropdownbtn);
  };

  // ==========================================================
  /**
   * Save the bet value with form submit, isGambled state changed to switch display panel
   * @param {string} betValue - string, attribute coming from dropdownForm child
   */
  const changeBetValue = (betValue: string) => {
    setBetValue(() => betValue);
    // when betvalue is received mean form is submited, therefore can switch panel display
    // with "isGambled"
    setIsGambled((prev) => !prev);
  };

  // ==================================================================
  // ==================================================================
  return (
    <section className="drop-down__main-container">
      {/* __________________  Drop Down Button ___________________ */}
      <button
        disabled={props.isDisabled}
        className={`
            drop-down__button-general 
            ${props.setItOpen ? "drop-down__button-on" : "drop-down__button-off"}
         `}
        onClick={(e) => trottleDrop(e)}>
        {props.teamName}
        {/* ___  conditional arrow icon rendering ____ */}
        {props.setItOpen && (
          <figure className="dropdown__arrow">
            <img
              src={arrowDown}
              alt="arrow down"
            />
          </figure>
        )}
      </button>

      {/* __________________  Drop Down Panel Content ___________________ */}
      <section
        className={`
            drop-down__panel-container 
            ${props.setItOpen ? "drop-down__panel-container-open" : "drop-down__panel-container-close"}
            ${props.side === "left" ? "panel-left" : "panel-right"}
        `}>
        {/* ______  Switch panel content depending gambling validation _______ */}
        {isGambled ? (
          <DropDownPostBet
            gain="420"
            bet={betValue}
            panelDisplay={props.setItOpen}
          />
        ) : (
          <DropDownForm
            gain="420"
            sendBet={changeBetValue}
            panelDisplay={props.setItOpen}
          />
        )}
      </section>
    </section>
  );
};
