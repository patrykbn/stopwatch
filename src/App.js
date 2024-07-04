import React, { useState, useRef, useEffect } from 'react';
import Time from './Time/Time';
import Button from './Button/Button';
import styles from './App.module.scss';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>StopWatch</h1>
      <Time time={time} />
      <div className={styles.buttons}>
        <Button onClick={startTimer} text="Start" />
        <Button onClick={stopTimer} text="Stop" />
        <Button onClick={resetTimer} text="Reset" />
      </div>
    </div>
  );
}

export default App;