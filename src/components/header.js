// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <div className="grid-container">
    <header className="home-header">
      <div className="home-header home-header__container">
        <div>
          <Image />
        </div>
        <div>
          <h1>Andreas Stamataris</h1>
          <h2><span className="">Web</span><span className="web"> Developer</span> </h2>
          <p>📍 Nicosia, Cyprus</p>
          <p>⚙️ Wagtail, Foudation & Emberjs</p>
          <p>🚀 Pixel Actions</p>
          <p>🧡 Dogs, The Ocean, MMOs & Memes</p>
        </div>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
