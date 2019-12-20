import React from "react";
import axios from "axios";
import useReactRouter from "use-react-router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
    marginTop: 20,
    marginRight: 20,
    margin: "auto",
    display: "inline-block"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  }
}));

const PhotoItem = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [photosPerPage] = React.useState(10);
  const classes = useStyles();
  const { match } = useReactRouter();
  const { id } = match.params;
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get(`http://localhost:3000/photos/${id}`);
      console.log(res.data);
      setPhotos(res.data);
    };
    fetchPhotos();
  }, []);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Container>
      {photos
        .slice(
          currentPage * photosPerPage,
          currentPage * photosPerPage + photosPerPage
        )
        .map((photo, index) => (
          <Card className={classes.card} key={index}>
            <CardHeader title={photo.title} subheader={id} />
            <CardMedia className={classes.media} image={photo.thumbnailUrl} />
          </Card>
        ))}
      <br />
      <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
        Previous Page
      </Button>
      <Button
        disabled={currentPage >= photos.length / photosPerPage}
        onClick={handleNextPage}
      >
        Next Page
      </Button>
    </Container>
  );
};

export default PhotoItem;
