import { useState } from "react";
import "./index.scss";
import { Play, Pause} from '../../assets/svg/index'
import ReactAudioPlayer from 'react-audio-player';
//...

export const Soundplayer = () => {


    
    const [play, setPlay] = useState(false)
  //   const [position, setPosition] = useState(x)
    const handlePlayer = () => {
        setPlay(!play)
       
        if(play){
            
        }
    }


    return (
    <>
    <div className="soundplayer">
        <div className="soundplayer_play" onClick={handlePlayer}>
            {!play?<Play/>: <Pause/>}
                   
        </div>
        <div className="soundplayer_soundtrack">
            <p className="soundplayer_soundtrack_title">
            CNTPL - ambience riser terror.wav
            </p>


     
            <div className="soundplayer_soundtrack_trackempty"/>
            <div className="soundplayer_soundtrack_trackfilled"/>

            <div className="soundplayer_soundtrack_trackslider"/>
          
        </div>
          
    </div>
    
    </>)
}


