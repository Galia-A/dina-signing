import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

// import Header from "./components/header/header.component";
// import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="he-language">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
