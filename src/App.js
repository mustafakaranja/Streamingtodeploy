import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import history from "./History/history";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Home from "./Streams/Home";
import HeaderForAll from "./Components/HeaderForAll";
import FooterForAll from "./Components/Footer";

const App = () => {
  document.title = "Best Entertainment";
  return (
    <>
      <Router history={history}>
        <HeaderForAll />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Streamlist" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>
        <FooterForAll />
      </Router>
    </>
  );
};

export default App;
