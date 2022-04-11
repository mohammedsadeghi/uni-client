import React from "react";
import AddIcon from "./../assets/icons/plus-flat.png";
import { connect } from "react-redux";
import { increment } from "../app/features/boxCounter/BoxCounter";

type AddButtonProps = {
  addBox: () => void;
};

const AddButton: React.FC<AddButtonProps> = ({ addBox }) => {
  const handleAddClick = () => {
    addBox();
  };
  return (
    <>
      <div className="add-icon__div" onClick={handleAddClick}>
        <img className="add-icon__img" src={AddIcon} alt={"addIcon"} />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addBox: () => {
      dispatch(increment());
    },
  };
};
export default connect(null, mapDispatchToProps)(AddButton);
