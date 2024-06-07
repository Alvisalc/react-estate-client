import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="content">
        <h1>Welcome to Our Estate</h1>
        <p>Your dream home awaits you. Browse through our listings to find the perfect property.</p>
        <div className="buttonContainer">
          <button className="primaryButton">Browse Listings</button>
          <button className="secondaryButton">Contact Us</button>
        </div>
        <Searchbar/>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Hero" />
      </div>
    </div>
  );
}

export default HomePage;
