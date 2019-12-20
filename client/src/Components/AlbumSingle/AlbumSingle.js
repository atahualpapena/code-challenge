import React from "react";
import { Typography } from "@material-ui/core";
import useReactRouter from "use-react-router";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, Container } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    marginTop: 20,
    margin: "auto"
  },

  title: {
    fontSize: 14
  }
});

const AlbumSingle = () => {
  const classes = useStyles();
  const { match } = useReactRouter();
  const { id } = match.params;
  const [album, setAlbum] = React.useState();
  const { history } = useReactRouter();

  React.useEffect(() => {
    const fetchAlbums = async () => {
      const res = await axios.get(`http://localhost:3000/albums/${id}`);
      setAlbum(res.data);
    };
    fetchAlbums();
  }, [id]);

  const handleClick = () => {
    history.push(`/photos/${id}`);
  };

  return (
    <div>
      <Container>
        <Typography variant="h3">Album Detail</Typography>
        <Card className={classes.card}>
          {!album && <Typography variant="h5">Loading Album Name</Typography>}
          <CardContent>
            {album && (
              <Typography className={classes.pos} color="textSecondary">
                {album.title}
              </Typography>
            )}
            <Typography variant="body2" component="p">
              This is a great Album, peak inside!
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleClick} size="small">
              Go To Photos
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};

export default AlbumSingle;
