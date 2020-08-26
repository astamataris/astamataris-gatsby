// import { Link } from "gatsby"
import React from "react"
// import axios from 'axios';
import travelorama_img from "../images/travelorama.jpg";
import apron_img from "../images/apron.jpg";
import myarttherapy from "../images/myarttherapy.png";


class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { repos: undefined };
    }
    componentDidMount() {
        // fetch('https://api.github.com/users/astamataris/repos').then((repos)=>{
        //     console.log(repos);

        // })
        // fetch('https://swapi.co/api/people')
        //     // fetch('https://api.github.com/users/astamataris/repos')
        //     .then(repos => repos.json())
        //     .then((json) => {
        //         console.log(json);
        //         this.setState({ repos: json.results })
        //         // console.log(json['results']);

        //     })
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
        const repositories = this.state.repos;

        // const repos = this.state.repos;
        return (
            <section className="projects">
                <h2 id="projects">Live Projects</h2>
                <h3 className="text-green">Travelorama</h3>
                <p>
                    A travel-agency website leveraging Amadeus' iframes to look for flights and hotels. The site also supports insurance and car bookings using 2 other api iframes. The site was built with Angular 2+.
                </p>
                <div className="pic-container">
                    <a href="https://travelorama.com.cy" target="_blank" >

                        <img src={travelorama_img} alt="Travelorama" />
                    </a>
                </div>

                <h3 className="text-green">Apron Cooking Stories</h3>

                <p>A static website using Foundation's panini framework to give an online presence to the restaurant.</p>
                <div className="pic-container">
                    <a href="https://apron.cy" target="_blank" >
                        <img src={apron_img} alt="Apron" />
                    </a>
                </div>
                <h3 className="text-green">MyArtTherapy</h3>

                <p>A statically generated website for Myrto Savvidou, an Art Psychotherapist based in Nicosia, Cyprus. The site was built with Nuxt.js and features internationalisation in English and Greek, a headless CMS blog with NetlifyCMS, a contact form handled serverlessly by Netlify, and some "makeshift" svg animations I did pretty much manually 😆.  </p>
                <div className="pic-container">
                    <a href="https://myarttherapy.cy" target="_blank" >
                        <img src={myarttherapy} alt="Apron" />
                    </a>
                </div>

            </section>
        )
    }
}

export default Project