import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0,
    };
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const playerStatsJSON = queryParams.get("stats");

    if (playerStatsJSON) {
      const decodedStatsJSON = decodeURIComponent(playerStatsJSON);
      const playerStats = JSON.parse(decodedStatsJSON);

      // Set the state based on playerStats
      this.setState({
        score:
          (playerStats.correctAnswers / playerStats.numberOfQuestions) * 100,
        numberOfQuestions: playerStats.numberOfQuestions,
        numberOfAnsweredQuestions:
          playerStats.correctAnswers + playerStats.wrongAnswers,
        correctAnswers: playerStats.correctAnswers,
        wrongAnswers: playerStats.wrongAnswers,
        hintsUsed: playerStats.hintsUsed,
        fiftyFiftyUsed: playerStats.fiftyFiftyUsed,
      });
    }
  }

  render() {
    let remark;
    if (this.state.score <= 30) {
      remark = "You need more practices";
    } else if (this.state.score > 30 && this.state.score <= 50) {
      remark = "Better luck next time";
    } else if (this.state.score <= 70 && this.state.score > 50) {
      remark = "You can do better.";
    } else if (this.state.score <= 71 && this.state.score <= 84) {
      remark = "You did great.";
    } else {
      remark = "You are an absolute genius.";
    }

    //
    if (!this.state.numberOfQuestions) {
      return (
        <section>
          <h1 className="no-stats"> No Statistics Available</h1>
          <ul>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
            <li>
              <Link to="/play/quiz">Take a Quiz</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <div className="quiz-summary">
        <Fragment>
          <Helmet>
            <title>Quiz App - Summary </title>
          </Helmet>
        </Fragment>
        <div>
          <span className="mdi mdi-check-circle-outline success-icon"></span>
          <h1>Quiz has ended</h1>
          <div className="container stats">
            <h4>{remark}</h4>
            <h2>Your score: {this.state.score.toFixed(0)}&#37; </h2>
            <div className="statsScoresCont">
              {" "}
              <div className="statsScores">
                <span className="stats left">Total number of questions: </span>
                <span className="right">{this.state.numberOfQuestions}</span>
                <br />
                <span className="stats left">
                  Total number of attempted questions:
                </span>
                <span className="right">
                  {this.state.numberOfAnsweredQuestions}
                </span>{" "}
                <br />
                <span className="stats left">
                  Total number of correct answers:
                </span>
                <span className="right">{this.state.correctAnswers}</span>{" "}
                <br />
                <span className="stats left">
                  Total number of wrong answers:{" "}
                </span>
                <span className="right">{this.state.wrongAnswers}</span> <br />
                <span className="stats left">Total number of used hints: </span>
                <span className="right">{this.state.hintsUsed}</span> <br />
                <span className="stats left">Total number of 50/50 used: </span>
                <span className="right">{this.state.fiftyFiftyUsed}</span>{" "}
                <br />
              </div>
            </div>
          </div>
          <section>
            <ul className="BP">
              <li>
                <Link to="/">Back to Home</Link>
              </li>
              <li>
                <Link to="/play/quiz">Play Again</Link>
              </li>
            </ul>
          </section>

          {/* <h1>Quiz Summary</h1>
          <p>Score: {this.state.score}</p>
          <p>Number of Questions: {this.state.numberOfQuestions}</p>
          <p>
            Number of Answered Questions: {this.state.numberOfAnsweredQuestions}
          </p>
          <p>Correct Answers: {this.state.correctAnswers}</p>
          <p>Wrong Answers: {this.state.wrongAnswers}</p>
          <p>Hints Used: {this.state.hintsUsed}</p>
          <p>Fifty Fifty Used: {this.state.fiftyFiftyUsed}</p> */}
        </div>
      </div>
    );
  }
}

export default QuizSummary;
