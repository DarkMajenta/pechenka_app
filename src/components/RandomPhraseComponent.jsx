import React, { useState, useEffect } from 'react';

const RandomPhraseComponent = ({ phrases }) => {
  const [randomPhrase, setRandomPhrase] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  }, [phrases]);

  return (
    <div>
      <h2>Random Phrase:</h2>
      <p>{randomPhrase}</p>
    </div>
  );
};

export default RandomPhraseComponent;
