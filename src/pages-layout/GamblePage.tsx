import React from "react";

import {DropDownButton} from "../components/DropDownButton";

export const GamblePage = () => {
  return (
    <>
      <div className="temp-page">
        <DropDownButton teamName="Rogue" />
        <DropDownButton teamName="MAD Lions" />
      </div>
    </>
  );
};
