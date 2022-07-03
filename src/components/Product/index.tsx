import "./index.scss";

export const Product = () => {
  return (
    <div className="product">
      <img
        className="product_image"
        alt="icesamplepack"
        src={process.env.PUBLIC_URL + "/icesamplepack.png"}
      />

      <div className="product_info">
        <p className="product_info_title">ICE</p>
        <p>Produtor: CInetiple</p>
        <br />
        <p>Descrição</p>
        <p>
          Ultrices fames tristique quis ipsum maecenas nam ipsum mi sit.
          Commodo, praesent quam volutpat lectus mauris senectus etiam lorem eu.
          Nec sollicitudin tincidunt tincidunt quis nibh sit. Semper in ac
          mollis posuere nulla. In vel, nam justo arcu cursus...Ler mais.
        </p>
      </div>

      <div className="product_pricing">
        <p className="product_info_title">Á VISTA POR:</p>
        <p>R$ 39,90</p>
        <br />
        <p>EM 6X R$ 6,65 SEM JUROS</p>
        <p>
          MÉTODOS DE PAGAMENTO
        </p>
        <button>Comprar</button>
        <p>Adicionar ao Carrinho</p>
      </div>

    </div>
  );
};

