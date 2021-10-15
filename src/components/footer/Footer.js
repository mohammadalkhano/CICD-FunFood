import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export const Footer =() => {
  return (
    <div classname="Social-Media">
      <h5> @FunFood </h5>
      <FontAwesomeIcon icon={faTwitter} size="2x" />
      <FontAwesomeIcon icon={faInstagram} size="2x" />
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </div>
  );
}

