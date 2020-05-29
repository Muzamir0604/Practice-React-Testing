import React from "react";
import PropTypes from "prop-types";

const SecretWordReveal = (props) => {
  if (props.display) {
    return (
      <div data-test="component-secret-word-text">
        The secret word was {props.secretWord}
        \n Better luck next time!
      </div>
    );
  } else {
    return <div data-test="component-secret-word-text" />;
  }
};
SecretWordReveal.propTypes = {
    display: PropTypes.bool.isRequired,
    secretWord:PropTypes.string,
}
export default SecretWordReveal;
