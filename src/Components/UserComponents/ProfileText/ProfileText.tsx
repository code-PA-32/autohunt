import "./profileText.scss";
import mongo from "assets/mongo.png";
import node from "assets/ndoe.png";
import react from "assets/react.png";
import redux from "assets/redux.png";
import ts from "assets/ts.png";
import LaunchIcon from "@mui/icons-material/Launch";

export const ProfileText = () => {
  return (
    <div className="profile_text">
      <h3>Welcome to Autohunt</h3>
      <h5>Here short info about website and things you able to do: </h5>
      <ul>
        <li>Able to create an account</li>
        <li>Edit account info</li>
        <li>Add Cars to favourite list</li>
        <li>Post, delete, update your car</li>
        <li>Wide list of filter to search a car</li>
        <li>Contact a car seller and have a chat with him</li>
        <li>Able to send images in chat</li>
        <li>News list, tags filters ets.</li>
        <li>Car reviews with rating and ability to post a comment</li>
        <li>Car compare, find the best car by comparing them</li>
      </ul>

      <div className="images">
        <img src={react} alt="tech" />
        <img src={ts} alt="tech" />
        <img src={redux} alt="tech" />
        <img src={node} alt="tech" />
        <img src={mongo} alt="tech" />
      </div>

      <div className="links_repo">
        <a
          href="https://github.com/OleksandrVernichenko/autohunt"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Client repo
          <LaunchIcon />
        </a>
        <a
          href="https://github.com/OleksandrVernichenko/autohunt_backend"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Backend repo
          <LaunchIcon />
        </a>
      </div>
    </div>
  );
};
