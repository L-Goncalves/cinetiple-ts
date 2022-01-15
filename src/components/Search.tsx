import * as React from "react";
import { List, TextField } from "@mui/material";

import { makeStyles } from "@mui/styles";

export default function Search() {
  const useStyles = makeStyles({
    root: {}, // uma regra de estilo
    drawer: { borderRight: "0" }, // uma regra de estilo aninhada
  
  });

  const [value, setValue] = React.useState('Pesquisar');
  const [valueNotPesquisar, SetNotPesquisar] = React.useState(false)

  console.log(valueNotPesquisar)
  const classes = useStyles();

  return (
    <>
      <div style={{ display: "inline", width: 200 }}>
        <input type={'text'} className='search' onFocus={() =>{
            setValue('')
            SetNotPesquisar(true)
        }} onChange={ (e) => {
            console.log(e)
            setValue(e.target.value)
            SetNotPesquisar(true)
        }} 
        value={value} 
        placeholder={`${value}`}
        style={ valueNotPesquisar? {...styles.input}: {...styles.inputPlaceholder}}/>
      </div>
    </>
  );
}

const styles: any = {
    input: {
        
        background: "linear-gradient(45deg,rgba(221, 38, 48, 0.1) 0.02%, rgba(217, 98, 33, 0.1) 100%)",
        height: 30,
        opacity: 1,
        borderRadius: 5,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginRight: 200,
        border: '0px',
        backdropFilter: "blur(25px)",
        fontFamily: 'Roboto',
        padding: '5px',
        color: "#CCC",
      },
      inputPlaceholder: {
        background: "linear-gradient(45deg,rgba(221, 38, 48, 0.15) 0.02%, rgba(217, 98, 33, 0.15) 100%)",
        height: 30,
        opacity: 1,
        backdropFilter: "blur(25px)",
        borderRadius: '4px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginRight: 200,
        padding: '5px',
        fontWeight: 'normal',
        fontFamily: 'Roboto',
        border: '0px solid red',
        color: "rgba(204, 204, 204, 1)",
      }
};
