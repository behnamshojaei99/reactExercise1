import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function Info(props) {
  return (
    <div className="user-deets">
      <img src={props.user.avatar} alt={props.user.name} />
      <h3>
        <a href="https://twitter.com/chrisoncode">{props.user.name}</a>
      </h3>
      <p><strong>Location</strong>
      {props.user.location}
      </p>
      <p>
      <strong>Eats</strong>
      {props.user.foodType}
      </p>
      <p>
      <strong>Age</strong>
      {props.user.age}
      </p>
      <p>
      <strong>Likes</strong>
      {props.user.likes}
      </p>
      <p>
      <strong>twitter</strong>
      <a href={"https://twitter.com/"+props.user.twitterUsername}>@{props.user.twitterUsername}</a>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <Info user={user} />
      <div className="user-deets">display user info here. happy coding!</div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
