import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"
import Layout from "../components/layout"
import Navigator from "../components/navigator"
import Projects from "../components/projects"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>

    <Layout>
      <SEO title="Home" />
      <section id="bio">
        <h2>Bio</h2>
        <h3 className="text-green">Accademic Background</h3>
        <p>Hi! 👋 My name is Andreas Stamataris and I’m a Front-end Web Developer. My accademic background is Computer Science and Psychology and I did my bachelor’s in Psychology (BSc) at Royal Holloway University of London and my MSc in Computer Science
          at UCL. Graduating in 2015 and 2016 respectively.
        </p>
        <p> You're probably wondering how I transitioned from Psychology to Computer Science. During my second year of university
        I tried programming for fun and have been hooked ever since. My first steps involved teaching myself Python through
        an online course. I really enjoyed dismantling problems to component parts and then putting the pieces together to
        form a solution. After my exposure to programming, I arranged an internship at an <a href="http://www.acuity-intelligence.com/" target="_blank">eye tracking company</a>, something that combined both Psychology as well as programming. Utilising the knowledge
                          I gained from my internship and my skills in Python I created my own analytic algorithm to read blink information
                          from raw eye tracking data and used it in my final year project. During this time, it became apparent to me that
                          I enjoy programming more than psychology and that I would like to purse a career in that field instead.
        </p>
        <p> Following that I undertook the MSc in Computer Science at UCL, a generalist course aiming to provide a thorough
        introduction to computing for new graduates.</p>

        <h3 className="text-green">Work Experience</h3>
        <h4 className="text-green">2016-2017</h4>
        <p> Upon graduating, I got a job as an Integrations Developer at <a href="https://www.broadbean.com/" target="_blank">Broadbean Technology</a>(London UK) where I developed, built and maintained integrations between our advert distribution tool
                      and 3rd party job boards as well as client career sites. My exposure allowed me to determine the fields I am more
                      interested in which lie in Web Development and more specifically in the Full Stack to Front-End spectrum. I quit
                      my job in July of 2017 to pursue my interests and moved back to my home country, Cyprus.
        </p>
        <h4 className="text-green">2017-2018</h4>
        <p>I experimented with various frameworks, such as Django, React, Ember and Angular and I worked for almost a year at a startup called <a href="https://www.11pets.com/">11pets</a>, mainly working with Angular 2+. If you have a pet and need an ecosystem to help manage their care there's seriously no one better out there.
        </p>
        <h4 className="text-green">2018-Now</h4>
        <p>In mid 2018 I was fortunate enough to join the amazing team at <a href="https://pixelactions.com" target="_blank">Pixel Actions</a>. A web development agency taking on projects of various scale. The stack there includes Django/Flask serverside, Foundation as our main CSS framework and Emberjs for platforms and internal projects. Fortunately, due to the varying requirements of jobs, we get to play with other tools and frameworks as well such as Vue.js & React.js.</p>
      </section>

      <Projects />
    </Layout>
    <Navigator />
  </div>

)

export default IndexPage
