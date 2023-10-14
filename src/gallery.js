import Gal1 from "./images/gal-1.jpeg";
import Gal2 from "./images/gal-2.jpeg";
import Gal3 from "./images/gal-3.jpeg";
import Gal4 from "./images/gal-4.jpeg";
import Gal5 from "./images/gal-5.jpeg";
import Gal6 from "./images/gal-6.jpeg";
import Gal7 from "./images/gal-7.jpeg";
import Gal8 from "./images/gal-8.jpeg";
import Gal9 from "./images/gal-9.jpeg";
import Gal10 from "./images/gal-10.jpeg";
import Gal11 from "./images/gal-11.jpeg";
import Gal12 from "./images/gal-12.jpeg";
import Gal13 from "./images/gal-13.jpeg";
import Gal14 from "./images/gal-14.jpeg";

function Gallery() {
  return (
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={Gal1} alt="gallery img 1" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--2">
        <img src={Gal2} alt="gallery img 2" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--3">
        <img src={Gal3} alt="gallery img 3" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--4">
        <img src={Gal4} alt="gallery img 4" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--5">
        <img src={Gal5} alt="gallery img 5" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--6">
        <img src={Gal6} alt="gallery img 6" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--7">
        <img src={Gal7} alt="gallery img 7" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--8">
        <img src={Gal8} alt="gallery img 8" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--9">
        <img src={Gal9} alt="gallery img 9 " className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--10">
        <img src={Gal10} alt="gallery img 10" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--11">
        <img src={Gal11} alt="gallery img 11" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--12">
        <img src={Gal12} alt="gallery img 12" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--13">
        <img src={Gal13} alt="gallery img 13" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--14">
        <img src={Gal14} alt="gallery img 14" className="gallery__img" />
      </figure>
    </div>
  );
}

export default Gallery;
