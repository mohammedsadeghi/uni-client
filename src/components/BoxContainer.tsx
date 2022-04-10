import React from "react";
import { Box } from "./Box";
import "./../assets/styles/BoxContainer.css";

export const BoxContainer: React.FC = () => {
  return (
    <>
      <div className="box-container">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </>
  );
};
