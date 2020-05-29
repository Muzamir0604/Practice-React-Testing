import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord, giveUp } from "./actions";
export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = { currentGuess: null };
    this.submitGuessWord = this.submitGuessWord.bind(this);
    this.submitGiveUp = this.submitGiveUp.bind(this);
  }
  submitGuessWord(evt) {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  }
  submitGiveUp(evt){
    evt.preventDefault();
    this.props.giveUp()
  }

  render() {
    const contents = this.props.success || this.props.gaveUp? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          value={this.state.currentGuess}
          onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={this.submitGuessWord}
        >
          Submit
        </button>
        <br/>
        <button
          data-test="give-up-button"
          className="btn btn-danger mb-2"
          onClick={this.submitGiveUp}
        >
          Give Up
        </button>

      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}
const mapStateToProps = ({ success, gaveUp }) => {
  return { success, gaveUp };
};

export default connect(mapStateToProps, { guessWord, giveUp })(UnconnectedInput);
