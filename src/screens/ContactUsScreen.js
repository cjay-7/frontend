import React from "react";
import "../styles/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactUsScreen() {
  return (
    <section className="form-section">
      <div className="contactus-container flex">
        <div className="info-container flex">
          <h2>Contact Us</h2>
          <div className="info">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <a href="tel:+91 7021418483"> +91 7021418483 </a>
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <a
                href="mailto:admin@ruiafabrics.com"
                target="_blank"
                rel="noreferrer"
              >
                admin@ruiafabrics.com
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <a
                href="mailto:pan@ruiafabrics.com"
                target="_blank"
                rel="noreferrer"
              >
                pankaj@ruiafabrics.com
              </a>
            </div>
            <div className="flex align-items-center">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <p>
                187A-2, Shah & Nahar Ind. Estate, Lower Parel, Mumbai-400013,
                India
              </p>
            </div>
          </div>
          <div className="socials">
            <FontAwesomeIcon
              className="BannerBtnIcon"
              icon="fa-brands fa-facebook"
            />
            <FontAwesomeIcon
              className="BannerBtnIcon"
              icon="fa-brands fa-instagram"
            />
            <FontAwesomeIcon
              className="BannerBtnIcon"
              icon="fa-brands fa-twitter"
            />
            <FontAwesomeIcon
              className="BannerBtnIcon"
              icon="fa-brands fa-linkedin"
            />
          </div>
        </div>
        <div className="form-container">
          <h2>Let's get in touch!</h2>
          <form
            id="contact"
            action=""
          >
            <div className="group">
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="lname">Fabric</label>
              <input
                type="text"
                name="fabrics"
                id="fabrics"
                placeholder="Viscose, Velvet, Silk blend velvet, Nylon viscose velvet, Crepe,Cambric, Voile, Chiffon, Ecoterra, Georgette, European linen, FSC viscose, Sustainable Fabrics - BCI (Better Cotton Initiative) approved"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="youremail@domain.com"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 "
                required
              />
            </div>

            <input
              type="submit"
              className="btn"
              id="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
