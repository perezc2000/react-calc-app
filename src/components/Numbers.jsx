import React from "react";
import ProtoTypes from "prop-types";
import Button from "./Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = (onClickNumber) => {
  return numbers.map((item) => (
    <Button key={item} text={item.toString()} clickHandler={onClickNumber} />
  ));
};
const Numbers = ({ onClickNumber }) => {
  return <section className="numbers">{renderButtons(onClickNumber)}</section>;
};

Numbers.protoTypes = {
  onClickNumber: ProtoTypes.func.isRequired
};

export default Numbers;
