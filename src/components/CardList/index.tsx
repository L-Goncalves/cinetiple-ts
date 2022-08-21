import { ArrowRight, ArrowLeft } from "@mui/icons-material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img from "../../assets/images/icesamplepack.png";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import "./index.scss";
import { Link } from "react-router-dom";

export const CardList = () => {
  return (
    <>
      <div className="cardlist_container">
        <div className="cardlist_container_title">
          <Typography gutterBottom variant="h4" component="div">
            Recomendados
          </Typography>
        </div>
        <div className="cardlist_actual_list">
          <ArrowLeft className="card_arrow" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <ArrowRight className="card_arrow" />
        </div>
        <div className="check_other_products"> 
        <Link to={`/samplepack`}> Ver outros produtos</Link></div>
      </div>
    </>
  );
};

export const Card = () => {
  return (
    <div className="card">
      <CardActionArea>
        <CardMedia component="img" image={img} alt="Ice Sample Pack" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ice Sample Pack
          </Typography>
          <Typography variant="body2">
            Ultrices fames tristique quis ipsum maecenas nam ipsum mi sit.
            Commodo, praesent quam volutpat lectus mauris senectus etiam lorem
            eu.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button className="card_add">Adicionar ao Carrinho</button>
      </CardActions>
    </div>
  );
};
