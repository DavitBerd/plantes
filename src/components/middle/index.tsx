import { useState } from "react";
import "./style.scss";
import extLink from "../../imgs/external-link-square-with-an-arrow-in-right-diagonal.png";
import { Planet } from "../../types";

const Middle = ({
  PlanetName,
  PlanetDescription,
  source,
  image,
  color,
}: Planet) => {
  const [activeImage, setActiveImage] = useState<number>(1);

  const activeStyle = {
    backgroundColor: color,
    borderColor: color,
  };

  return (
    <div className="main">
      <div className="container">
        <div className="images">
          <div className="planet">
            <img src={image.mainImg} alt={PlanetName} />
            {activeImage === 2 && (
              <img src={image.hoverImg} alt="Internal" className="abs" />
            )}
            {activeImage === 3 && (
              <div className="container1">
                <div className="pointer"></div>
                <div className="circle-container">
                  <img src={image.thingyImg} alt="Surface" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="infoMain">
          <div>
            <p className="title">{PlanetName}</p>
            <p className="description">{PlanetDescription}</p>
            <div className="sources">
              <p>Source :</p>
              <a href={source} target="_blank">
                Wikipedia
              </a>
              <img src={extLink} alt="" />
            </div>
          </div>
          <div className="buttons">
            <button
              className={`button ${activeImage === 1 ? "active" : ""}`}
              onClick={() => setActiveImage(1)}
              style={activeImage === 1 ? activeStyle : {}}
            >
              <p className="inv">01</p>
              <p>OVERVIEW</p>
            </button>
            <button
              className={`button ${activeImage === 2 ? "active" : ""}`}
              onClick={() => setActiveImage(2)}
              style={activeImage === 2 ? activeStyle : {}}
            >
              <p className="inv">02</p>
              <p>INTERNAL STRUCTURE</p>
            </button>
            <button
              className={`button ${activeImage === 3 ? "active" : ""}`}
              onClick={() => setActiveImage(3)}
              style={activeImage === 3 ? activeStyle : {}}
            >
              <p className="inv">03</p>
              <p>SURFACE GEOLOGY</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
