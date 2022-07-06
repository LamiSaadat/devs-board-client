import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import { ChakraProvider } from "@chakra-ui/react";

//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Boostrap JS
import "bootstrap";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/board" component={BoardPage}></Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
