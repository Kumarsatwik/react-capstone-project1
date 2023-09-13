import React, { useEffect, useState } from "react";
import axios from "axios";
import "./news.css";

const News = () => {
  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=71569a5a44ea4a309e9bb4a88274f720"
        );
        console.log(response.data);
        setNews(response.data.articles[0]);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="news__home">
      <div className="news__heading">
        <img src={news?.urlToImage} className="news__image" alt="" />
        <p className="news__title">{news?.title}</p>
      </div>
      <div className="news__description">
        <p>{news?.content?.split(" ").slice(0, 25).join(" ")}</p>
      </div>
    </div>
  );
};

export default News;
