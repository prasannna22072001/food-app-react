import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          hello prasanna i ahfdnlakf afaiokfn ajfdf an dgslljgsop 
          shigjoagd jafmivb ajps;rflkffo vjsldfnklfaofashf jaifaflkzm
          dfkjfioa fbchskaflsk dasfjiek fafnjalifjsk fasdifjsiz sdnasklfi
        </p>
      </div>
    </div>
  );
}

export default About;
