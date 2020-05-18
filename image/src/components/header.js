import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"


function Header({ siteTitle }) {
  return (
    <header>
      <div className="header-left">
        <div className="site-logo">{siteTitle}</div>
      </div>
      <div className="header-right">
        <nav className="site-navigation">
          <ul>
            <li> snippets</li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

