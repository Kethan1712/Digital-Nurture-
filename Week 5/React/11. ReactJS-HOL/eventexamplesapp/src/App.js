import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // Increment
  function incrementValue() {
    setCount(count + 1);
  }

  // Decrement
  function decrementValue() {
    setCount(count - 1);
  }

  // Hello Message
  function sayHello() {
    alert("Hello! Member!");
  }

  // Welcome Message
  function sayWelcome(message) {
    alert(message);
  }

  // Synthetic Event
  function handleClick() {
    alert("I was clicked");
  }

  // Currency Converter
  function handleSubmit(e) {

    e.preventDefault();

    const euro = amount * 80;

    alert("Converting to Euro Amount is " + euro);
  }

  return (

    <div style={{ margin: "30px" }}>

      <h2>{count}</h2>

      {/* Increment invokes two methods */}

      <button
        onClick={() => {
          incrementValue();
          sayHello();
        }}
      >
        Increment
      </button>

      <br /><br />

      <button onClick={decrementValue}>
        Decrement
      </button>

      <br /><br />

      <button
        onClick={() => sayWelcome("welcome")}
      >
        Say welcome
      </button>

      <br /><br />

      <button
        onClick={handleClick}
      >
        Click on me
      </button>

      <br /><br />

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        <label>Amount: </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br /><br />

        <label>Currency: </label>

        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>

  );

}

export default App;