// import { Link } from "gatsby"
import React from "react"
function scrollToSection(event, element_id) {
    document.getElementById(element_id).scrollIntoView();
}
const Navigator = () => (

    <div className="navigator">
        <div className="navigator__container">

            <ul className="navigator__links">
                <li><a onClick={(e) => { scrollToSection(e, 'bio') }}>Bio</a></li>
                <li><a onClick={(e) => { scrollToSection(e, 'projects') }}>Projects</a></li>
                <li><a onClick={(e) => { scrollToSection(e, 'home-header') }}>Top</a></li>
            </ul>
        </div>
    </div>
)


export default Navigator
