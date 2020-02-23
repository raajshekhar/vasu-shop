import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const App = lazy(() => import("./App.js"));
const Sidebar = lazy(()=>import("./components/Sidebar/Sidebar"));
const Footer = lazy(()=>import("./components/Footer/Footer"));

class MainRoutes extends Component {

  render() {
    return (
      <section id="main-wrapper">
        <Suspense fallback={<div>Loading... </div>}><Sidebar /></Suspense>
        <article id="vertical-vertical-view">
            <Suspense fallback={<div>Loading... </div>}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/test" component={()=><div>Testing</div>} />
            </Switch>
          </Suspense>
        </article>
        <Suspense fallback={<div>Loading... </div>}><Footer /></Suspense>
      </section>
    );
  }
}

export default MainRoutes;