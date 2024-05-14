import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Answer from "../../assets/img/answer.png";
import FiftyFifty from "../../assets/img/fiftyFifty.png";
import Hints from "../../assets/img/hints.png";
import Options from "../../assets/img/options.png";
const QuizInstruction = () => (
  <Fragment>
    <Helmet>
      <title>Quiz Instructions - Quiz App</title>
    </Helmet>
    <div className="instructions container">
      <h1>How to Play the Game</h1>
      <p>Ensure you read this guide from the start to finish.</p>
      <ul className="browser-default" id="main-list">
        <li>
          The game has a duration of 15 minutes and ends as soon as your time
          elapses.
        </li>
        <li>
          Each game consist of 15 questions.
          <img src={Options} alt="Quiz App - Options example" />
        </li>
        <li>
          Select the option which best answers provided question by clicking (or
          selecting) it.
          <img src={Answer} alt="Quiz App - Answer example" />
        </li>
        <li>
          Each game has 2 lifelines namely:
          <ul id="sublist">
            <li>50/50 chances</li>
            <li>5 Hints</li>
          </ul>
        </li>
        <li>
          Selecting a 50/50 lifeline by clicking the &quot;{" "}
          <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>{" "}
          &quot; icon will remove 2 wrong answers, leaving one wrong and a
          correct one. <br />
          <img src={FiftyFifty} alt="Quiz App - 50/50 example" />
        </li>
        <li>
          Using a hint by clicking the &quot;{" "}
          <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>{" "}
          &quot; icon will remove one wrong answer, leaving two wrong answers
          and a correct one. You can use as many hints as possible on a single
          question.
          <br />
          <img src={Hints} alt="Quiz App - Hints example" />
        </li>
        <li>
          Feel free to quit (or forfeit) from the game at any time. In that case
          your score will be revealed afterwards.
        </li>
        <li>The timer starts as soon as the game loads.</li>
        <li>Let&apos;s do this if you think you&apos;ve got what it takes?</li>
      </ul>
      <div>
        <span className="left">
          <Link to="/">No, take me back!</Link>
        </span>
        <span className="right">
          <Link to="/play/quiz">Okay, let&apos;s do this!</Link>
        </span>
      </div>
    </div>
  </Fragment>
);

export default QuizInstruction;
