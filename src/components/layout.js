import React from "react"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";

const Layout = ({children, className}) => {
  return (
    <div className="primary-container">
      <Header>
        <Logo title="Home" />
        <Navigation/>
      </Header>
      <main className={"container " + className}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

