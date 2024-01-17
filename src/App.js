import React from "react";
import { useState, useContext } from "react"

const MyContext = React.createContext();

export default function App() {
  return (
    <MyContext.Provider value="HELLO">
      <div className="container">
        <h1>Hooks</h1>
        <Child />
      </div>
    </MyContext.Provider>
  )
}

const Child = () => {
  const value = useContext(MyContext);
  return (
    <p>{value}</p>
  )
}


// const HookSwitch = () => {

//   const [color, setColor] = useState('white')
//   const [fontSize, setFontSize] = useState(14)

//   return (
//     <div style={{ background: color, fontSize: fontSize }}>
//       <p>some text for fontsize test</p>
//       <button className="btn btn-primary" onClick={() => setColor('white')}>Light</button>
//       <button className="btn btn-warning" onClick={() => setColor('black')}>Dark</button>
//       <button className="btn btn-warning" onClick={() => setFontSize(fontSize + 2)}>+</button>
//       <button className="btn btn-warning" onClick={() => setFontSize(fontSize - 2)}>-</button>
//     </div>
//   )
// }