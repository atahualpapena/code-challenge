import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
    padding: theme.spacing(3, 2)
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Welcome to the Photos Application !
      </Typography>
      <br />
      <Typography component="p">
        Use the Navbar above to check all the Albums available, <br />
        from there you can select and specific album and display all the photos
        for that album.
      </Typography>
    </Paper>
  );
};

export default Home;
