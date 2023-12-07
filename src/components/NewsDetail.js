import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import newsCSV from '../assets/sheets/news.csv';
import './styles/NewsDetail.css';
import { getRowByTitle } from '../utils/CSVReader.js';
import displayWithParagraphs from '../utils/CSVReader.js';
import { Grid, Typography, Box } from "@mui/material";
        
const NewsDetail = () => {
  const { slug } = useParams(); // Retrieve the slug from URL
  const [newsItem, setNewsItem] = useState(null);


  useEffect(() => {
    getRowByTitle(newsCSV, slug, setNewsItem); // Fetch the news item by the slug
  }, [slug]);

  if (!newsItem) {
    return <div>Loading news details...</div>;
  }
  const image = "../images/news/" + newsItem.fileName;
  // console.log(image)
  return (
    <>
      <Navbar />
      <div className="page">
        <div className='news-detail'>
          <h1 className='detail-title'>{newsItem.title}</h1>
          <Box
          component="img"
          sx={{
            maxHeight: "50%",
            maxWidth: "50%",
            borderRadius: "1rem",
            alignContent: "center"
          }}
          alt={newsItem.title}
          src={image}
          alignItems="center"
        />
          <h3 className='detail-author-name'> By: {newsItem.author}, {newsItem.position}</h3>
          <h3 className='detail-author-date'>{newsItem.date}</h3>
          <p className='detail-description'>{displayWithParagraphs(newsItem.description)}</p>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetail;
