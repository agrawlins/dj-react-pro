import React from "react";
import Square from "./Components/Square";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Fart from "./Sounds/Fart.mp3"
import Music from "./Sounds/Music.mp3"

const myAudio = new Audio(Music)
myAudio.play();

const App = () => {
  let [colors, setColors] = React.useState([
    "white",
    "white",
    "white",
    "white"
  ])

  const changeBlackNWhite = () => {
    const fart = new Audio(Fart)
    fart.play()
    setColors(prevColors => prevColors.map(each => each === "white" ? "black" : "white"))
  }

  const changeTopsPurple = () => {
    const fart = new Audio(Fart)
    fart.play()
    setColors(prevColors => [...prevColors.slice(0, 2).map(each => each === "purple" ? "white" : "purple"), ...prevColors.slice(2, 4)])
  }

  const changeBottomLeftBlue = () => {
    const fart = new Audio(Fart)
    fart.play()
    setColors(prevColors => [...prevColors.slice(0, 2), ...prevColors.slice(2, 3).map(each => each === "blue" ? "white" : "blue"), ...prevColors.slice(3, 4)])
  }

  const changeBottomRightBlue = () => {
    const fart = new Audio(Fart)
    fart.play()
    setColors(prevColors => [...prevColors.slice(0, 3), ...prevColors.slice(3, 4).map(each => each === "blue" ? "white" : "blue")])
  }

  const changeTopLeftRed = () => {
    const fart = new Audio(Fart)
    fart.play()
    setColors(prevColors => [...prevColors.slice(0, 1).map(each => each === "red" ? "white" : "red"), ...prevColors.slice(1, 4)])
  }

  const changeTopRightOrange = () => {
    const fart = new Audio(Fart)
    fart.play()
    setColors(prevColors => [...prevColors.slice(0, 1), ...prevColors.slice(1, 2).map(each => each === "orange" ? "white" : "orange"), ...prevColors.slice(2, 4)])
  }


  const changeBottomLeftYellow = () => {
    const fart = new Audio(Fart)
    fart.play()
    setColors(prevColors => [...prevColors.slice(0, 2), ...prevColors.slice(2, 3).map(each => each === "yellow" ? "white" : "yellow"), ...prevColors.slice(3, 4)])
  }

  const changeBottomRightGreen = () => {
    const fart = new Audio(Fart)
    fart.play()
    setColors(prevColors => [...prevColors.slice(0, 3), ...prevColors.slice(3, 4).map(each => each === "green" ? "white" : "green")])
  }


  

  return (
    <div className="all">
      <header className="App-header">
        <Header />
      </header>
      <div className="App">
      <h1>PUSH MY BUTTONS!!!</h1>
        <section className="square-quad">
          <Square color={colors[0]}/>
          <Square color={colors[1]}/>
          <Square color={colors[2]}/>
          <Square color={colors[3]}/>
        </section>
        <button onClick={changeBlackNWhite}>Toggle Black/White</button>
        <button style={{backgroundColor: "purple", color: "white"}} onClick={changeTopsPurple}>Turn Tops Purple</button>
        <div className="partyButtons">
          <button style={{backgroundColor: "blue", color: "white"}} onClick={changeBottomLeftBlue}>Turn Bottom Left Blue</button>
          <button style={{backgroundColor: "blue", color: "white"}} onClick={changeBottomRightBlue}>Turn Bottom Right Blue</button>
        </div>
        <div className="partyButtons">
          <button style={{backgroundColor: "red", color: "white"}} onClick={changeTopLeftRed}>Turn Top Left Red</button>
          <button style={{backgroundColor: "orange"}} onClick={changeTopRightOrange}>Turn Top Right Orange</button>
          <button style={{backgroundColor: "yellow"}} onClick={changeBottomLeftYellow}>Turn Bottom Left Yellow</button>
          <button style={{backgroundColor: "green", color: "white"}} onClick={changeBottomRightGreen}>Turn Bottom Right Green</button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;