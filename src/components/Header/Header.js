import React from "react";
import "./Header.css";

import restaurantFood from "../../images/restaurantfood.jpg";
import restaurant from "../../images/restaurant.jpg";

function Header(props) {

  const handleRedirection = () => {
    if (props.cafeButtonName === "Reserve Table") {
      window.location.href = "/reserve";
    }
    else if (props.cafeButtonName === "Order Online") {
      window.location.href = "/order";
    }
  };

  return (
    <header className="header-container">
      <div>
        <h1>{props.cafeTitle}</h1>
        {props.cafeLocation && <h3>{props.cafeLocation}</h3>}
        <p>{props.cafeDescription}</p>
        <button onClick={handleRedirection}>{props.cafeButtonName}</button>
      </div>
      <div>
        <img
          className="header-image"
          src={props.image === "restaurantFood" ? restaurantFood : restaurant}
          alt="restaurant food"
        />
      </div>
    </header>
  );
}

export default Header;
