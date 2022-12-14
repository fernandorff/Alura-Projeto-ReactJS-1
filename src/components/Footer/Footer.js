import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-site">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/images/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/images/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/images/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="" />
      </section>
      <section>
        <p>Developed by <a href="https://www.linkedin.com/in/fernandorff/">Fernando Rocha</a>.</p>
      </section>
    </footer>
  );
};

export default Footer;
