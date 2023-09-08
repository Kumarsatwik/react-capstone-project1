import React, { useState } from "react";
import "./style.css";
import Category from "./CategoryList/Category";
import SelectedCategory from "./selectedCategory/selectedCategory";

const Index = () => {
  const [selectedCatgory, setSelectedCategory] = useState([]);
  const [count, setCount] = useState(0);


  return (
    <div className="category">
      <SelectedCategory
        selectedCatgory={selectedCatgory}
      />
      <Category
        selectedCatgories={selectedCatgory}
        setSelectedCategory={setSelectedCategory}
        count={count}
      />
    </div>
  );
};

export default Index;
