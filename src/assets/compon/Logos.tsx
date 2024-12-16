import { HStack } from "@chakra-ui/react";
import React from "react";
import UICard from "./UICard";
import reactLogo from "../react.svg";
import viteLogo from "/vite.svg";

const Logos = () => {
  return (
    <HStack>
      <a target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <UICard />
      <a target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </HStack>
  );
};

export default Logos;
