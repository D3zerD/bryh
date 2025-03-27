import React from 'react';
import useStore from "./store/useStore";
import "./App.css";

function App() {
  const { input, result, history, setInput, calculate, clearInput, clearHistory } = useStore();

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  return (
    <div className='calculator' style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Калькулятор</h1>
      <input className='input' type="text" value={input} readOnly style={{ width: '200px', textAlign: 'right' }} />
      <div className='buttons'>
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "/", "="]
          .map((char) => (
            <button className='equal' key={char} onClick={() => char === "=" ? calculate() : handleButtonClick(char)}>
              {char}
            </button>
          ))}
      </div>
      <button className='clear' onClick={clearInput}>C</button>
      <h2>Результат: {result}</h2>
      <h3>История:</h3>
      <ul className='history'>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <button className='clearHistory' onClick={clearHistory}>Очистить историю</button>
    </div>
  );
}

export default App;