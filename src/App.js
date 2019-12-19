import React from "react";
import "./App.css";
import PhotoItem from "./PhotoItem/PhotoItem";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlbumList from "./AlbumList/AlbumList";
import AlbumSingle from "./AlbumSingle/AlbumSingle";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/photos" exact component={PhotoItem} />
          <Route path="/albums" exact component={AlbumList} />
          <Route path="/albums/:id" exact component={AlbumSingle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
