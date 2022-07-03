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
        <p className="product_details_info_title">ICE</p>
        <p>Produtor: CInetiple</p>
        <br />
        <p>Descrição</p>
        <p>
          Ultrices fames tristique quis ipsum maecenas nam ipsum mi sit.
          Commodo, praesent quam volutpat lectus mauris senectus etiam lorem eu.
          Nec sollicitudin tincidunt tincidunt quis nibh sit. Semper in ac
          mollis posuere nulla. In vel, nam justo arcu cursus...Ler mais.
        </p>
        <div>
        <h1>Tags</h1>
        <Tags/>
        </div>
      </div>

      <div className="product_details_pricing">
        <p className="product_details_pricing_title">Á VISTA POR:</p>
        <h1 className="product_details_pricing_price">R$ 39,90</h1>
      
        <p>EM 6X R$ 6,65 SEM JUROS</p>
        <p>MÉTODOS DE PAGAMENTO</p>
        <button>Comprar</button>
        <p>Adicionar ao Carrinho</p>
      </div>
      </div>
   
     
    </div>

  );
};

export const Tags = () => {
   return (<div className="container">
 
    {['Cymbals','Kicks','Snares','Cymbals','Kicks','Snares','Cymbals','Kicks','Snares'].map(item => {
      return <div className="product_details_tags_card">{item}</div>
    })}

 </div>)
};
