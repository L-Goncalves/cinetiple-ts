import background from "../../assets/images/fundo.png";

import { ProductDetailsAndPayment } from "../../components/Product";
import "./index.scss";
import { PackList } from "../../components/PackList";
import { Footer } from "../../components/Footer";

export default function SamplePack(): any {
  // authStore.login();

  // console.log(width)

  // console.log(authStore.currentUser.usuario);
  return (
    <>
      <div style={{ backgroundImage: `url('${background}')` }} />
      <div
        className="home-image"
        style={{ overflowX: "hidden", ...styles.image }}
      >
        <PackList />
        <Footer />
      </div>
    </>
  );
}

const styles = {
  image: {
    backgroundImage: `url('${background}'),linear-gradient(45deg, #0F0F1A 0.00%, #131326 100.00%)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  },

  container: {
    marginTop: 100,
    maxWidth: "50%",
  },
};
