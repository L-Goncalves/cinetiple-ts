import { ArrowRight} from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import img from '../../assets/images/icesamplepack.png'
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.scss'


export const CardList = () => {
  return (
    <>

    <div className='cardlist_container'>
      <div className='cardlist_container_title'>
        <Typography gutterBottom variant="h5" component="div">
          Recomendados
        </Typography>
      </div>
       <div className='cardlist_actual_list'>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
       </div>
    
    </div>
    <ArrowRight/>
    </>
    ) 
}

 export const CardComponent = () => {
  return (
    <Card sx={{ maxWidth: '20%' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        image={img}
        alt="Ice Sample Pack"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ice Sample Pack
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ultrices fames tristique quis ipsum maecenas nam ipsum mi sit. Commodo, praesent quam volutpat lectus mauris senectus etiam lorem eu. 
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Adicionar ao Carrinho
      </Button>
    </CardActions>
  </Card>
     
  
  
  )
   
}




