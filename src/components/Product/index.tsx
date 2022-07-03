import "./index.scss";

export const ProductDetailsAndPayment = () => {
  return (
    <div className="product_details">
      <img
        className="product_details_image"
        alt="icesamplepack"
        src={process.env.PUBLIC_URL + "/icesamplepack.png"}
      />

      <div className="product_details_container">
        <div className="product_details_info">
          <ProductDetails />
          <Tags />
          <Details/>
        </div>
        <div className="product_details_pricing">
          <PricingDetails />
          <AdditionalDetails/>
        </div>
      </div>
    </div>
  );
};

export const Tags = () => {
  return (
    <>
      <h2>Tags</h2>

      <div className="container">
        {[
          "Cymbals",
          "Kicks",
          "Snares",
          "Cymbals",
          "Kicks",
          "Snares",
          "Cymbals",
          "Kicks",
          "Snares",
        ].map((item) => {
          return <div className="product_details_tags_card">{item}</div>;
        })}
      </div>
    </>
  );
};

const ProductDetails = () => {
  return (
    <>
      <p className="product_details_info_title">ICE</p>
      <p>Produtor: CInetiple</p>
      <br />
      <p>Descrição</p>
      <p>
        Ultrices fames tristique quis ipsum maecenas nam ipsum mi sit. Commodo,
        praesent quam volutpat lectus mauris senectus etiam lorem eu. Nec
        sollicitudin tincidunt tincidunt quis nibh sit. Semper in ac mollis
        posuere nulla. In vel, nam justo arcu cursus...Ler mais.
      </p>
    </>
  );
};

const PricingDetails = () => {
  return (
    <>
      <p className="product_details_pricing_title">Á VISTA POR:</p>
      <h1 className="product_details_pricing_price">R$ 39,90</h1>

      <p>EM 6X R$ 6,65 SEM JUROS</p>
      <p>MÉTODOS DE PAGAMENTO</p>
      <button>Comprar</button>
      <p>Adicionar ao Carrinho</p>
    </>
  );
};


const Details = () => {
  return <div className="details">
    
    
    <p className="details_title"> Caracteristicas</p>
    <p className="details_subtitle">Tamanho</p>
    <p>124MB</p>

    <p className="details_subtitle">Número de Samples</p>
    <p>1.256</p>
    <p className="details_subtitle">Formatos de Arquivo</p>
    <p>.wav/.mp3/.midi</p>
  </div>
}

const AdditionalDetails = () => {
  return <div className="details_rightside">
    
  <p className="details_subtitle">Categoria</p>
  <p>Sample Pack</p>

  <p className="details_subtitle">Gênero</p>
  <p>Ambience</p>
  <p className="details_subtitle">Licença</p>
  <p>Sem direitos autorais</p>
</div>
}