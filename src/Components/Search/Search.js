import { useState } from "react";
import "./search.css";

export const Search = ({setArtistName}) => {
    const [term, setTerm] = useState("");

    const onSearchFormSubmit = e => {
        e.preventDefault();
        setArtistName(term)
    }

    return <div className="searchWrapper">
        <form onSubmit={onSearchFormSubmit}>
            <input onChange={e => setTerm(e.currentTarget.value)} className="searchInput" /> 
            <input type="submit" value="Search" className="searchButton" />
        </form>
    </div>
}