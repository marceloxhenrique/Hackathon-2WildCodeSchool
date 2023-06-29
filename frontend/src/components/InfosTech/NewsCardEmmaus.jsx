import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "react-toastify/dist/ReactToastify.css";
import "./NewsCard.css";

const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

function NewsCard() {
  const notify = () => toast.error("Désolé! Aucune Info pour le moment");
  const [news, setNews] = useState(null);
  const getNews = () => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=emmaus&apikey=${GNEWS_API_KEY}&lang=fr`
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        notify(error.message);
      });
  };

  useEffect(getNews, []);

  const [newsIndex, setNewsIndex] = useState(0);
  const handlePrevious = () => {
    setNewsIndex(newsIndex - 1);
  };
  const handleNext = () => {
    setNewsIndex(newsIndex + 1);
  };

  if (news) {
    return (
      <div>
        <div className="news-card">
          <div className="image-container">
            {news[newsIndex].image !== null ? (
              <img
                src={news[newsIndex].image}
                alt={news[newsIndex].title}
                className="news-image"
              />
            ) : (
              handleNext()
            )}
          </div>
          <div className="bottom-container">
            <h3 className="news-title">{news[newsIndex].title}</h3>
            <p className="news-description">{news[newsIndex].description}</p>
            <p className="news-content">{news[newsIndex].content}</p>
            <p className="news-author">Source: {news[newsIndex].source.name}</p>
          </div>
          <div className="news-nav-container">
            <div className="news-nav">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={newsIndex === 0}
                className="news-arrow news-arrow-prev"
              >
                <ArrowLeftIcon />
              </button>
              <a
                href={news[newsIndex].url}
                className="news-link"
                target="_blank"
                rel="noreferrer"
              >
                Lire Plus
              </a>
              <button
                type="button"
                onClick={handleNext}
                disabled={newsIndex === news.length - 1}
                className="news-arrow news-arrow-next"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
        <div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    );
  }
}

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    source: PropTypes.shape({ name: PropTypes.string }),
    image: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
  }),
};

NewsCard.defaultProps = {
  news: null,
};

export default NewsCard;
