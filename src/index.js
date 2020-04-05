import React from "react";
import ReactDOM from "react-dom";
import { Router, Redirect } from "@reach/router";

import "./index.css";
import App from "./App";

import APIComponent from "./components/APIComponent";
import APIIntro from "./components/APIIntro";
import GuideComponent from "./components/Guide";
import ReferenceComponent from "./components/Reference";

import routes from "./config/router";
import LandingPage from "./components/Landing";

const ComponentWithFallback = () => {
  return (
    <Router>
      <Redirect from="/" to={`${routes.ENTRY}${routes.LANDING}`} noThrow />
      <App path={routes.ENTRY}>
        <LandingPage path={routes.LANDING} />
        <APIComponent path={routes.API_PATH}>
          <APIIntro path={routes.INTRO} />
          <GuideComponent path={routes.GUIDE} />
          <ReferenceComponent path={routes.REFERENCE} />
        </APIComponent>
      </App>
    </Router>
  );
};
ReactDOM.render(<ComponentWithFallback />, document.getElementById("root"));
