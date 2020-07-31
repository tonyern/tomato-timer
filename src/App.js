import React, { useState } from 'react';
import './App.css'
import { Button } from '@material-ui/core';

const App = () => {

  const [time, setTimer] = useState('');

  const startTimer = () => {
    console.log('Starting timer');
  }

  const stopTimer = () => {
    console.log('Stopping timer');
  }

  const resetTimer = () => {
    console.log('Resetting timer');
  }

  return (
    <div className="App">
        <h1>Tomato Timer</h1>

        <div className="timer">
          <h2>00:00:00</h2>
        </div>

        <div className="timer-buttons">
        <Button className="start-timer" variant="contained" color="primary" onClick={startTimer}>Start</Button>
        <Button className="stop-timer" variant="contained" color="secondary" onClick={stopTimer}>Stop</Button>
        <Button className="reset-timer" variant="contained" onClick={resetTimer}>Reset</Button>
        </div>
    </div>
  );
}

export default App;
