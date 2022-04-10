import React from "react";
import "./../assets/styles/Box.css";
import garbageBinIcon from "./../assets/icons/garbagebin.png";

export const Box: React.FC = () => {
  return (
    <>
      <div className="box">
        <div className="box__content flex-column">
          <button className="box__content__icon__button">
            <img
              src={garbageBinIcon}
              alt="garbageBinIcon"
              className="box__content__icon__img"
            />
          </button>
          <div className="box__content__box-id">
            <p>user1</p>
          </div>
        </div>
      </div>
    </>
  );
};
