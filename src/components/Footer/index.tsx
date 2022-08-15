import "./index.scss";
import { Youtube, Twitter, Facebook, Instagram } from "../../assets/svg";

export const Footer = () => {
  return (
    <footer>
      <div>
        <img
          className="logo"
          alt="Cinetiple Logo"
          src={process.env.PUBLIC_URL + "/Logo.svg"}
        />
        <div className="links">
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
          <a>Contact Us</a>
          <a>About</a>
        </div>

        <div className="copyright">
          Copyright ©2008-2022. Netiple Ltda. Todos os direitos reservados.
        </div>
      </div>
      <div className="social">
        <p>Nos Siga!</p>

        <Twitter width={40} />
        <Youtube width={40} />
        <Instagram width={40} />
        <Facebook width={40} />
      </div>
    </footer>
  );
};
