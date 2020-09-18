import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <Link to="/">
      <div>
        <img
          className="footer__image"
          src="https://onextrapixel.com/wp-content/uploads/2018/01/02-amazon-footer.jpg"
          alt=""
        />
      </div>
    </Link>
  );
}

export default Footer;
