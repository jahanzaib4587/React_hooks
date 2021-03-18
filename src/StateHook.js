import React, { useState, useEffect } from "react";
import "./stateHook.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";
import PlusOneIcon from "@material-ui/icons/PlusOne";
function StateHook(props) {
  const [count, setcount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  function increment() {
    setcount((prevVal) => prevVal + 1);
  }
  function decrement() {
    if (count == 0) {
      setcount(0);
      alert("Count has reached to zero");
    } else {
      setcount((prevVal) => prevVal - 1);
    }
  }
  return (
    <div className="parent_div">
      <h1>{props.title}</h1>
      <div className="child_div">
        <button
          onClick={increment}
          className="btn btn-success m-3 btn-lg btn-block"
        >
          <PlusOneIcon />
        </button>
        <h1 className="display">{count}</h1>
        <button
          onClick={decrement}
          className="btn btn-danger btn-lg m-3 btn-block"
        >
          <ExposureNeg1Icon />
        </button>
      </div>
    </div>
  );
}

export default StateHook;
