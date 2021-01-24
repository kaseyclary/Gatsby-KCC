import React, {Component} from "react"
import Layout from "../containers/Layout/Layout"
import "../pages/index.css"
import SEO from "../components/seo"
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import {graphql, useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from "react-helmet"
import Aux from '../HOC/aux'

const IndexPage = () => {
  //Will eventually want screen width to be a stateful variable to allow for dynamic screen size changes
  const aboutTextQuery = useStaticQuery(graphql`
        query MyQuery {
            allSite {
              edges {
                node {
                  internal {
                    content
                  }
                }
              }
            }
            allContentfulAboutSection {
              edges {
                node {
                  aboutInfo {
                    internal {
                      content
                    }
                  }
                }
              }
            }
          }
        `);
  const aboutText = aboutTextQuery.allContentfulAboutSection.edges.map((edge) => {
    return (edge.node.aboutInfo.internal.content)
  });

  return(
    <Aux>
      <Helmet>
          <title>Kylie's Charcuterie Creations</title>
          <link rel="icon" type="image/png" href="../assets/images/siteicon.png"></link>
      </Helmet>
      <Layout>
        <Hero />
        <About text={aboutText}/>
      </Layout>
    </Aux>
  )
}

export default IndexPage;
