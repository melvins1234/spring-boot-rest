import { FooterNav } from "./FooterNav";
import "./Footer.scss";
import "./FooterMedia.scss";

export const Footer = (key) => {
  return (
    <footer key={key} className="footer">
      <div className="footer__top-outer-container">
        <div className="footer__top wrapper">
          <div className="footer__top--brand-description">
            <h3 className="footer__top--title">RAKUTECH</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </span>
          </div>
          <div className="footer__top--social-media">
            <h5 className="footer--heading">Follow Us</h5>
            <span>
              Totam ullam reiciendis corrupti libero placeat aut. Earum quis
              expedita.
            </span>
            <div>
              <i className="fab fa-facebook-f"></i>{" "}
              <i className="fab fa-twitter"></i>
            </div>
          </div>
          <div className="footer__top--contact-us">
            <h5 className="footer--heading">Contact Us</h5>
            <span>
              My Company, 4578 Marmora Road, Glasgow
              <br />
              D04 89GR
              <br />
              Call us now: 0123-456-789
              <br />
              Email: support@whatever.com
            </span>
          </div>
        </div>
      </div>
      <div className="footer__middle wrapper">
        <FooterNav
          title="Information"
          nav={[
            "About Us",
            "Information",
            "Privacy Policy",
            `Terms & Conditions`,
          ]}
        />
        <FooterNav
          title="Service"
          nav={[
            "About Us",
            "Information",
            "Privacy Policy",
            `Terms & Conditions`,
          ]}
        />
        <FooterNav
          title="Extras"
          nav={[
            "About Us",
            "Information",
            "Privacy Policy",
            `Terms & Conditions`,
          ]}
        />
        <FooterNav
          title="My Account"
          nav={[
            "About Us",
            "Information",
            "Privacy Policy",
            `Terms & Conditions`,
          ]}
        />
        <FooterNav
          title="Useful Links"
          nav={[
            "About Us",
            "Information",
            "Privacy Policy",
            `Terms & Conditions`,
          ]}
        />
        <FooterNav
          title="Our Offers"
          nav={[
            "About Us",
            "Information",
            "Privacy Policy",
            `Terms & Conditions`,
          ]}
        />
      </div>
      <div className="footer__bottom-outer-container">
        <div className="footer__bottom wrapper">
          <span>© 2018 Ecommerce theme by www.bisenbaev.com</span>
          <div className="footer__bottom--fund-transfers">
            <img src="images/Western-union.png" alt="Sample" />
            <img src="images/MasterCard.png" alt="Sample" />
            <img src="images/Paypal.png" alt="Sample" />
            <img src="images/visa.jpg" alt="Sample" />
          </div>
        </div>
      </div>
    </footer>
  );
};
