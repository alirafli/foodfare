import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Artikel ke {id}</div>;
};

export default Article;
