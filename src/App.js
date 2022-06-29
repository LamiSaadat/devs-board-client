import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";

//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Boostrap JS
import "bootstrap";
import ColorPalette from "./components/ColorPalette/ColorPalette";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/board/:id" component={ColorPalette}></Route>
        <Route path="/board" component={BoardPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
