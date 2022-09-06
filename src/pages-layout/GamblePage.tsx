import React from "react";

import {DropDownButton} from "../components/DropDownButton";

export const GamblePage = () => {
  return (
    <>
      <div className="temp-page">
        <DropDownButton teamName="Rogue" number={0} />
        <DropDownButton teamName="MAD Lions" number={1} />
      </div>
    </>
  );
};
