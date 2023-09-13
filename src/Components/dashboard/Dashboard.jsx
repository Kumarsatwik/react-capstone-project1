import { useNavigate } from "react-router";
import News from "./News/News";
import User from "./UserDetails/User";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <User />
      <News />
      <button className="browse" onClick={() => navigate("/movie")}>
        Browse
      </button>
    </div>
  );
};

export default Dashboard;
