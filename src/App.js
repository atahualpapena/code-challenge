import React from "react";
import "./App.css";
import PhotoItem from "./Components/PhotoItem/PhotoItem";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlbumList from "./Components/AlbumList/AlbumList";
import AlbumSingle from "./Components/AlbumSingle/AlbumSingle";
import Home from "./Components/Home/Home";

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
