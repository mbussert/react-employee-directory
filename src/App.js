import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
