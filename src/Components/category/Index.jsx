import React, { useState } from "react";
import "./style.css";
import Category from "./CategoryList/Category";
import SelectedCategory from "./selectedCategory/SelectedCategory";

const Index = () => {
  const [selectedCatgory, setSelectedCategory] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className="category">
      <SelectedCategory
        selectedCatgory={selectedCatgory}
        setSelectedCategory={setSelectedCategory}
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
