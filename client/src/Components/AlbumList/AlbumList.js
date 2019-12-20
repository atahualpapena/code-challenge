import React from "react";
import axios from "axios";
import useReactRouter from "use-react-router";

import {
  Button,
  ListItem,
  ListItemText,
  List,
  Container,
  Typography
} from "@material-ui/core";

const AlbumList = () => {
  const [albums, setAlbums] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [albumsPerPage] = React.useState(10);
  const { history } = useReactRouter();
  React.useEffect(() => {
    const fetchAlbums = async () => {
      const res = await axios.get("http://localhost:3000/albums");
      setAlbums(res.data);
    };
    fetchAlbums();
  }, []);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClick = id => () => {
    console.log(id);
    history.push(`/albums/${id}`);
  };

  return (
    <Container>
      <Typography variant="h3">Albums List</Typography>
      <List>
        {albums
          .slice(
            currentPage * albumsPerPage,
            currentPage * albumsPerPage + albumsPerPage
          )
          .map((album, index) => (
            <ListItem button={true} onClick={handleClick(album.id)} key={index}>
              <ListItemText primary={album.title} />
            </ListItem>
          ))}
      </List>
      <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
        Previous Page
      </Button>
      <Button
        disabled={currentPage >= albums.length / albumsPerPage}
        onClick={handleNextPage}
      >
        Next Page
      </Button>
    </Container>
  );
};

export default AlbumList;
