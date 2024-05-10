import { useState } from "react";
import { DEFAULT_ARTIST } from "./constants";
import { Search } from "./Components/Search/Search";
import { Albums } from "./Components/Albums/Albums";
import "./app.css";

function App() {
  const [artistName, setArtistName] = useState(DEFAULT_ARTIST)

  return <div className="mainWrapper">
    <Search setArtistName={setArtistName}/>
    <Albums artistName={artistName} />
  </div>;
}

export default App;
