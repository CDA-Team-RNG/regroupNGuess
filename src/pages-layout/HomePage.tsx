import React from "react";
import { Navbar } from "./Navbar";
import { Match } from "../components/Match";
import { MatchList } from "./MatchList";

export const HomePage = () => {
  return (
    <>
      <Navbar />
     <MatchList />
    </>
  );
};
