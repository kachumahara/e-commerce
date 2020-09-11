import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="121212"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41CRnvYqmqL._AC_US218_.jpg"
            rating={5}
          />
          <Product
            id="131313"
            title="All-new Ring Video Doorbell 3 with Echo Show 5"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41p2nRhLMLL._AC_US218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="141414"
            title="All-new Ring Video Doorbell – 1080p HD video, improved motion detection, easy installation – Satin Nickel (2020 release)"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31wGhIej5hL._AC_US218_.jpg"
            rating={5}
          />
          <Product
            id="1515151"
            title="Ring Spotlight Cam Battery HD Security Camera with Built Two-Way Talk and a Siren Alarm, White, Works with Alexa"
            price={199.99}
            image="https://m.media-amazon.com/images/I/51YtTAuAqRL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="16161616"
            title="Echo Buds – Wireless earbuds with immersive sound, active noise reduction, and Alexa"
            price={129.99}
            image="https://m.media-amazon.com/images/I/515TyGkOTBL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="17171717"
            title="Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition"
            price={129.99}
            image="https://m.media-amazon.com/images/I/41ZoJhMEP7L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
