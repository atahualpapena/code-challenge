import React from "react";
import { Typography } from "@material-ui/core";
import useReactRouter from "use-react-router";
import axios from "axios";

const AlbumSingle = () => {
  const { match } = useReactRouter();
  const { id } = match.params;
  const [album, setAlbum] = React.useState();
  React.useEffect(() => {
    const fetchAlbums = async () => {
      const res = await axios.get(`http://localhost:3000/albums/${id}`);
      setAlbum(res.data);
      console.log(res);
    };
    fetchAlbums();
  }, [match.params.id]);

  return (
    <div>
      {!album && <Typography variant="h5">Loading</Typography>}
      {album && <Typography variant="h6">{album.title}</Typography>}
    </div>
  );
};

export default AlbumSingle;
