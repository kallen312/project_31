import "./styles.css";
import { useState } from "react";

/*
numbers = [0,1,2,3]
something.map(() => {
  return ....
})
*/

export default function App() {
  const cards = [
    "orange",
    "blue",
    "pink",
    "white",
    "orange",
    "blue",
    "pink",
    "white"
  ];

  return (
    <div className="App">
      <div>
        {cards.map((color) => {
          return <Card color={color} />;
        })}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div class="grid" style={{ backgroundColor: props.color }}>
      {props.color}
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  );
}
