import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./input";
import TotalGuessed from "./TotalGuessed";
import NewWordButton from "./NewWordButton";

import { getSecretWord, resetGame } from "./actions";

export class UnconnectedApp extends Component {
  /**
   * @function {function name}
   * @return {type} {description}
   */
  componentDidMount() {
    // get the secret getSecretWord
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        {this.props.success || this.props.gaveUp ? (
          <div>The secret word is {this.props.secretWord}</div>
        ) : null}

        <Congrats success={this.props.success} />
        <Input />
        {/* Something wrong with this.props.gaveUp */}
        <NewWordButton

          display={this.props.success || this.props.gaveUp}
          resetAction={this.props.resetGame}
        />

        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuessed guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const actions = {
  getSecretWord,
  resetGame,
};

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord, gaveUp } = state;
  return { success, guessedWords, secretWord, gaveUp };
};
export default connect(mapStateToProps, actions)(UnconnectedApp);
