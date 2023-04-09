import React from "react";

export function UserCard({data, repos}) {

    return (
        <div className="card-user">
            <div>
                <img src={data.avatar_url} alt="avatar picture" />
                <h2>{data.name}</h2>
                <p>{data.bio}</p>
            </div>

            <div>
                <ul>
                    <li>{data.followers} <span>Followers</span></li>
                    
                    <li>{data.following} <span>Following</span></li>

                    <li>{data.public_repos} <span>Repos</span></li>
                </ul>

                <div>
                    <h3>Repositories</h3>
                        {
                            repos.map( repo => {
                                return (
                                    <div id="userRepos" key={repo.name}>
                                        <a target="_blank" href={repo.html_url}>
                                            <img src="../../../public/github.svg" alt="folder image" />
                                            {repo.name}
                                        </a>
                                    </div>
                                )
                            })
                        }
                </div>

                <div className="profile">
                    <button>
                        <a href={data.html_url} target="_blank">Go to User Profile</a>
                    </button>
                </div>
            </div>
        </div>
    )
}