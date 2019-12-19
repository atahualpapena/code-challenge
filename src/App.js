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
          <Route path="/albums" exact component={AlbumList} />
          <Route path="/album/:id" exact component={AlbumSingle} />
          <Route path="/album/:id/photos" exact component={PhotoItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
