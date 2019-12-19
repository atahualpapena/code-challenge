import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Code Challenge</Typography>
        <Link to="/albums">
          <Button color="inherit">Albums</Button>
        </Link>
        <Link to="/photos">
          <Button color="inherit">Photos</Button>
        </Link>
        <Link to="/">
          <Button color="inherit">Home</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
