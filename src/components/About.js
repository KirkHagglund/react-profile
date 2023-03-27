import React from "react";
import "../styles/about.css"

function About() {
  return (
    <div id="about-container">
      <img className="about-div" id="profile-pic" src="https://i.imgur.com/mC5fYxe.jpg" alt="Profile pic" />
      <div className="about-div" id="text-box">
        <div className="about-title">Welcome!</div>
        <p>
          Hi there, my name is Kirk Hagglund. Welcome to my page, powered by
          React. I'm originally from Toronto, but recently relocated to Costa
          Rica. I'm working my way through a full stack coding bootcamp
          administered by the University of Toronto.
        </p>
        <p>
          Previously, I was involved in the Toronto restaurant industry, working
          as a Sommelier and wine program director, and mid level manager at
          several reputable destinations. During the pandemic I had much more
          time to foster hobbies and interests, where I rediscovered my love for
          puzzles and problem solving.
        </p>
      </div>
    </div>
  );
}

export default About;
