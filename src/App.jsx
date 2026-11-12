import React from 'react';
import Header from './components/Header';
import {languages} from './data/languages.js';

export default function App(){
  const [currentWord, setCurrentWord] = React.useState("react");

  const languageElements = languages.map((language) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return <span key={language.name} style={styles}>{language.name}</span>
  });

  const lettersArray = currentWord.split("");

  const letterElements = lettersArray.map((letter, index) => {
    return <span key={index}>{letter.toUpperCase()}</span>
  });

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetElements = alphabet.split("").map((letter) => {
    return <button key={letter}>{letter.toUpperCase()}</button>
  });

  return(
    <main>
      <Header />

      <section className="game-status">
        <h2>You win!</h2>

        <p>Good job!🎉</p>
      </section>

      <section className="language-chips">
        {languageElements}
      </section>

      <section className="word">
        {letterElements}
      </section>

      <section className="keyboard">
        {alphabetElements}
      </section>

      <section className="new-game-section">
        <button>New Game</button>
      </section>
    </main>
  );
}