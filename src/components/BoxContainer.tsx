import React from "react";
import Box from "./Box";
import "./../assets/styles/BoxContainer.css";
import { connect } from "react-redux";
import { setBoxOrder } from "../app/features/boxCounter/BoxCounter";

type BoxContainerProps = {
  boxCount: number[];
  setBoxOrder: (boxOrder: number[]) => void;
};
const BoxContainer: React.FC<BoxContainerProps> = ({
  boxCount,
  setBoxOrder,
}) => {
  const [dragId, setDragId] = React.useState<string>("");

  const handleDrop = (event: any) => {
    let boxOrder: any = [];

    const dragBox = parseInt(dragId);
    const dropBox = parseInt(event.currentTarget.id);
    if (dragBox !== dropBox && boxCount) {
      boxCount.map((box) => {
        if (box !== dragBox && box !== dropBox) {
          boxOrder.push(box);
        }

        if (box === dragBox) {
          boxOrder.push(dropBox);
        }
        if (box === dropBox) {
          boxOrder.push(dragBox);
        }
        //the draged box will be moved to the new position
        //the dropBox <the one which has lost its position> will be moved to the position of the dragged box
        //the other boxes will be left in their original position
      });
      setBoxOrder(boxOrder);
      //dispatches the new box order
    }
  };

  const handleDrag = (ev: any) => {
    setDragId(ev.currentTarget.id);
    //handles the drag event.it will be triggered by the drag event and sets the draged box id
  };

  const [boxHeight, setBoxHeight] = React.useState(0);
  React.useEffect(() => {
    if (!!boxCount) {
      const boxCountLength = boxCount?.length;
      const rowNumber = Math.ceil(boxCountLength / 2);
      const boxHeight = 60 / rowNumber;
      setBoxHeight(boxHeight - 2);
    }
  }, [boxCount]);

  return (
    <>
      <div className="box-container">
        {boxCount &&
          boxCount?.map((box, index) => (
            <Box
              key={index}
              boxNumber={box}
              boxHeight={boxHeight}
              handleDrop={handleDrop}
              handleDrag={handleDrag}
            />
          ))}
        {boxCount && boxCount.length === 0 && (
          <p className="warning font-family__PinyonScript">No boxes yet!</p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    boxCount: state.boxCounter.boxCount,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setBoxOrder: (boxOrder: number[]) => {
      dispatch(setBoxOrder(boxOrder));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BoxContainer);
