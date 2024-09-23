import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: 'url("./assets/images/footer-bg.png")' }}>
      <div className="container">
        <div className="section footer-top">

          <div className="footer-brand" data-reveal="bottom">
            <a href="#" className="logo">
              <img src="./assets/images/logo.svg" width="136" height="46" loading="lazy" alt="Doclab home" />
            </a>
            <ul className="contact-list has-after">
              <li className="contact-item">
                <div className="item-icon">
                  <ion-icon name="mail-open-outline"></ion-icon>
                </div>
                <div>
                  <p>
                    Main Email : <a href="mailto:contact@website.com" className="contact-link">contact@abcd;website.com</a>
                  </p>
                  <p>
                    Inquiries : <a href="mailto:Info@mail.com" className="contact-link">Info@mail.com</a>
                  </p>
                </div>
              </li>

              <li className="contact-item">
                <div className="item-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div>
                  <p>
                    Office Telephone : <a href="tel:0029129102320" className="contact-link">1234567890</a>
                  </p>
                  <p>
                    Mobile : <a href="tel:000232439493" className="contact-link">000 1234 5678</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-list" data-reveal="bottom">
            <p className="headline-sm footer-list-title">About Us</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <address className="address">
              <ion-icon name="map-outline"></ion-icon>
              <span className="text">
                Address <br />
                Address Address
              </span>
            </address>
          </div>

          <ul className="footer-list" data-reveal="bottom">
            <li>
              <p className="headline-sm footer-list-title">Services</p>
            </li>
            <li><a href="#" className="text footer-link">Conditions</a></li>
            <li><a href="#" className="text footer-link">Listing</a></li>
            <li><a href="#" className="text footer-link">How It Works</a></li>
            <li><a href="#" className="text footer-link">What We Offer</a></li>
            <li><a href="#" className="text footer-link">Latest News</a></li>
            <li><a href="#" className="text footer-link">Contact Us</a></li>
          </ul>

          <ul className="footer-list" data-reveal="bottom">
            <li>
              <p className="headline-sm footer-list-title">Useful Links</p>
            </li>
            <li><a href="#" className="text footer-link">Conditions</a></li>
            <li><a href="#" className="text footer-link">Terms of Use</a></li>
            <li><a href="#" className="text footer-link">Our Services</a></li>
            <li><a href="#" className="text footer-link">Join as a Doctor</a></li>
            <li><a href="#" className="text footer-link">New Guests List</a></li>
            <li><a href="#" className="text footer-link">The Team List</a></li>
          </ul>

          <div className="footer-list" data-reveal="bottom">
            <p className="headline-sm footer-list-title">Subscribe</p>
            <form action="" className="footer-form">
              <input type="email" name="email" placeholder="Email" className="input-field title-lg" />
              <button type="submit" className="btn has-before title-md">Subscribe</button>
            </form>
            <p className="text">
              Get the latest updates via email. Any time you may unsubscribe
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text copyright">
            &copy; AFM 2024 | All Rights Reserved by Aisha
          </p>
          <ul className="social-list">
            <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-google"></ion-icon></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-pinterest"></ion-icon></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
