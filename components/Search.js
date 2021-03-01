import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const Search = () => {
    const [search, setSearch] = useState("");
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = async () => {
        console.log(search);
        try {
            const result = await axios(`https://api.github.com/users/${search}/repos`);
            setRepos(result);
        } catch (err) {
            console.log(err);
        }
    };

    // console.log(repos);
    return (
        <>
        <div>
            <input type="text" placeholder="username" value={search} onChange={handleChange} />
            <button onClick={handleClick} >Search</button>
        </div>
        <Results repos={repos}/>
        </>
    );
};

export default Search;