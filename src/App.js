import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import SignUpPage from "./pages/SignUpPage";

//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Boostrap JS
import "bootstrap";

document.title = "Dev's Board";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/signup" component={SignUpPage}></Route>
          <Route path="/home" exact component={HomePage}></Route>
          <Route path="/board" component={BoardPage}></Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
