import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Timer({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const timerStart = () => {
    const timer = setInterval(() => {
      setCount((previousCount) => {
        if (previousCount <= 0) {
          clearInterval(timer);
          return 0;
        }

        // return previousCount;
        return previousCount - 1;
      });
    }, 1000);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={timerStart} className=" ml-6 mt-6 bg-red-500">
        Start
      </button>
    </>
  );
}

Timer.propTypes = {
  initialCount: PropTypes.number.isRequired,
};
export default Timer;
