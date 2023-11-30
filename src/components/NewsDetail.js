import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import newsCSV from '../assets/sheets/news.csv';
import './styles/NewsDetail.css';
import { getRowByTitle } from '../utils/CSVReader.js';

const NewsDetail = () => {
  const { slug } = useParams(); // Retrieve the slug from URL
  const [newsItem, setNewsItem] = useState(null);


  useEffect(() => {
    getRowByTitle(newsCSV, slug, setNewsItem); // Fetch the news item by the slug
  }, [slug]);

  if (!newsItem) {
    return <div>Loading news details...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="page">
        <div className='news-detail'>
          <h1 className='detail-title'>{newsItem.title}</h1>
          <h3 className='detail-author-name'>Author: {newsItem.author}</h3>
          <h3 className='detail-author-position'>{newsItem.position}</h3>
          <p className='detail-description'>{newsItem.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetail;
