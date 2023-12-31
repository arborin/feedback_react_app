import { BrowserRouter } from "react-router-dom";
import Routes from "./Router";
import Topbar from "./components/topbar"

function App() {
  return (

    <BrowserRouter>
      <Topbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
