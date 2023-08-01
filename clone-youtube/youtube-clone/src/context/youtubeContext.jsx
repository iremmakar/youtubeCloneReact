import { createContext, useState, useEffect } from "react";

import { options } from "../utils/constants.jsx";
import axios from "axios";

export const YoutubeContext = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    fetchCategories(selectedCategory);
  }, [selectedCategory]);

  // youtubedan verileri çeken fonksiyon

  const fetchCategories = (category) => {
    setSearchResult(null);
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res) => setSearchResult(res.data.contents));
  };

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, searchResult }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
