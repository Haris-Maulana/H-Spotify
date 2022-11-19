import { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
    const [tracks, setTracks] = useState([])
    const [onPlay, setOnPlay] = useState([])

    
    

    useEffect (()=>{

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '14f40359d2msh28143880a2e9bd2p16da5djsn567556c91318',
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
      };
      
      fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    },[])

  return (
    <div className="main-container">
      <header>
        <div className="header-cover">
          <h1>TOP 20# POPULAR SONG</h1>
        </div>
      </header>
      <main>
        <div className="track-container">
          <div className="title-container">
            <div className="titleNum">#</div>
            <div className="titleTracks">Title</div>
            <div className="titlePlay">Playing</div>
            <div className="titleDuration">Time</div>
            <div className="titleAlbum">Album</div>
          </div>
        </div>
        <div className="listTrack">
          <div className="trackNum">1</div>
          <div className="trackTracks">Unholy</div>
          <div className="trackPlay">4.231.512</div>
          <div className="trackDuration">3:12</div>
          <div className="trackAlbum">Best</div>
        </div>
        <audio controls>
          <source src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/2c/82/3c2c8235-9907-0405-b21c-8fd66d285e56/mzaf_6122099414111658029.plus.aac.ep.m4a" type="m4a" />
        </audio>
      </main>
    </div>
  );
};

export default Home;
