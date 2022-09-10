import React, {ButtonHTMLAttributes, useState} from "react";

import {DropDownButton} from "../components/DropDownButton";

import {throttle} from "../services/tools";

export const GamblePage = () => {
  const [left, setleft] = useState(false);
  const [right, setright] = useState(false);

  // ==========================================================

  const managePanel = (side: string, dropdownbtn: React.MouseEvent<HTMLButtonElement>) => {
    if (side === "left" && right === true) {
      setTimeout(() => {
        setleft((prev) => !prev);
      }, 170);
      setright((prev) => !prev);
    } else if (side === "left") {
      throttle(dropdownbtn, setleft, 200);
    }

    if (side === "right" && left === true) {
      setTimeout(() => {
        setright((prev) => !prev);
      }, 170);
      setleft((prev) => !prev);
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
          setItOpen={left}
          // isDisabled={false}
        />
        <DropDownButton
          teamName="MAD Lions"
          side={"right"}
          sendInfo={managePanel}
          setItOpen={right}
          // isDisabled={false}
        />
      </div>
    </>
  );
};
