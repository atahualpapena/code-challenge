import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 375,
    margin: 20,
    display: "inline-block"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const PhotoItem = () => {
  const classes = useStyles();
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/photos").then(res => {
      setPhotos(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Photos</h1>
      {photos.map(photo => (
        <Card className={classes.card}>
          <CardHeader title={photo.title} />
          <CardMedia
            className={classes.media}
            image={photo.thumbnailUrl}
            title={photo.title}
          />
          <CardActions disableSpacing>
            <IconButton aria-label="back">
              <ArrowBackIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default PhotoItem;
