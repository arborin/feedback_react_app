import React, { useEffect } from "react";
import { useState, useContext } from "react"

const MyContext = React.createContext();

export default function App() {
  return (
    <MyContext.Provider value="HELLO">
      <div className="container">
        <h1>Hooks</h1>
        <Child />
        <HookCounter value={100} />
        <Notification />
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

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log("USE EFFECT");
  }, [])
  return <p>{value}</p>
}

const Notification = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2500);

    return () => clearTimeout(timeout);

  }, [])
  return (<div>
    {visible && <p>notification</p>}
  </div>)
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