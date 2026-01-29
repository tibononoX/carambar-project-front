import React from "react";
import jokepaper from "@assets/joke0paper.png";

const JokesPaper = ({ joke, isAllJokesPage }) => {
  return (
    <div className="joke-paper">
      {isAllJokesPage ? (
        <a href={`/carambar-project-front/${joke.id}`} className="jokeLink">
          <img src={jokepaper} alt="joke" />
          <p className="joke-id">#{joke.id}</p>
          <p className="joke-text">
            {joke.question} <br /> <br />
            Réponse : {joke.answer}
          </p>
        </a>
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
