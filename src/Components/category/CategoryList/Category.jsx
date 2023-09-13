import data from "./data";
import "./category.css";
import Card from "./Card";
import { useNavigate } from "react-router";

const Category = ({ selectedCatgories, setSelectedCategory }) => {
  const handleClick = (data) => {
    if (selectedCatgories.includes(data)) {
      setSelectedCategory(selectedCatgories.filter((item) => item !== data));
    } else {
      setSelectedCategory([...selectedCatgories, data]);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("categoryData", JSON.stringify(selectedCatgories));
    navigate("/dashboard");
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
              checked={selectedCatgories.includes(item.name)}
              onClick={handleClick}
            />
          ))}
        </div>
        <div>
          <button
            onClick={handleSubmit}
            style={
              selectedCatgories.length >= 3
                ? { display: "block" }
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
