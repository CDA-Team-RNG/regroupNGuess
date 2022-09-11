import React, {ButtonHTMLAttributes, useState} from "react";

import {DropDownButton} from "../components/DropDownButton";

import {throttle} from "../services/tools";

export const GamblePage = () => {
  const [left, setleft] = useState(false);
  const [right, setright] = useState(false);

  // ==========================================================

  /**
   * Switch panel display by hidding the preview one before displaying the other one.
   * @param {Function} setter1 - State setter for the panel we want to display
   * @param {Function} setter2 - State setter for the panel that is currently being displayed.
   * @param {number} delay - Amount of time to wait before switching the panel.
   */
  const switchPanel = (setter1: Function, setter2: Function, delay: number) => {
    setTimeout(() => {
      setter1((prev: any) => !prev);
    }, delay);
    setter2((prev: any) => !prev);
  };

  /**
   * Conditions to check if a panel is open when opening the other panel.
   * If so, automaticaly close preview panel before opening the new one.
   * @param {string} side - string - Determine which button is pressed
   * @param {HTMLButtonElement} dropdownbtn - the button that triggers the dropdown
   */
  const managePanel = (side: string, dropdownbtn: HTMLButtonElement) => {
    if (side === "left" && right === true) {
      switchPanel(setleft, setright, 170);
    } else if (side === "left") {
      throttle(dropdownbtn, setleft, 200);
    }

    if (side === "right" && left === true) {
      switchPanel(setright, setleft, 170);
    } else if (side === "right") {
      throttle(dropdownbtn, setright, 200);
    }
  };

  return (
    <>
      <div className="temp-page">
        <DropDownButton
          teamName="Rogue"
          side={"left"}
          sendInfo={managePanel}
          panelDisplay={left}
          // isDisabled={false}
        />
        <DropDownButton
          teamName="MAD Lions"
          side={"right"}
          sendInfo={managePanel}
          panelDisplay={right}
          // isDisabled={false}
        />
      </div>
    </>
  );
};
