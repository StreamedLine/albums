import { useGetAlbums } from "../../Stores/useGetAlbums";
import "./albums.css";

export const Albums = ({artistName}) => {
    const albums = useGetAlbums(artistName);

    const results = `result${albums.results.length !== 1 ? 's' : ''}`

    return <>
        <div>{albums.results.length} {results} found for <b>{artistName}</b>.</div>
        
        <div className="albumsWrapper"> 
            {albums.results.map(album => 
                <div className="albumWrapper" key={album.collectionId}>
                    <h3>{album.collectionName}</h3>

                    <img src={album.artworkUrl100} className="albumImage"/>
                    
                    <div className="albumFooter">
                        <div>{album.artistName}</div> 
                        <div>{new Date(album.releaseDate).toDateString()}</div>
                    </div>
                </div>
            )}
        </div>
    </>
}