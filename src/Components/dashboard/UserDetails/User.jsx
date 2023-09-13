import Weather from "../Weather/Weather";
import UserImage from "../../../assests/user.png";
import "./user.css";
import Watch from "../Watch/Watch";
const User = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const categoryData = JSON.parse(localStorage.getItem("categoryData"));
  return (
    <div className="user__section">
      <div className="user__home">
        <div className="user">
          <img src={UserImage} alt="" />
          <div className="details">
            <div className="user__details">
              <p>{userDetails.name}</p>
              <p>{userDetails.email}</p>
              <h1>{userDetails.username}</h1>
            </div>
            <div className="user_choices">
              {categoryData.map((item, index) => (
                <div className="choices" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Weather />
        <Watch />
      </div>
      <div className="user__notes">
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo conse Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident,
        </p>
      </div>
    </div>
  );
};

export default User;
