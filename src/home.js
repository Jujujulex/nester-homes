import House1 from "./images/house-1.jpeg";
import House2 from "./images/house-2.jpeg";
import House3 from "./images/house-3.jpeg";
import House4 from "./images/house-4.jpeg";
import House5 from "./images/house-5.jpeg";
import House6 from "./images/house-6.jpeg";
import Svg from "./images/sprite.svg";

function Home() {
  return (
    <div className="homes">
      <div className="home">
        <img src={House1} alt="house 1" className="home__img" />

        <svg className="home__like">
          <use xlinkHref={`${Svg}#icon-heart-full`}></use>
        </svg>

        <h5 className="home__name">Beautiful Family House</h5>

        <div className="home__location">
          <svg>
            <use xlinkHref={`${Svg}#icon-map-pin`}></use>
          </svg>
          <p>USA</p>
        </div>

        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${Svg}#icon-profile-male`}></use>
          </svg>
          <p>5 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <use xlinkHref={`${Svg}#icon-expand`}></use>
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <use xlinkHref={`${Svg}#icon-key`}></use>
          </svg>
          <p>$1,200,000</p>
        </div>

        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House2} alt="house 2" className="home__img" />

        <svg className="home__like">
          <use xlinkHref={`${Svg}#icon-heart-full`}></use>
        </svg>

        <h5 className="home__name">Modern Glass Villa</h5>

        <div className="home__location">
          <svg>
            <use xlinkHref={`${Svg}#icon-map-pin`}></use>
          </svg>
          <p>Canada</p>
        </div>

        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${Svg}#icon-profile-male`}></use>
          </svg>
          <p>6 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <use xlinkHref={`${Svg}#icon-expand`}></use>
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <use xlinkHref={`${Svg}#icon-key`}></use>
          </svg>
          <p>$2,750,000</p>
        </div>

        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House3} alt="house 3" className="home__img" />

        <svg className="home__like">
          <use xlinkHref={`${Svg}#icon-heart-full`}></use>
        </svg>

        <h5 className="home__name">Cozy Country House</h5>

        <div className="home__location">
          <svg>
            <use xlinkHref={`${Svg}#icon-map-pin`}></use>
          </svg>
          <p>UK</p>
        </div>

        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${Svg}#icon-profile-male`}></use>
          </svg>
          <p>4 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <use xlinkHref={`${Svg}#icon-expand`}></use>
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <use xlinkHref={`${Svg}#icon-key`}></use>
          </svg>
          <p>$850,000</p>
        </div>

        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House4} alt="house 4" className="home__img" />

        <svg className="home__like">
          <use xlinkHref={`${Svg}#icon-heart-full`}></use>
        </svg>

        <h5 className="home__name">Large Rustical Villa</h5>

        <div className="home__location">
          <svg>
            <use xlinkHref={`${Svg}#icon-map-pin`}></use>
          </svg>
          <p>Portugal</p>
        </div>

        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${Svg}#icon-profile-male`}></use>
          </svg>
          <p>6 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <use xlinkHref={`${Svg}#icon-expand`}></use>
          </svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <use xlinkHref={`${Svg}#icon-key`}></use>
          </svg>
          <p>$1,950,000</p>
        </div>

        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House5} alt="house 5" className="home__img" />

        <svg className="home__like">
          <use xlinkHref={`${Svg}#icon-heart-full`}></use>
        </svg>

        <h5 className="home__name">Majestic Palace House</h5>

        <div className="home__location">
          <svg>
            <use xlinkHref={`${Svg}#icon-map-pin`}></use>
          </svg>
          <p>Germany</p>
        </div>

        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${Svg}#icon-profile-male`}></use>
          </svg>
          <p>18 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <use xlinkHref={`${Svg}#icon-expand`}></use>
          </svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <use xlinkHref={`${Svg}#icon-key`}></use>
          </svg>
          <p>$9,500,000</p>
        </div>

        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={House6} alt="house 6" className="home__img" />

        <svg className="home__like">
          <use xlinkHref={`${Svg}#icon-heart-full`}></use>
        </svg>

        <h5 className="home__name">Modern Familiy Apartment</h5>

        <div className="home__location">
          <svg>
            <use xlinkHref={`${Svg}#icon-map-pin`}></use>
          </svg>
          <p>Italy</p>
        </div>

        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${Svg}#icon-profile-male`}></use>
          </svg>
          <p>3 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <use xlinkHref={`${Svg}#icon-expand`}></use>
          </svg>
          <p>
            180 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <use xlinkHref={`${Svg}#icon-key`}></use>
          </svg>
          <p>$600,000</p>
        </div>

        <button className="btn home__btn">Contact realtor</button>
      </div>
    </div>
  );
}

export default Home;
