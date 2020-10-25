import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, text, clickHandler }) => {
  const onClickHandlerFuntion = () => {
    clickHandler(text);
  };

  return (
    <button className={type} onClick={onClickHandlerFuntion}>
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
};

export default Button;
