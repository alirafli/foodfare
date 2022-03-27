import React, { useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import Dummy from "../../assets/dummyFood.png";
import { useStyles } from "./Style";
import Card from "../../components/CustomCard";
import { data } from "../../DummyData/Data";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import ModalItem from "../../components/Modals/Modals";
import Button from "../../components/CustomButton";

const ShareFood = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(1);
  const handleOpen = (data) => {
    setOpen(true);
    setContent(data);
  };
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const DummyData = data;
  // console.log(content);

  return (
    <Grid
      container
      sx={{ width: "70%", mx: "auto", mt: 15 }}
      justifyContent="center"
    >
      {DummyData.map((data, i) => (
        <Grid
          item
          lg={4}
          key={i}
          onClick={() => {
            handleOpen();
            setContent(data.id);
          }}
          sx={{ cursor: "pointer" }}
        >
          <Card
            date={data.date}
            useImage
            img={Dummy}
            bold
            key={i}
            content={data.content}
            id={data.id}
          />
        </Grid>
      ))}

      {DummyData.filter((x) => x.id == content).map((e, i) => (
        <Box key={i}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalItem title={e.content} username={e.name} />
          </Modal>
        </Box>
      ))}
      <Box
        sx={{
          width: "100vw",
          position: "sticky",
          top: 80,
          bottom: 0,
          right: 100,
          left: 0,
        }}
      >
        <Button content="+" ternary />
      </Box>
    </Grid>
  );
};

export default ShareFood;
