import React, { useState } from "react";

function GifSearch ({ handleSubmit }) {

    const [typedSearch, setTypedSearch] = useState('')

    function handleChange (e) {
        setTypedSearch(e.target.value)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, typedSearch)}>
            <label>Search GIF:</label>
            <input type="text" id="search-box" value={typedSearch} onChange={handleChange}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default GifSearch;