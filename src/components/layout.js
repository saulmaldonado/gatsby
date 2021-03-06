import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    console.log(this.props)
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
      header = (
        <h1
          style={{
            backgroundColor: 'black',
            ...scale(1.75),
            padding: '20px',
            marginTop: 0,
            position: "relative",
            bottom: '60px',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `white`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    return (
      <div
        style={{
          display:'flex',
          flexDirection:'column',
          marginTop: 0,
          marginLeft: `auto`,
          marginRight: `auto`,
          textAlign: 'center',
          height: '100vh',
          justifyContent: 'space-around',
          
        }}
      >
        <header
        style={{
          
        }}
        >{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
