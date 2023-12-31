import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
}
