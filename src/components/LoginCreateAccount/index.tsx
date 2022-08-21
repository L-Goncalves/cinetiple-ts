import { createPortal } from "react-dom";
import { Logo } from "../../assets/svg";
import { InputForm } from "../InputForm";
import "./index.scss";

function Modal({ open, onClose }) {
  return createPortal(
    <div className={open ? "modal-wrapper" : "modal-wrapper-closed"}>
      <div className={open ? "modal" : "modal-closed"}>
        {open ? (
          <>
            <div className="modal_login_container">
              <div className="title">
                <h1>Faça seu login</h1>
              </div>
              <div className="modal_login_body">
                <InputForm type={"email"} />
                <InputForm type={"password"} />
                <button className="modal_login_button" onClick={onClose}>
                  Continuar
                </button>
              </div>
              <div className="modal_login_footer">
                <p>Esqueceu a senha?</p>

                <p>Ainda não tem conta? Crie Agora!</p>
              </div>
            </div>

            <div className="modal_welcome">
              <button className="modal_welcome_close" onClick={onClose}>
                X
              </button>
              <h1>Bem vindo à </h1>
              <Logo width={270} height={100} />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
export default Modal;
