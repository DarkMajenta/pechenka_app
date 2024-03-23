import React, { useState, useEffect } from 'react';
// import getPhrase from './getPhrase';
import RandomPhraseComponent from './RandomPhraseComponent';

const App = () => {
    const [phrase, setPhrase] = useState('');

    useEffect(() => {
        getPhrase().then((data) => setPhrase(data.phrase));
    }, []);

    return (
        <div className="container">
            <p className="phrase">{phrase}</p>
        </div>
    );
};

export default App;