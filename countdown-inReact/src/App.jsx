import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [timerVal, setTimerVal] = useState("00");
  // const [count, setCount] = useState("00");

  const timerValue = (e) => {
    setTimerVal(e.target.value);
  };

  return (
    <>
      {/* <h1>{count}</h1> */}
      <Timer initialCount={timerVal} />
      <div className="flex justify-between items-center">
        <input
          className=" flex justify-center w-64 h-12 px-4 py-2 rounded-md bg-slate-50 text-black mt-6"
          type="text"
          placeholder="Set Time"
          onChange={timerValue}
        ></input>
        {/* <button onClick={timerStart} className=" ml-6 mt-6 bg-red-500">
          Start
        </button> */}
      </div>
    </>
  );
}

export default App;
