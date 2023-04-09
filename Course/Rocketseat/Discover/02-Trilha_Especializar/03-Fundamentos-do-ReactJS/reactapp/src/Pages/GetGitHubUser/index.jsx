import React, { useState} from "react"

import { UserCard } from "../../components/UserCard";

export function GetGitHubUser() {
    
    const [data, setData] = useState({})
    const [userName, setUserName] = useState('');
    const[repos, setRepos] = useState([]);
    
    const url = "https://api.github.com/users/";

    const handleChangeState = e => {
        setUserName(e.target.value)
    }

    const handleSubmit = async e =>{
        e.preventDefault();

        const response = await fetch(url + userName)
        const data = await response.json();
        // console.log(data);

        const repos = await fetch(data.repos_url)
        const repoData = await repos.json()
        // console.log(repoData);

        if (data) {
            setData(data)
            setRepos(repoData)
        }
        
    };

    return (
        <>
            <main>
                <form id="myForm">
                    <label htmlFor="github user search">Search Fo a GitHub User</label>

                    <input 
                        type="text" 
                        className="formControl" 
                        placeholder="username" 
                        value={userName}
                        onChange={handleChangeState}
                    />
                    <button
                        type="submit" 
                        onClick={handleSubmit}
                    >Search</button>
                </form>

                <section>
                    <UserCard
                        data={data}
                        repos={repos}
                    />
                </section>
            </main>
        </>
    )
}