import { useState } from "react";

export const Search = ({setArtistName}) => {
    const [term, setTerm] = useState("");

    const onSearchFormSubmit = e => {
        e.preventDefault();
        setArtistName(term)
    }

    return <>
        <form onSubmit={onSearchFormSubmit}>
            <input onChange={e => setTerm(e.currentTarget.value)}/> <button type="submit">Search</button>
        </form>
    </>
}