import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Code Challenge</Typography>
        <Link to="/albums" style={{ color: "white" }}>
          <Button color="inherit">Albums</Button>
        </Link>
        <Link to="/" style={{ color: "white" }}>
          <Button color="inherit">Home</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
