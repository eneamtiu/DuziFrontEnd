import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapPin,
  faEnvelope,
  faPhoneAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faTwitter,
  faYoutube,
  faMapPin,
  faEnvelope,
  faPhoneAlt,
  faArrowRight
);

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>eLearning</h3>
                <p>
                  Orșova Street, nr. 104 <br />
                  Orșova, MH 123432 <br />
                  România <br />
                  <br />
                  <strong>Phone:</strong> +40 123 456 789
                  <br />
                  <strong>Email:</strong> office@schoolsystem.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Main subjects</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Hystory</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">IT</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Mathematics</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Astronomy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Geography</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Physics</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Social Media</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">YouTube</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-5 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="/" className="back-to-top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
      <div id="preloader"></div>
    </>
  );
};

export default Footer;
