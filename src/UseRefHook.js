import React, { useState, useRef } from "react";
import "./useRefHook.css";
import "bootstrap/dist/css/bootstrap.min.css";

function UseRefHook(props) {
  const [check, setcheck] = useState(false);
  const text = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    const name = text.current.value;
    name === "" ? alert("Please Enter Your Name!") : setcheck(true);
  };
  return (
    <div className="parent_div">
      <h1>{props.title}</h1>
      <div className="child_div">
        <form onSubmit={submitForm}>
          <div>
            <label className="mr-2 font-weight-bold" htmlFor="myName">
              Enter your name
            </label>
            <input
              type="text"
              className="p-1 border border-success"
              ref={text}
            ></input>
          </div>
          <br />
          <button className="btn btn-success">Submit</button>
        </form>
        <p className="font-italic mt-3">
          {check ? `Your name is ${text.current.value}` : ""}
        </p>
      </div>
    </div>
  );
}

export default UseRefHook;
