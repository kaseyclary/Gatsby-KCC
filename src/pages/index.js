import React, {Component} from "react"
import Layout from "../containers/Layout/Layout"
import "../pages/index.css"
import SEO from "../components/seo"
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import AboutDesktop from '../components/AboutDesktop/AboutDesktop'
import 'bootstrap/dist/css/bootstrap.min.css'
import {graphql, useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

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

  let aboutContent = null;

  return(
    <Layout>
      <Hero />
      {aboutContent}
    </Layout>
  )
}

export default IndexPage;
