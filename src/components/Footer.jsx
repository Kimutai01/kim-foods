import React from "react";
import logos from "../images/logo3.png";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
function Footer() {
  return (
    <footer>
      <div>
        <img src={logos} alt="logo" />
      </div>
      <div className="links-to-cakes">
        <a href="#classic-cakes-div">Classic Cakes</a>
        <a href="#fruity-cakes-div">Fruity Cakes</a>
        <a href="#chocolate-cakes-div">Chocolate Cakes</a>
        <a href="#forests-cakes-div">Forest Cakes</a>
      </div>
      <div className="social-media-icons">
        <a rel="noopener noreferrer" href="tel:0790841979">
          <FiPhoneCall /> 0790841979{" "}
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Kimutai_01"
        >
          <AiOutlineTwitter /> Kimutai_01{" "}
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/k.i.m.u.t.a.i?igshid=YmMyMTA2M2Y="
        >
          <AiOutlineInstagram /> k.i.m.u.t.a.i{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: kiprotichkimutai01@gmail.com"
        >
          <HiOutlineMailOpen /> kiprotichkimutai01@gmail.com
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/254796230862 "
        >
          <FaWhatsapp /> 0790841979
        </a>
      </div>
    </footer>
  );
}

export default Footer;
