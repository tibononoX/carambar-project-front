import React from "react";
import FooterBg from "@assets/footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-background" src={FooterBg} alt="Footer Logo" />
      <p>Test Technique WCS - CDA, Copyright © 2026 Carambar & Co</p>
    </footer>
  );
};

export default Footer;
