import data from "./data";
import "./category.css";
import { useState } from "react";
import Card from "./Card";
const Category = ({ selectedCatgories, setSelectedCategory }) => {
  const handleClick = (category) => {
    if (selectedCatgories.includes(category)) {
      setSelectedCategory(
        selectedCatgories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategory([...selectedCatgories, category]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = JSON.stringify({
      countCategory: selectedCatgories.length,
      categories: selectedCatgories,
    });
    localStorage.setItem("categoryData", newData);
  };

  return (
    <>
      <div className="categoryHome">
        <div className="categoryList">
          {data.map((item, index) => (
            <Card
              key={index}
              color={item.color}
              category={item.name}
              image={item.image}
              selected={selectedCatgories.includes(item.name)}
              onClick={handleClick}
            />
          ))}
        </div>
        <div>
          <button
            onClick={handleSubmit}
            style={
              selectedCatgories.length >= 3
                ? { visibility: "block" }
                : { display: "none" }
            }
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Category;
