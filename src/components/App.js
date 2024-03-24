import React from 'react';
import ReactDOM from 'react-dom';

const phrases = [
    'Сегодня ты найдешь неожиданный источник вдохновения.',
    'Твоя улыбка сегодня станет причиной радости для других.',
    'Новый день принесет тебе невероятные возможности для роста.',
    'Твое терпение будет вознаграждено в этот день.',
    'Счастье скоро постучится в твою дверь.',
    'Твоя преданность и усердие приведут к успеху.',
    'Сегодня твои мечты начнут становиться реальностью.',
    'Вся твоя работа не пройдет даром, она принесет плоды.',
    'Ты обретешь важное открытие, которое изменит твою жизнь.',
    'Любовь и гармония наполнят твою жизнь сегодня.',
    'Ты обретешь новую перспективу, которая осветит твой путь.',
    'Ты окружен любовью и поддержкой близких людей.',
    'Сегодня ты найдешь решение для давней проблемы.',
    'У тебя есть сила достичь всего, что задумаешь.',
    'Ты сделаешь великий шаг вперед к своей цели.',
    'Твоя энергия и оптимизм притянут хорошие события.',
    'Окружающие будут восхищены твоей решительностью.',
    'Ты обретешь вдохновение, чтобы преодолеть любые препятствия.',
    'Сегодня удача будет твоим постоянным спутником.',
    'Ты заслуживаешь все самое лучшее, что произойдет сегодня.',
    'Ты обретешь мир и спокойствие в своем сердце.',
    'Ты притягиваешь положительные изменения в свою жизнь.',
    'Тебя ждут невероятные открытия и приключения.',
    'Сегодня ты обретешь новую возможность для роста.',
    'Ты обладаешь всеми необходимыми качествами для успешного дня.',
    'Твоя жизнь наполнится радостью и благополучием.',
    'Ты создаешь свое счастливое будущее своими действиями сегодня.',
    'Твоя уверенность и оптимизм помогут тебе достичь своих целей.',
    'Сегодня ты примешь правильное решение важного выбора.',
    'Твои усилия принесут тебе успех и признание.'
];

function RandomPhraseComponent() {
  fetch('/get_phrase')
      .then(response => response.text())
      .then(data => document.getElementById('phrases').innerText = data);
}

function App() {
  return (
      <div>
          <button onClick={RandomPhraseComponent}>Получить предсказание</button>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App>
//       <RandomPhraseComponent phrases={phrases} />
//     </App>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
