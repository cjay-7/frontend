import React from "react";
import "../styles/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactUsScreen() {
  return (
    <section class="form-section">
      <div class="contactus-container flex">
        <div class="info-container flex">
          <h2>Contact Us!</h2>
          <div class="info">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <a href="tel:+91 "> Phone </a>
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <a
                href="mailto:"
                target="_blank"
                rel="noreferrer"
              >
                E mail
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <span>Address</span>
            </div>
          </div>
          <div class="socials">
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
        <div class="form-container">
          <h2>
            Let's get in touch!
            <FontAwesomeIcon icon="fa-solid fa-arrow-trend-up"></FontAwesomeIcon>
          </h2>
          <form
            id="contact"
            action=""
          >
            <div class="group">
              <label for="fname">Full Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="group">
              <label for="lname">Fabric</label>
              <input
                type="text"
                name="fabrics"
                id="fabrics"
                placeholder="Viscose, Velvet, Silk blend velvet, Nylon viscose velvet, Crepe,Cambric, Voile, Chiffon, Ecoterra, Georgette, European linen, FSC viscose, Sustainable Fabrics - BCI (Better Cotton Initiative) approved"
                required
              />
            </div>
            <div class="group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="youremail@domain.com"
                required
              />
            </div>
            <div class="group">
              <label for="phone">Phone</label>
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
              class="btn"
              id="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
