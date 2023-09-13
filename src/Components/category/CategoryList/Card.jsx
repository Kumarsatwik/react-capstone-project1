import "./card.css";

const Card = ({ color, category, image, checked, onClick }) => {
  const handleClick = () => {
    onClick(category);
  };
  return (
    <div
      className="Cards"
      style={{
        backgroundColor: color,
        boxShadow: checked ? "0 0 5px 5px #11B800" : "none",
      }}
      onClick={handleClick}
    >
      <p
        className="card__category"
        style={{
          textAlign: "left",
          width: "100%",
          padding: "6px 0 7px 15px",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        {category}
      </p>
      <img
        style={{ padding: "5px", borderRadius: "10px" }}
        src={image}
        alt="image"
      />
    </div>
  );
};

export default Card;
