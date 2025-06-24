import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const multi = () => {
    setValue((prev) => prev + 1); //hamri samjdari hame to krvana hai😅
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
  };

  let add = () => {
    if (value < 20) {
      setValue(value + 1); //react ki samjdari ek baar bar nahi karta
      setValue(value + 1);
      setValue(value + 1);
    }
  };

  let remove = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <>
      <div>
        <h1>chai Counter !</h1>
        <h3>number of oder : {value} </h3>
        <button onClick={add} style={{ marginRight: 10 }}>
          add value
        </button>
        <button onClick={remove} style={{ marginRight: 10 }}>
          remove value
        </button>
        <button onClick={multi}>add multipal value</button>
      </div>
    </>
  );
}

export default App;
