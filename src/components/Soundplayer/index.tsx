import { useState, useEffect } from "react";
import { Pause, Play } from "../../assets/svg";
import "./index.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const useMultiAudio = (urls) => {
  const audio = new Audio(require("../../assets/sound/test.wav"));
  const [duration, setDuration] = useState(0);
  const [players, setPlayers] = useState(
    urls.map((url: any) => {
      return {
        url,
        playing: false,
        duration: duration,
      };
    })
  );
  audio.preload = "metadata";

  const [sources] = useState(
    urls.map((url: any) => {
      return {
        url,
        audio: audio,
        duration: audio.duration,
      };
    })
  );

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });

      source.audio.addEventListener(
        "loadeddata",
        function getAudioDuration(this: any, event) {
          players[0].duration = duration;

          const newPlayers = players.map((player) => {
            player.duration = this.duration;

            return player;
          });

          newPlayers[i].playing = false;
          setPlayers(newPlayers);
          setDuration(this.duration);
        }
      );
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players, duration];
          newPlayers[i].playing = false;

          setPlayers(newPlayers);
        });

        source.audio.addEventListener(
          "loadeddata",
          function getAudioDuration(this: any, event) {
            setDuration(this.duration);
          }
        );
      });
    };
  });

  const toggle = (targetIndex) => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex((p) => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  console.log(players);

  return [players, toggle];
};

const MultiPlayer = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls);

  return (
    <div>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} />
      ))}
    </div>
  );
};

const Player = ({ player, toggle }) => (
  <div className="soundplayer">
    <div className="soundplayer_play" onClick={toggle}>
      {!player.playing ? <Play /> : <Pause />}
    </div>
    <div className="soundplayer_soundtrack">
      <p className="soundplayer_soundtrack_title">
        CNTPL - ambience riser terror.wav
      </p>
      <Slider
        defaultValue={0}
        step={1}
        trackStyle={styling.track}
        railStyle={styling.rail}
        handleStyle={styling.handleAndDot}
        activeDotStyle={styling.handleAndDot}
      />
    </div>
  </div>
);

const styling = {
  track: {
    background: "linear-gradient(45deg, #DD2630 0.02%, #D96221 100%)",
  },
  rail: {
    backgroundColor: "rgba(255, 255, 255, 0.20)",
  },
  handleAndDot: {
    background: "#D96221",
    border: 0,
  },
};

export default MultiPlayer;
