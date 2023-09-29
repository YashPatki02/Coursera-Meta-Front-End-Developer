import React from "react";
import "./Main.css";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";



function Main() {
  return (
    <main>
      <Specials />
      <Testimonials />
      <div>About</div>
    </main>
  );
}

export default Main;
