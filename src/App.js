import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { PageProvider } from "./hooks/PageContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faForward, faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faForward, faSpinner);

function App() {
  return (
    <PageProvider>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route path="/two" component={PageTwo} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    </PageProvider>
  );
}

export default App;
