import "./selected.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
const SelectedCategory = ({ selectedCatgory }) => {

  return (
    <div className="selectedCategory">
      <h1 className="selectedCategory__heading">Super app</h1>
      <p className="selectedCategory__subheading">
        Choose your entertainment category
      </p>
      <div className="selectedCategory__list">
        {selectedCatgory.map((item, index) => {
          return (
            <div className="items" key={index}>
              {item} <FontAwesomeIcon icon={faTimes} />{" "}
            </div>
          );
        })}
      </div>
      {selectedCatgory.length < 3 ? (
        <div className="errors">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <label htmlFor="">Minimum 3 category required</label>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectedCategory;
