import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ImSpinner2 } from "react-icons/im";
import "./styles/NewsCard.css"

const NewsCard = ({ title, author, position, fileName, link, description, date }) => {
  const NEWS_IMAGE_PATH = "./images/news/";
  const newsImage = NEWS_IMAGE_PATH + fileName;
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <a href={link} className="news-link">
      <Card
        className="news-card custom-card clickable-card"
        title="Click me to read more!"
      >
        {!imageLoaded && (
          // Add your loading animation or placeholder image here
          <div className="loading-animation"><ImSpinner2 /></div>
        )}
        <CardMedia
          className="news-card-image"
          component="img"
          image={newsImage}
          onLoad={handleImageLoaded}
          style={{ display: imageLoaded ? "block" : "none" }}
        /> 
        <CardContent className="news-card-text">
          <Typography className="news-card-title" variant="h5">
            {title}
          </Typography>
          <Typography className="news-card-author">
           By: <span className="author-name">{author}</span>
           <span className="author-position">{position}</span>
          </Typography>
          <Typography className="news-card-description" variant="body2">
            {description}
            <Typography className="news-card-description underline">
              {"Click to continue reading!"}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};

export default NewsCard;
