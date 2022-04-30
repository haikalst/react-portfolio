import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "service_9guda79", refForm.current, "template_wthg6mp")
      .then(
        () => {
          alert("Pesan berhasil dikirim!");
          window.location.reload(false);
        },
        () => {
          alert("Pesan gagal dikirim, coba lagi!");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["K", "o", "n", "t", "a", "k", " ", "s", "a", "y", "a"]}
              idx={15}
            />
          </h1>
          <p>
            Saya berusaha sebaik mungkin untuk menjadi seorang developer dan
            terus belajar tanpa henti sepanjang waktu karea itu akan menjadi
            bekal saya untuk mencari tantangan di industri 4.0 dan sampai
            industri 5.0.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nama" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subyek"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Pesan Anda"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Kirim" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Samir Handanovic,
          <br />
          Jakarta,
          <br />
          Jakarta International Stadium Conventry <br />
          Jakarta, Indonesa <br />
          <span>mail@example.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-6.1472, 106.87866]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-6.1472, 106.87866]}>
              <Popup>
                Saya tinggal disini, lemparkan saya segelas kopi hitam!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
