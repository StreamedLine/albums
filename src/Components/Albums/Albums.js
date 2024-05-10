import { useGetAlbums } from "../../Stores/useGetAlbums";

export const Albums = ({artistName}) => {
    const albums = useGetAlbums(artistName);

    if (!albums.results.length) {
        return null;
    }

    return <div>
        {albums.results.map(album => 
            <>
                <div>AlbumName: {album.collectionName}</div>
                <div>ArtistName: {album.artistName}</div>
                <div>ArtistName: <img src={album.artworkUrl60} /></div>
                <div>ArtistName: {album.releaseDate}</div>
            </>
        )}
    </div>
}