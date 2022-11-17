import "./App.scss";
// Image Import
import logo from "./Assets/interface/music-note.png";
import home from "./Assets/interface/home.png";
import trend from "./Assets/interface/trending-topic.png";
import library from "./Assets/interface/library.png";
import calendar from "./Assets/interface/calendar.png";
import disk from "./Assets/interface/compact-disk.png";
import note from "./Assets/interface/note.png";
import love from './Assets/interface/love.png'
import artist from './Assets/interface/verified-account.png'
import playlist from './Assets/interface/playlist.png'
// Ends

// Import Component
import Home from "./Component/Main/Home.js";

function App() {
  return (
    //App
    <div className="App-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="logo">
          <img src={logo} alt="" />
          <a href="#">
            H-<span>Music</span>
          </a>
        </div>
        {/* Top Nav */}
        <div className="top-nav">
          <div className="main-station home-btn">
            <img src={home} /> Home
          </div>
          <div className="main-station trend-btn">
            <div className="btn-top-sct">
              <img src={trend} alt="" /> Trend
            </div>
          </div>
          <div className="main-station library-btn">
            <div className="btn-top-sct">
              <img src={library} alt="" /> Library
            </div>
          </div>
        </div>
        <p className="small-text">Discovery</p>
        {/* Middle Nav */}
        <div className="middle-nav">
          <div className="main-station discoveryweekly-btn">
            <div className="btn-top-sct">
              <img src={calendar} alt="" /> Discover Weekly
            </div>
          </div>
          <div className="main-station foryou-btn">
            <div className="btn-top-sct">
              <img src={disk} alt="" /> Made For You
            </div>
          </div>
          <div className="main-station dailymix-btn">
            <div className="btn-top-sct">
              <img src={note} alt="" /> Daily Mix
            </div>
          </div>
        </div>
        <p className="small-text">Your Collection</p>
        <div className="bottom-nav">
          <div className="main-station liked-btn">
            <div className="btn-top-sct">
              <img src={love} alt="" /> Liked Songs
            </div>
          </div>
          <div className="main-station favorite-btn">
            <div className="btn-top-sct">
              <img src={artist} alt="" /> Favorite Artist
            </div>
          </div>
          <div className="main-station playlist-btn">
            <div className="btn-top-sct">
              <img src={playlist} alt="" /> Playlist
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Ends */}

      {/* Main (Change Every Sidebar navigation clicked) */}

      <div className="container-main">
        <Home />
      </div>

      {/* Main Ends */}

      {/* User Interface */}
      <div className="user-interface">
        <h3>User interface</h3>
      </div>
      {/* User Interface Ends */}
    </div>
  );
}

export default App;
