import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Grid } from "@mui/material";
import { data } from "../../DummyData/Data";

const Article = () => {
  const { id } = useParams();
  const DummyData = data;

  return (
    <Box sx={{ p: 4 }}>
      {DummyData.filter((data) => data.id == id).map((content, i) => (
        <Box key={i}>
          <Typography variant="title" sx={{ color: "#31572C" }} align="center">
            {content.content}
          </Typography>
          <Box>
            {content.article.map((data, i) => (
              <Typography key={i} variant="h3" align="justify" sx={{ mt: 3 }}>
                {data}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Article;
