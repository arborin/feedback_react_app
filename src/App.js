import Player from "./components/Player";


export default function App() {
    return (
        <div className="container">
            <main>
                <div id="game-container">
                    <ol id="plyers">
                        <Player name="Nika" symbol="x" />
                        <Player name="Jemali" symbol="O" />
                    </ol>
                </div>
            </main>
        </div>
    )
}




