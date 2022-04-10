import React from "react";
import "./../assets/styles/MainPage.css";
import AddIcon from "./../assets/icons/plus-flat.png";
import { Header } from "../components/Header";
import { BoxContainer } from "../components/BoxContainer";
export const MainPage: React.FC = () => {
  return (
    <>
      <div className={"bg-color flex-column flex-center"}>
        <Header title="uniclient" />
        <BoxContainer />
        <div className="add-icon__div">
          <img className="add-icon__img" src={AddIcon} alt={"addIcon"} />
        </div>
      </div>
    </>
  );
};
