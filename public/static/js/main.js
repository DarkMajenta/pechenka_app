const button = document.querySelector('button');
const phraseElement = document.getElementById('phrase');

button.addEventListener('click', () => {
  fetch('/get_phrase')
   .then((response) => response.text())
   .then((phrase) => {
      phraseElement.textContent = phrase;
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      res.send(randomPhrase);
    })
   .catch((error) => {
      console.error('Error:', error);
    });
});

// app.get('/get_phrase', (req, res) => {
//     const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
//     res.send(randomPhrase);
// });