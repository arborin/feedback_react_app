import { useState } from "react"

export default function App() {
  return (
    <>
      <div className="container">
        <h1>Hooks</h1>
        <HookSwitch />
      </div>
    </>
  )
}


const HookSwitch = () => {

  const [color, setColor] = useState('white')
  const [fontSize, setFontSize] = useState(14)

  return (
    <div style={{ background: color, fontSize: fontSize }}>
      <p>some text for fontsize test</p>
      <button className="btn btn-primary" onClick={() => setColor('white')}>Light</button>
      <button className="btn btn-warning" onClick={() => setColor('black')}>Dark</button>
      <button className="btn btn-warning" onClick={() => setFontSize(fontSize + 2)}>+</button>
      <button className="btn btn-warning" onClick={() => setFontSize(fontSize - 2)}>-</button>
    </div>
  )
}