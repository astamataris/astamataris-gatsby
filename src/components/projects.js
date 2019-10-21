// import { Link } from "gatsby"
import React from "react"
// import axios from 'axios';


class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { repos: undefined };
    }
    componentDidMount() {
        // fetch('https://api.github.com/users/astamataris/repos').then((repos)=>{
        //     console.log(repos);

        // })
        fetch('https://swapi.co/api/people')
        // fetch('https://api.github.com/users/astamataris/repos')
            .then(repos => repos.json())
            .then((json) => {
                console.log(json);
                this.setState({repos: json})
                // console.log(json['results']);

            })
    }
    // createRepoList() {
    //     let repositories = [];
    //     // console.log(this.state.repos);

    //     // fetch('https://api.github.com/users/astamataris/repos')
    //     fetch('https://swapi.co/api/people')
    //         .then(repos => repos.json())
    //         .then((repos) => {
    //             this.setState({
    //                 repos: repos.results
    //             })
    //             // repos.forEach(repo => {
    //             //     console.log(repo);

    //             //     repositories.push(
    //             //         <li key={repo.id.toString()} ><a href="{repo.html_url}">{repo.name}</a></li>
    //             //     )
    //             // })
    //         })

    //     return repositories;
    // }
    render() {
        // const repos = this.state.repos;
        
        // const repos = this.state.repos;
        return (
            <section className="projects">
                <h2 id="projects">Projects</h2>
                <h3>Public Repos</h3>
                <ul className="projects__list">
                    {/* {this.state.repos.map(repo =><a href="{repo.html_url}" key={repo.name}> <li  >{repo.name}</li></a> )} */}

                </ul>
                <h3>Live Projects</h3>

            </section>
        )
    }
}

export default Project