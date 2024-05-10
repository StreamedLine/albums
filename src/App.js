import { useState } from "react";
import { DEFAULT_ARTIST } from "./constants";
import { Search } from "./Components/Search/Search";
import { Albums } from "./Components/Albums/Albums";

function App() {
  const [artistName, setArtistName] = useState(DEFAULT_ARTIST)

  return <>
    <Search setArtistName={setArtistName}/>
    <Albums artistName={artistName} />
  </>;
}

export default App;
