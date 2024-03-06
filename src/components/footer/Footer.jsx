import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-medai-text">Follow us on social media</div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "blue" }} className="bi bi-telegram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">Blog</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Tunis - Ariana
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
             +216 54604022
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              hadjsalemramzi24@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            La Store Book Application est une plateforme interactive et moderne,
            développée avec React, qui permet aux utilisateurs de découvrir,
            acheter et gérer leurs livres préférés.
            L'application offre une expérience utilisateur fluide et rapide grâce à l'utilisation de composants réactifs,
            d'une gestion d'état efficace et d'une interface utilisateur intuitive.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
