import React, { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
import Dummy from "../../assets/dummyFood.png";
import { useStyles } from "./Style";
import Card from "../../components/CustomCard";
import { data } from "../../DummyData/Data";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import ModalItem from "../../components/Modals/Modals";
import Button from "../../components/CustomButton";
import { getSharefoods } from "../../firebase/api/shareFood";

const ShareFood = () => {
  const [open, setOpen] = useState(false);
  const [foodList, setFoodList] = useState([]);
  const [content, setContent] = useState(1);
  const handleOpen = (data) => {
    setOpen(true);
    setContent(data);
  };
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const DummyData = data;

  useEffect(async () => {
    const data = await getSharefoods();
    console.log(data)
    setFoodList(data);
  }, []);

  return (
    <Grid
      container
      sx={{ width: "70%", mx: "auto", mt: 15 }}
      justifyContent="center"
    >
      {foodList.map((data, i) => (
        <Grid
          item
          lg={4}
          key={i}
          onClick={() => {
            handleOpen();
            setContent(i);
          }}
          sx={{ cursor: "pointer" }}
        >
          <Card
            date={data.expiredDate}
            useImage
            img={Dummy}
            bold
            key={i}
            content={data.title}
            id={i}
          />
        </Grid>
      ))}

      {foodList.filter((x, i) => i == content).map((e, i) => (
        <Box key={i}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalItem title={e.title} username="ian" />
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
        <Link to="/share-food/form" style={{ textDecoration: "none" }}>
          <Button content="+" ternary />
        </Link>
      </Box>
    </Grid>
  );
};

export default ShareFood;
