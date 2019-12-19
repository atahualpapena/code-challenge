import React from "react";
import axios from "axios";
import useReactRouter from "use-react-router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
    marginTop: 20,
    margin: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  }
}));

const PhotoItem = () => {
  const classes = useStyles();

  const { match } = useReactRouter();
  const { id } = match.params;
  const [photo, setPhotos] = React.useState([]);
  React.useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get(`http://localhost:3000/photos/${id}`);
      console.log(res.data);
      setPhotos(res.data);
    };
    fetchPhotos();
  }, []);
  return (
    <Card className={classes.card}>
      <CardHeader title={photo.title} subheader={id} />
      <CardMedia className={classes.media} image={photo.thumbnailUrl} />
      <CardActions disableSpacing>
        <IconButton aria-label="Go To Albums">
          <ArrowBackIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PhotoItem;
