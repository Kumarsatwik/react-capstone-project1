// GenreContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create a new context
const GenreContext = createContext();

// Create a context provider component
export const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch genre data and store it in the state
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            params: {
              language: "en-US",
              api_key: "2f1d522f9a87d7458baceea9a5184900",
            },
          }
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genre data:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    // Provide the genres state to the rest of the application
    <GenreContext.Provider value={genres}>{children}</GenreContext.Provider>
  );
};

// Custom hook to access the genres data in other components
export const useGenres = () => {
  return useContext(GenreContext);
};
