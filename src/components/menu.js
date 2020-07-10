import React from "react"
import { nominalTypeHack } from "prop-types"
import { Link } from "gatsby"

const contactStyle = {
  color: "coral",
  borderWidth: "2px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "0.5em",
  fontFamily: `Arial, Helvetica, sans-serif`,
}

const menuStyle = {
  fontFamily: `Arial, Helvetica, sans-serif`,
}

const Menu = () => (
  <div
    style={{
      background: "white",
      paddingTop: "35px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link style={menuStyle} to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link style={menuStyle} to="/about">
          ABOUT
        </Link>
      </li>
      <li>
        <Link style={menuStyle} to="/services">
          SERVICES
        </Link>
      </li>
      <li>
        <Link style={menuStyle} to="/blog">
          BLOG
        </Link>
      </li>
      <li>
        <Link style={contactStyle} to="/">
          CONTACT
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
