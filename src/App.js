import "./styles.css";
import { useState } from "react";

/*
numbers = [0,1,2,3]
something.map(() => {
  return ....
})

counter to know if it's a first click or second click
variable for click 1
variable for click 2
if click1 !== click2 flip the last two cards over to black
if click1 === click2 then the user can keep click more cards
*/

// use this component to keep track of multiple cards
export default function App() {
  const cards = [
    "orange",
    "blue",
    "pink",
    "white",
    "green",
    "purple",
    "orange",
    "blue",
    "pink",
    "white",
    "green",
    "purple"
  ];

  return (
    <div className="App">
      <h1>Card Memory Game</h1>
      <div className="grid">
        {cards.map((color) => {
          return <Card color={color} />;
        })}
      </div>
    </div>
  );
}

// this component deals with a single card
function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  //const [card1, setCard1] = useState("");

  //const [card2, setCard2] = useState("");

  const [openCard, setOpenCard] = useState([]);

  const [counter, setCounter] = useState(0);

  const [ismatchCard, setIsmatchCard] = useState(false);
  // if it isFlipped = true, then show the current card
  // if not, show a card with a black background

  // write a function
  // add condition
  // return '' or props.color

  function handleClick(index) {
    setIsFlipped(true);

    if (openCard.length === 1) {
    } else {
    }

    // setCard1(props.color);

    //setCounter(counter + 1);
    if (ismatchCard) {
      return {};
    }
  }

  function changeStyle() {
    if (isFlipped) {
      return { backgroundColor: props.color };
    } else {
      return { backgroundColor: "black" };
    }
  }
  return (
    // you can use the isFlipped within the style as a ternary
    <div className="cardStyle" style={changeStyle()} onClick={handleClick}>
      {props.color}
    </div>
  );
}

//const checkComparsion =() => {
//if () {
// return
//};
//}
