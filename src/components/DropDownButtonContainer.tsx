import React, {ButtonHTMLAttributes, useState} from "react";

import {DropDownButton} from "./DropDownButton";

import {throttle, updateState} from "../services/tools";

export const DropDownButtonContainer = () => {
  const [left, setleft] = useState({panel: false, btnDisabled: false});
  const [right, setright] = useState({panel: false, btnDisabled: false});

  // ==========================================================

  /**
   * "Switch panel display by hidding the preview one before displaying the other one.
   * @param {any} state1 - setter1 state name
   * @param {Function} setter1 - State setter for the panel we want to display
   * @param {any} state2 - any, setter2 state name
   * @param {Function} setter2 - setter2 - State setter for the panel that is currently being displayed.
   * to.
   * @param {number} delay - Amount of time to wait before switching the panel.
   */
  const switchPanel = (state1: any, setter1: Function, state2: any, setter2: Function, delay: number) => {
    setTimeout(() => {
      updateState("panel", !state1.panel, setter1);
    }, delay);
    updateState("panel", !state2.panel, setter2);
  };

  /**
   * Conditions to check if a panel is open when opening the other panel.
   * If so, automaticaly close preview panel before opening the new one.
   * @param {string} side - string - Determine which button is pressed
   * @param {HTMLButtonElement} dropdownbtn - the button that triggers the dropdown
   */
  const managePanel = (side: string, dropdownbtn: HTMLButtonElement) => {
    if (side === "left" && right.panel === true) {
      switchPanel(left, setleft, right, setright, 170);
    } else if (side === "left") {
      throttle(dropdownbtn, () => updateState("panel", !left.panel, setleft), 200);
    }

    if (side === "right" && left.panel === true) {
      switchPanel(right, setright, left, setleft, 170);
    } else if (side === "right") {
      throttle(dropdownbtn, () => updateState("panel", !right.panel, setright), 200);
    }
  };
  // ==========================================================

  /**
   * When bet is completed for one team, the other team button is disabled
   * @param {string} side - string - Determine which button is pressed
   * @param {boolean} isBetDone - boolean related to bet validation
   */
  const manageBtnDisable = (side: string, isBetDone: boolean) => {
    if (side === "left" && isBetDone === true) {
      updateState("btnDisabled", !right.btnDisabled, setright);
    }
    if (side === "right" && isBetDone === true) {
      updateState("btnDisabled", !left.btnDisabled, setleft);
    }
  };

  // ==================================================================
  // ==================================================================
  return (
    <>
      <div className="temp-page">
        <DropDownButton
          teamName="Rogue"
          side={"left"}
          getBtnInfo={managePanel}
          panelDisplay={left.panel}
          getBetValidationInfo={manageBtnDisable}
          isDisabled={left.btnDisabled}
          odds={1.56}
        />
        <DropDownButton
          teamName="MAD Lions"
          side={"right"}
          getBtnInfo={managePanel}
          panelDisplay={right.panel}
          getBetValidationInfo={manageBtnDisable}
          isDisabled={right.btnDisabled}
          odds={2.01}
        />
      </div>
    </>
  );
};
