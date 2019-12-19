import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    minHeight: 275,
    margin: 20,

    display: "inline-block"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const AlbumSingle = ({ match }) => {
  const classes = useStyles();
  const [album, setAlbum] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${album.id}`)
      .then(res => {
        setAlbum(res.data);
      });
  }, []);

  return (
    <Container className="Album-card">
      <br />
      <Typography variant="h5" component="h3">
        Select an Album
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Abum Id: {album.id}
          </Typography>
          <Typography variant="h5" component="h2">
            Album title: {album.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/photos">
            <Button size="small">Go to Photos</Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default AlbumSingle;
