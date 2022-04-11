import React from "react";
import "./../assets/styles/MainPage.css";
import { Header } from "../components/Header";
import BoxContainer from "../components/BoxContainer";
import AddButton from "../components/AddButton";
export const MainPage: React.FC = () => {
  return (
    <>
      <div className={"bg-color flex-column flex-center"}>
        <Header title="uniclient" />
        <BoxContainer />
        <AddButton />
      </div>
    </>
  );
};
