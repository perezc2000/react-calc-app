import React from "react";
import ProtoTypes from "prop-types";
import Button from "./Button";

const MathOperations = ({ onClickOperation, onClickEqual }) => {
  return (
    <section className="math-operations">
      <Button text="+" clickHandler={onClickOperation} />
      <Button text="-" clickHandler={onClickOperation} />
      <Button text="*" clickHandler={onClickOperation} />
      <Button text="/" clickHandler={onClickOperation} />
      <Button text="=" clickHandler={onClickEqual} />
    </section>
  );
};

MathOperations.protoTypes = {
  onClickOperation: ProtoTypes.func.isRequired,
  onClickEqual: ProtoTypes.func.isRequired
};

export default MathOperations;
