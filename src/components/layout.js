import React from "react"

import Header from "./header"
import Footer from "./footer"
import Copy from "./utils/Copy"
import Helmet from "react-helmet"
import useSeo from "../hooks/useSeo";
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    background-color: #ffff;
    line-height: 1.5;
    font-family: 'PT Sans', sans-serif;
  }
  h1,h2,h3 {
    margin: 0;
    line-height: 1.5;
    font-family: 'roboto', serif
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
`

const Layout = ({ children }) => {
  const year = new Date().getFullYear();
  const {siteName, fallbackSeo: {description}} = useSeo();


  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description}/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@100;300;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <Header/>
      {children}
      <Footer/>
      <Copy year={year}/>
    </>
  )
}

export default Layout
