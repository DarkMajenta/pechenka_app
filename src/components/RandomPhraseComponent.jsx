import React, { useState, useEffect } from 'react';

const RandomPhraseComponent = () => {
  const [randomPhrase, setRandomPhrase] = useState('');

  useEffect(() => {
    const fetchRandomPhrase = async () => {
      try {
        const response = await fetch('/phrases.txt');
        const data = await response.text();

        const phrases = data.split('\n').filter(Boolean);
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setRandomPhrase(phrases[randomIndex]);
      } catch (error) {
        console.error('Error fetching random phrase:', error);
      }
    };

    fetchRandomPhrase();
  }, []);


  return (
    <div>
      <h2>Random Phrase:</h2>
      <p>{randomPhrase}</p>
    </div>
  );
};

export default RandomPhraseComponent;
