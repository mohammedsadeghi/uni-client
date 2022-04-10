import React from "react";
import Box from "./Box";
import "./../assets/styles/BoxContainer.css";
import { connect } from "react-redux";

type BoxContainerProps = {
  boxCount: number[];
};
const BoxContainer: React.FC<BoxContainerProps> = ({ boxCount }) => {
  const [dragId, setDragId] = React.useState<string>("");

  const handleDrop = (ev: any) => {
    const dragBox = boxCount.find((box) => box === parseInt(dragId));
    const dropBox = boxCount.find(
      (box) => box === parseInt(ev.currentTarget.id)
    );

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  const handleDrag = (ev: any) => {
    setDragId(ev.currentTarget.id);
    //handles the drag event.it will be triggered by the drag event
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
  console.log(state);

  return {
    boxCount: state.boxCounter.boxCount,
  };
};
export default connect(mapStateToProps, null)(BoxContainer);
