import React, { useEffect, useState } from "react";
import axios from "axios";
import "./news.css";
import NewsImage from "../../../assests/news.png";


const News = () => {
  const [news, setNews] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://newsapi.org/v2/top-headlines?country=us&apiKey=71569a5a44ea4a309e9bb4a88274f720"
  //       );
  //       console.log(response.data);
  //       setNews(response.data.articles[0]);
  //     } catch (error) {
  //       console.error("Error Fetching data", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className="news__home">
      <div className="news__heading">
        <img src={NewsImage} className="news__image" alt="" />
        <p className="news__title">Want to climb Mount Everest?</p>
      </div>
      <div className="news__description">
        <p>In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......</p>
      </div>
    </div>
  );
};

export default News;
