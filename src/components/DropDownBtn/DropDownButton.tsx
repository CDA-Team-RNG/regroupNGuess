import React, {useEffect, useState, useRef} from "react";

import {DropDownForm} from "./DropDownForm";
import {DropDownPostBet} from "./DropDownPostBet";

import arrowDown from "../../assets/play-white.png";

// -----------------------------------------------------------
// -----------------------------------------------------------

type dropDownBtnProps = {
  teamName: string;
  side: string;
  getBtnInfo: Function;
  panelDisplay: boolean;
  getBetValidationInfo: Function;
  isDisabled: boolean;
  odds: number;
};

export const DropDownButton = (props: dropDownBtnProps) => {
  const [betValue, setBetValue] = useState<string>("");
  const [isGambled, setIsGambled] = useState<boolean>(false);

  // use useEffect to send correct isGambled bool
  useEffect(() => {
    props.getBetValidationInfo(props.side, isGambled);
  }, [isGambled]);

  // ==========================================================

  const trottleDrop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const dropdownbtn = e.currentTarget;

    props.getBtnInfo(props.side, dropdownbtn);
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
            ${props.panelDisplay ? "drop-down__button-on" : "drop-down__button-off"}
            ${props.isDisabled ? "drop-down__button-disabled" : ""}
         `}
        onClick={(e) => trottleDrop(e)}>
        {props.teamName}
        {/* ___  conditional arrow icon rendering ____ */}
        {props.panelDisplay && (
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
            ${props.panelDisplay ? "drop-down__panel-container-open" : "drop-down__panel-container-close"}
            ${props.side === "left" ? "panel-left" : "panel-right"}
        `}>
        {/* ______  Switch panel content depending gambling validation _______ */}
        {isGambled ? (
          <DropDownPostBet
            gain="420"
            bet={betValue}
            panelDisplay={props.panelDisplay}
            odds={props.odds}
          />
        ) : (
          <DropDownForm
            gain="420"
            sendBet={changeBetValue}
            panelDisplay={props.panelDisplay}
            odds={props.odds}
          />
        )}
      </section>
    </section>
  );
};
