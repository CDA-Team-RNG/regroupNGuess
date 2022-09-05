import React, {useState} from "react";

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
    setBetValue(() => betValue);

    console.log("change bet");

    setIsGambled((prevIsGambled) => !prevIsGambled);
  };

  return (
    <>
      <div className="temp-dropcontainer">
        {/* TEMPS ? */}
        <button
          /* switch class ___________________________________ */
          className={`${isPanelDropped ? "drop-down__button-on" : "drop-down__button-off"}`}
          onClick={(e) => dropDownBtnPress(e)}>
          {props.teamName}
          {/* conditional arrow rendering __________________ */}
          {isPanelDropped && (
            <figure className="dropdown__arrow">
              <img src={arrowDown} alt="arrow down" />
            </figure>
          )}
        </button>

        <section
          className={`${isPanelDropped ? "drop-down__panel-container drop-down__panel-container-open" : "test-scale"}`}>
          {/* Switch panel after gambling ___________________ */}
          {isGambled ? (
            <DropDownPostBet gain="420" bet={betValue} panelDisplay={isPanelDropped} />
          ) : (
            <DropDownForm gain="420" panelDisplay={isPanelDropped} sendBet={changeBetValue} />
          )}

          {/* ---------------------------------------- */}
        </section>
      </div>
    </>
  );
};
