import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer () {
   
    const [fetchedGif, setFetchedGif] = useState([])
    
    function handleSubmit (e, typedSearch) {
        e.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${typedSearch}&api_key=b9PR4Gz99hOr6UBWbsuP0BjOn3yBCk86&rating=g`)
        .then((res) => res.json())
        .then((data) => setFetchedGif(data.data.slice(0, 3).map((gif) => gif.images.original.url)))
    }

    return (
        <>
            <GifSearch handleSubmit={handleSubmit}/>
            <GifList gifs={fetchedGif} />
        </>
    )
}

export default GifListContainer;

