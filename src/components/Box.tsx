import React from "react";
import "./../assets/styles/Box.css";
import garbageBinIcon from "./../assets/icons/garbagebin.png";
import { connect } from "react-redux";
import { decrement } from "./../app/features/boxCounter/BoxCounter";

type BoxProps = {
  boxNumber: number;
  boxHeight?: number;
  deleteBox: (boxId: number) => void;
};
const Box: React.FC<BoxProps> = ({ boxNumber, boxHeight, deleteBox }) => {
  const handleDeleteBox = (boxId: number) => {
    deleteBox(boxId);
  };
  return (
    <>
      <div
        className="box"
        draggable={true}
        style={{ height: `${boxHeight}vh` }}
        id={`${boxNumber}`}
        onDragOver={(event) => event.preventDefault()}
        onDragStart={handleDrag}
        onDrop={handleDrop}
      >
        <div className="box__content flex-column">
          <button
            className="box__content__icon__button"
            onClick={() => {
              handleDeleteBox(boxNumber);
            }}
          >
            <img
              src={garbageBinIcon}
              alt="garbageBinIcon"
              className="box__content__icon__img"
            />
          </button>
          <div>
            <p className="box__content__box-id">user{boxNumber}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteBox: (boxNumber: number) => {
      dispatch(decrement(boxNumber));
    },
  };
};
export default connect(null, mapDispatchToProps)(Box);
