import React, { useEffect, useState } from "react";
import "./news.css";
const News = () => {
  const [news, setNews] = useState([]);

  function NewsDetails() {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=71569a5a44ea4a309e9bb4a88274f720"
    )
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  }
  useEffect(() => {
    Promise.all([NewsDetails()])
      .then(([result1]) => {
        console.log(result1.articles[1]);
        setNews(result1.articles[1]);
      })
      .catch((error) => {
        console.error("Error Fetching data", error);
      });
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
