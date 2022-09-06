import React from "react";

import {DropDownButton} from "../components/DropDownButton";

export const GamblePage = () => {
  return (
    <>
      <div className="temp-page">
        <DropDownButton teamName="Rogue" panelPos={0} />
        <DropDownButton teamName="MAD Lions" panelPos={1} />
      </div>
    </>
  );
};
