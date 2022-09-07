import React from "react";

import {DropDownButton} from "../components/DropDownButton";

export const GamblePage = () => {
  return (
    <>
      <div className="temp-page">
        <DropDownButton
          teamName="Rogue"
          side={"left"}
        />
        <DropDownButton
          teamName="MAD Lions"
          side={"right"}
        />
      </div>
    </>
  );
};
