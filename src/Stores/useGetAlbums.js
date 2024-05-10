import { useState, useEffect } from "react";

export const useGetAlbums = (artistName) => {
    const [albums, setAlbums] = useState({results: []});

    useEffect(()=>{
        const urlArtistName = artistName.replaceAll(" ", "+");
    
        fetch(`https://itunes.apple.com/search?term=${urlArtistName}&entity=album`)
        .then(res => res.json())
        .then(data => setAlbums(data));
    }, [artistName]);

    return albums;
}