import React, { Component } from "react";
import "./about.css";
import SplashHeader from "./splashHeader.js"

class About extends Component {
  render(){
    return(
      <div id="about">
        <main>
          <SplashHeader splash_style="top"/>
          <img className="profile-pic" src="./img/Avatar_Square.jpg"/>
          <p>Hi I'm Clark.  I am a full-stack developer and a musician.  I have been playing music since as long as I can remember.  I picked up guitar officially by age 8 and it has made me who I am today.  I became interested in science and technology in high school when a teacher inspired me to start building small circuits for my guitar. I started programming in 2013 after a fellow musician friend who is a full-stack developer kept mistaking me for a programmer.  We would get into long conversations about music theory and he kept saying I would make a good programmer and pointed me in the direction of khanacademy.org.  They had a little course on javascript and I ended up loving it.  I spent the next few years getting more involved in technology however I could.  I eventually decided to go to a 6 month web development immersive at Galvanize inc. and that was one of the most transformative experiences of my life.  While I was there I learned to use front end frameworks and build restful APIs among other things.  They taught us in JavaScript and had us build projects using unfamiliar technology.  I built projects in GO and Python as well as building a PWA for my capstone project.  I am really excited about building offline-first/friendly single-page progressive-web-apps I think that kind of architecture has a lot of promise for the near future.</p>

        </main>
      </div>
    );
  }
}

export default About;
