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
          <a rel="noreferrer" href="https://www.twitter.com">Terms of Service</a>
          <a rel="noreferrer" href="https://www.twitter.com">Privacy Policy</a>
          <a rel="noreferrer" href="https://www.twitter.com">Contact Us</a>
          <a rel="noreferrer" href="https://www.twitter.com">About</a>
        </div>

        <div className="copyright">
          Copyright ©2008-2022. Netiple Ltda. Todos os direitos reservados.
        </div>
      </div>
      <div className="social">
        <p>Nos Siga!</p>

        <a target="_blank" rel="noreferrer" href="https://www.twitter.com">
        <Twitter width={40} />
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
        <Youtube width={40} />
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cinetiple">
        <Instagram width={40} />
        </a>
        
        <a  target="_blank" rel="noreferrer" href="https://www.facebook.com"> 
        <Facebook width={40} />
        </a>
       
      </div>
    </footer>
  );
};
