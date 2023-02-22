import './App.css';
import './index.css';
import dream from "./img/dream.png";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <div className="App">
      <div className = "placeholder">
        <Navbar />
        <div className = "main">
          <div className = "areabcm">Area Business</div>
          <div className = "areabcm2">Continuity Management</div>
          <div className = "latnew">Lastest News</div>
          <div className = "newsboxline">
            <div className = "newsboxleft">
              <div className = "newsbox"></div>
            </div>
          </div>
          <div className = "newsboxline2">
            <div className = "newsboxleft2">
              <div className = "newsbox2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
