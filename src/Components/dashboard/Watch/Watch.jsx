
import React, { useState } from "react";
import "./watch.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import UpArrow from "../../../assests/UpArrow.png";
import DownArrow from "../../../assests/DownArrow.png";

const Watch = () => {
  const [hoursValue, setHoursValue] = useState(0);
  const [minutesValue, setMinutesValue] = useState(0);
  const [secondsValue, setSecondsValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const increaseHours = () => {
    setHoursValue(hoursValue + 1);
    if (hoursValue === 23) {
      setHoursValue(0);
    }
  };

  const increaseMinutes = () => {
    setMinutesValue(minutesValue + 1);
    if (minutesValue === 59) {
      setMinutesValue(0);
    }
  };

  const increaseSeconds = () => {
    setSecondsValue(secondsValue + 1);
    if (secondsValue === 59) {
      setSecondsValue(0);
    }
  };

  const decreaseHours = () => {
    setHoursValue(hoursValue - 1);
    if (hoursValue === 0) {
      setHoursValue(23);
    }
  };

  const decreaseMinutes = () => {
    setMinutesValue(minutesValue - 1);
    if (minutesValue === 0) {
      setMinutesValue(59);
    }
  };

  const decreaseSeconds = () => {
    setSecondsValue(secondsValue - 1);
    if (secondsValue === 0) {
      setSecondsValue(59);
    }
  };

  function formatTime(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${formatValue(hours)} : ${formatValue(minutes)} : ${formatValue(
      seconds
    )}`;
  }

  return (
    <div className="timer__container">
      <div className="timer__display">
        <div className="timer__countdown">
          <CountdownCircleTimer
            key={isTimerCompleted ? "playing" : "paused"}
            isPlaying={isPlaying}
            duration={secondsValue + minutesValue * 60 + hoursValue * 60 * 60}
            colors={isTimerCompleted ? ["white"] : ["#FF6A6A"]}
            onComplete={() => {
              setIsPlaying(false);
              setIsTimerCompleted(true);
            }}
          >
            {({ remainingTime }) => (
              <span style={{ fontSize: "15px" }}>
                {isTimerCompleted ? "Over!" : formatTime(remainingTime)}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
        <div className="timer__hours">
          <p>Hours</p>
          <img src={UpArrow} alt="Increase Hours" onClick={increaseHours} />
          <h2>{formatValue(hoursValue)} </h2>
          <img src={DownArrow} alt="Decrease Hours" onClick={decreaseHours} />
        </div>
        <h1>:</h1>
        <div className="timer__minutes">
          <p>Minutes</p>
          <img src={UpArrow} alt="Increase Minutes" onClick={increaseMinutes} />
          <h2>{formatValue(minutesValue)}</h2>
          <img src={DownArrow} alt="Decrease Minutes" onClick={decreaseMinutes} />
        </div>
        <h1>:</h1>
        <div className="timer__seconds">
          <p>Seconds</p>
          <img src={UpArrow} alt="Increase Seconds" onClick={increaseSeconds} />
          <h2>{formatValue(secondsValue)}</h2>
          <img src={DownArrow} alt="Decrease Seconds" onClick={decreaseSeconds} />
        </div>
      </div>
      <button
        className="timer__control"
        onClick={() => {
          if (isTimerCompleted) {
            setIsTimerCompleted(false);
            setIsPlaying(false);
            setHoursValue(0);
            setMinutesValue(0);
            setSecondsValue(0);
          } else {
            setIsPlaying((play) => !play);
          }
        }}
      >
        {isTimerCompleted ? <p>RESET</p> : isPlaying ? <p>PAUSE</p> : <p>START</p>}
      </button>
    </div>
  );
};

export default Watch;
