import React, { useState } from 'react';
import "./Searchbar.scss";

const Searchbar: React.FC = () => {
  const [activeType, setActiveType] = useState("buy");

  return (
    <div className="searchBar">
      <div className="type">
        <button 
          className={activeType === "buy" ? "active" : ""}
          onClick={() => setActiveType("buy")}
        >
          Buy
        </button>
        <button 
          className={activeType === "rent" ? "active" : ""}
          onClick={() => setActiveType("rent")}
        >
          Rent
        </button>
      </div>
      <form className="searchForm">
        <input type="text" name="location" placeholder="City Location" />
        <input type="number" name="minPrice" min={0} max={1000000} placeholder="Min Price" />
        <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max Price" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
