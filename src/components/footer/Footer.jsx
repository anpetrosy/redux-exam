import React from "react";
import "./Footer.scss";
import { CONFIG } from "../../config";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-info-head">
          {CONFIG.info.map(({ id, title, list }) => (
            <div className="footer-info-head-title">
              <h6 key={id}>{title}</h6>
              <div key={id} className="footer-info-head-card">
                {list.map(({ id, text }) => (
                  <p key={id}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-info-down">
          <div className="footer-info-down-copywrite">© APOLLONIAN, LLC</div>
          <div className="footer-info-down-navs">
            {CONFIG.footer.map(({ id, text }) => (
              <p key={id}>{text}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-signup">
        <div className="footer-signup-info">
          <h4>You can be one step ahead.</h4>
          <p>Sign up to hear about our updates on the dot.</p>
        </div>
        <div className="footer-signup-input">
          <input type="text" placeholder="Your email adress" />
          <button>SIGN UP</button>
        </div>
        <div className="footer-signup-icons">
          {CONFIG.icons.map(({ id, icon }) => (
            <img key={id} src={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
