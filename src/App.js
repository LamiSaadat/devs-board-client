import "./App.scss";
import ColorPalette from "./components/ColorPalette/ColorPalette";
import Header from "./components/Header";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Boostrap JS
import "bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <ColorPalette />
    </div>
  );
}

export default App;
