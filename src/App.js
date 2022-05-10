import React from "react";
import Square from "./Components/Square";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Alert from "./Sounds/Alert.mp3"
import Goofy from "./Sounds/Goofy.mp3"
import Evil from "./Sounds/Evil.mp3"
import Fart from "./Sounds/Fart.mp3"

const App = () => {
  let [colors, setColors] = React.useState([
    "white",
    "white",
    "white",
    "white"
  ])

  const changeColorSmall = () => {
    const alert = new Audio(Alert)
    alert.play()
    setColors(prevColors => prevColors.map(each => each === "white" ? "black" : "white"))
  }

  const changeTopsPurple = () => {
    const goofy = new Audio(Goofy)
    goofy.play()
    setColors(prevColors => [...prevColors.slice(0, 2).map(each => each === "purple" ? "white" : "purple"), ...prevColors.slice(2, 4)])
  }

  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <div className="App">
        <section className="square-quad">
          <Square color={colors[0]}/>
          <Square color={colors[1]}/>
          <Square color={colors[2]}/>
          <Square color={colors[3]}/>
        </section>
        <button onClick={changeColorSmall}>Toggle Black/White</button>
        <button onClick={changeTopsPurple}>Turn Tops Purple</button>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;