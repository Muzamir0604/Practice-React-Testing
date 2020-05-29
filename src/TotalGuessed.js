import React from "react";
import PropTypes from "prop-types";

const TotalGuessed = (props) => {
  return (
    <div data-test="component-total-guessed">
      Total Guesses: {" "}
      {props.guessedWords.length}
    </div>
  );
};

TotalGuessed.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
          guessedWord: PropTypes.string.isRequired,
          letterMatchCount: PropTypes.number.isRequired,
        })
      ).isRequired,
}

export default TotalGuessed
