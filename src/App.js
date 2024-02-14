import Player from "./components/Player";
import GameBoard from "./components/GameBoard";


export default function App() {
    return (
        <div className="container">
            <main>
                <div id="game-container">
                    <ol id="plyers">
                        <Player initialName="Nika" symbol="x" />
                        <Player initialName="Jemali" symbol="O" />
                    </ol>
                </div>
                <GameBoard />
            </main>
        </div>
    )
}




