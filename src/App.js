import React, { useEffect, useState } from 'react';

function App() {
    const [phrase, setPhrase] = useState('');

    useEffect(() => {
        fetch('get_phrase')
            .then(response => response.text())
            .then(data => setPhrase(data));
    }, []);

    return (
        <div>
            <h1>Random Phrase:</h1>
            <p>{phrase}</p>
        </div>
    );
}

export default App;
