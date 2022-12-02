import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { MapContainer, TileLayer } from "react-leaflet";
import { createMarker } from "./ParkMap/Map";
import { addFav } from "../server-functions";

const SearchModal = (props) => {
  const [open, setOpen] = useState(false);
  const [park, setPark] = useState({
    properties: [],
    geometry: { coordinates: [51.0447, -114.0719] },
  });
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const addFavorite = async()=> {
    const p = park
    const uid = '1a'
    await addFav(p, uid)
  }

  useEffect(() => {
    setPark(props.parks);
    handleOpen();
  }, [props.num]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "50vh",
    bgcolor: "hsl(89, 59%, 90%)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "25vw 25vw",
    gridTemplateRows: "45vh 5vh",
    boxSizing: "content-box",
    gap: "1em",
  };

  if (!park) {
    return null;
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "column", flex: "auto" }}>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
              sx={{ "font-size": "5vmin" }}
            >
              {park.properties.title}
            </Typography>
            <Typography
              id="keep-mounted-modal-description"
              sx={{ mt: 2, flex: "auto", fontSize: "3vmin" }}
            >
              {park.properties.address}
            </Typography>
            <Typography sx={{ flex: "auto" }}>
              {park.properties.description}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{ border: "1px solid hsl(27, 58%, 20%)", flex: "auto" }}
              >
                {`Fenced: ${park.properties.fenced}`}
              </Typography>
              <Typography
                sx={{ border: "1px solid hsl(27, 58%, 20%)", flex: "auto" }}
              >
                {park.properties.riverAccess
                  ? "River Access: Yes"
                  : "River Access: No"}
              </Typography>
              <Typography
                sx={{ border: "1px solid hsl(27, 58%, 20%)", flex: "auto" }}
              >
                {park.properties.agilityEquiptment
                  ? "Agility Equipment: Yes"
                  : "Agility Equipment: No"}
              </Typography>
            </Box>
          </Box>
          <Box>
            <MapContainer
              center={[
                park.geometry.coordinates[1],
                park.geometry.coordinates[0],
              ]}
              zoom={15}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {createMarker(park)}
            </MapContainer>
          </Box>
          <Box
            sx={{
              gridColumnStart: "span 2",
              textAlign: "center",
              display: "flex",
              gap: "5em",
            }}
          >
            <button onClick={addFavorite}>Add to favorites</button>
            <button onClick={handleClose}>Exit</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchModal;
