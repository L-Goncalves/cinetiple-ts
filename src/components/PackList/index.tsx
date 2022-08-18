import CardContent from "@mui/material/CardContent";
import img from "../../assets/images/icesamplepack.png";
import Typography from "@mui/material/Typography";
import { CardActionArea, Pagination } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./index.scss";
import ReactPaginate from "react-paginate";

export const PackList = () => {
  const history = useHistory();

  const handlePackSelected = () => {
    history.push("/samplepack/8129739812");
  };
  return (
    <>
      <div className="packlist_container">
        {[1,2,3,4,5,6,7,8,9,10].map((item) => {
          return <Card onClick={handlePackSelected} />
        })}
      </div>
    </>
  );
};

export const Card = ({ onClick }) => {
  return (
    <CardActionArea onClick={onClick}>
      <div className="packcard">
        <img src={img} height={150} alt="Ice Sample Pack" />
        <CardContent>
          <p className="packcard_author">Author</p>
          <Typography gutterBottom variant="h5" component="div">
            Ice Sample Pack
          </Typography>
          <Typography variant="body2">
            Ultrices fames tristique quis ipsum maecenas nam ipsum mi sit.
            Commodo, praesent quam volutpat lectus mauris senectus etiam lorem
            eu.
          </Typography>
        </CardContent>
      </div>
    </CardActionArea>
  );
};
