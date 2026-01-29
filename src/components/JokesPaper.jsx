import React from "react";
import { Link } from "react-router-dom";
import jokepaper from "@assets/joke0paper.png";

const JokesPaper = ({ joke, isAllJokesPage }) => {
  return (
    <div className="joke-paper">
      {isAllJokesPage ? (
        <Link to={`${joke.id}`} className="jokeLink">
          <img src={jokepaper} alt="joke" />
          <p className="joke-id">#{joke.id}</p>
          <p className="joke-text">
            {joke.question} <br /> <br />
            Réponse : {joke.answer}
          </p>
        </Link>
      ) : (
        <>
          <img src={jokepaper} alt="joke" />
          <p className="joke-id">#{joke.id}</p>
          <p className="joke-text">
            {joke.question} <br /> <br />
            Réponse : {joke.answer}
          </p>
        </>
      )}
    </div>
  );
};

export default JokesPaper;
