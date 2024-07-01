import "./App.css";
//Config
import { Outlet } from "react-router-dom";

//Components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
