import "./home.css";
import Landing from "../../assests/landing.png";
import { useState } from "react";
const Home = () => {
  const [name, setName] = useState(true);
  const [username, setUsername] = useState(true);
  const [email, setEmail] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [checkbox, setCheckbox] = useState(false);

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name != "") {
      setName(false);
    }
    if (data.username != "") {
      setUsername(false);
    }
    if (data.email != "") {
      setEmail(false);
    }
    if (data.mobile != "") {
      setMobile(false);
    }
    if (data.checkbox != true) {
      setCheckbox(false);
    }
    localStorage.setItem("data", data);
  };

  return (
    <div className="home">
      <section className="banner">
        <img src={Landing} className="bannerImage" alt="" />
        <h1 className="heading">Discover new things on Superapp</h1>
      </section>
      <section className="registration">
        <h1>Super App</h1>
        <p>Create your new account</p>
        <form action="">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
          />
          {!name ? <span className="error">Field is required</span> : ""}
          <input
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="UserName"
          />
          {!username ? <span className="error">Field is required</span> : ""}
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
          {!email ? <span className="error">Field is required</span> : ""}
          <input
            type="text"
            placeholder="Mobile"
            onChange={handleChange}
            name="mobile"
          />
          {!mobile ? <span className="error">Field is required</span> : ""}
          <span>
            <input
              type="checkbox"
              checked={checkbox}
              onChange={(e) => setCheckbox(e.target.checked)}
              name="checkbox"
              id=""
            />
            <label htmlFor="">Share my registration data with Superapp</label>
          </span>
          {checkbox ? (
            <span className="error">Check this box if you want to proceed</span>
          ) : (
            ""
          )}
          <button onClick={handleSubmit}>SIGN UP</button>
        </form>
        <section className="terms">
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <label>Terms and Conditions of Use</label>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <label>Privacy Policy</label>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Home;
