import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "T",
                "e",
                "n",
                "t",
                "a",
                "n",
                "g",
                " ",
                "s",
                "a",
                "y",
                "a",
              ]}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
            doloremque animi, voluptatem minima sunt adipisci est libero quas
            corporis obcaecati, eius a maxime dignissimos nostrum ratione nobis
            dolorem velit. Dolore, sunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime
            iure, nobis earum minus quia cupiditate, asperiores minima ea.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
            doloremque animi, voluptatem minima sunt adipisci est libero quas
            corporis obcaecati, eius a maxime dignissimos nostrum ratione nobis
            dolorem velit. Dolore, sunt?
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#e04d01" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
