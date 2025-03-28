import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import menuIcon from "../../imgs/Group.png";
import arrow from "../../imgs/Path 3.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);
    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
      if (!event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="Title">
            <p>THE PLANETS</p>
          </div>
          <div className="desktop-menu">
            <ul>
              <li>
                <Link to="/mercury">MERCURY</Link>
              </li>
              <li>
                <Link to="/venus">VENUS</Link>
              </li>
              <li>
                <Link to="/">EARTH</Link>
              </li>
              <li>
                <Link to="/mars">MARS</Link>
              </li>
              <li>
                <Link to="/jupiter">JUPITER</Link>
              </li>
              <li>
                <Link to="/saturn">SATURN</Link>
              </li>
              <li>
                <Link to="/uranus">URANUS</Link>
              </li>
              <li>
                <Link to="/neptune">NEPTUNE</Link>
              </li>
            </ul>
          </div>
          <div className="menu-button" onClick={toggleMenu}>
            <img src={menuIcon} alt="Menu" />
          </div>
        </nav>
      </header>
      {isMenuOpen && isMobile && (
        <div className="mobile-menu">
          <ul>
            <li>
              <div>
                <div className="circle mercury"></div>
                <Link to="/mercury" onClick={toggleMenu}>
                  MERCURY
                </Link>
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </li>
            <li>
              <div>
                <div className="circle venus"></div>
                <Link to="/venus" onClick={toggleMenu}>
                  VENUS
                </Link>
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </li>
            <li>
              <div>
                <div className="circle earth"></div>
                <Link to="/" onClick={toggleMenu}>
                  EARTH
                </Link>
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </li>
            <li>
              <div>
                <div className="circle mars"></div>
                <Link to="/mars" onClick={toggleMenu}>
                  MARS
                </Link>
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </li>
            <li>
              <div>
                <div className="circle jupiter"></div>
                <Link to="/jupiter" onClick={toggleMenu}>
                  JUPITER
                </Link>
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </li>
            <li>
              <div>
                <div className="circle saturn"></div>
                <Link to="/saturn" onClick={toggleMenu}>
                  SATURN
                </Link>
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </li>
            <li>
              <div>
                <div className="circle uranus"></div>
                <Link to="/uranus" onClick={toggleMenu}>
                  URANUS
                </Link>
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </li>
            <li>
              <div>
                <div className="circle neptune"></div>
                <Link to="/neptune" onClick={toggleMenu}>
                  NEPTUNE
                </Link>
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
