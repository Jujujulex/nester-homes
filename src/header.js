import Logo from "./images/logo.png";
import Bbc from "./images/logo-bbc.png";
import Forbes from "./images/logo-forbes.png";
import Techcrunch from "./images/logo-techcrunch.png";
import Bi from "./images/logo-bi.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="nester logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom </h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={Bbc} alt="seen on logo 1" />
        <img src={Forbes} alt="seen on logo 2" />
        <img src={Techcrunch} alt="seen on logo 3" />
        <img src={Bi} alt="seen on logo 4" />
      </div>
    </div>
  );
}

export default Header;
