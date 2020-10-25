import React from "react";
import ProtoTypes from "prop-types";
import Button from "./Button";

const Functions = ({ onContentClear, onDelete }) => {
  return (
    <section className="functions">
      <Button type="button-long-text" text="C" clickHandler={onContentClear} />
      <Button text="&larr;" clickHandler={onDelete} />
    </section>
  );
};

Functions.propTypes = {
  onContentClear: ProtoTypes.func.isRequired,
  onDelete: ProtoTypes.func.isRequired
};

export default Functions;
