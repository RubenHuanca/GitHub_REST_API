import React from "react";

const Results = (props) => {
    const {repos} = props;
    // console.log("repos are: ", repos);
    console.log("repos are: ", repos.data);

    // const listRepos = repos.length !== 0 ? (repos.data.slice(0, 5).map((item) => <li key={item.id}><a href={item.html_url}>{item.name}</a></li>)) : (<li>I couldn’t find any repositories</li>);
    const listRepos = repos.length !== 0 ? (repos.data.map((item) => <li key={item.id}><a href={item.html_url}>{item.name}</a></li>)) : (<li>I couldn’t find any repositories</li>);
    return <ul>{listRepos}</ul>;
};

export default Results;
