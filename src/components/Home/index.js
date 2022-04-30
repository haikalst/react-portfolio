import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from "./Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["H", "a", "n", "d", "a", "n", "o", "v", "i", "c"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _8`}>a</span>
            <span className={`${letterClass} _9`}>l</span>
            <span className={`${letterClass} _10`}>o,</span>
            <br />
            <span className={`${letterClass} _11`}>S</span>
            <span className={`${letterClass} _12`}>a</span>
            <span className={`${letterClass} _13`}>y</span>
            <span className={`${letterClass} _14`}>a</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>Fullstack Developer / Designer / Content Creator</h2>
          <Link to="/contact" className="flat-button">
            KONTAK SAYA
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
