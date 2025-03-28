import { Planet } from "../../types";
import "./style.scss";

const Bottom = ({ PlanetCharacteristics }: Planet) => {
  return (
    <>
      <div className="BottomMain">
        <div className="BottomContainer">
          <div>
            <p className="name">ROTATION TIME</p>
            <p className="value">{PlanetCharacteristics.rotation}</p>
          </div>
          <div>
            <p className="name">REVOLUTION TIME</p>
            <p className="value">{PlanetCharacteristics.revolution}</p>
          </div>
          <div>
            <p className="name">RADIUS</p>
            <p className="value">{PlanetCharacteristics.radious}</p>
          </div>
          <div>
            <p className="name">AVERAGE TEMP.</p>
            <p className="value">{PlanetCharacteristics.avrgtemp}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
