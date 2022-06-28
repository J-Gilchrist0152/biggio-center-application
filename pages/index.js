import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bootStrap from './services/bootStrap'
import MainBanner from './graphics/MainBannerGraphic'
import Link from 'next/link'
import { ApolloClient,gql, InMemoryCache } from '@apollo/client'
import NavBar from './components/_includes/NavBar'

export default function Home(results) {
  return (
      <div id="main-container" className="filter-container">
        <h1 className="sr-only">Biggio Center Website</h1>
        <div className="home-page-wrapper">
          <div data-category="home" className="biggio-home-content">
            <div className="home-page-banner-graphic"> 
              <MainBanner></MainBanner>
              <div className="biggio-search">
                <form className="d-flex">
                  <input className="form-control me-2" id="search_field" type="search" placeholder="Currently Under Development" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
            <NavBar></NavBar>
            <div className="biggio-content-wrapper">
              <h2 className="home-page-content-sub-heading">Biggio Mission Statement</h2>
              <p className="content-value values">We bring together the people, ideas, and services that enable Auburn’s teaching community to prepare our graduates to be creative problem solvers in a global economy. Our diverse units offer programming and support to faculty, instructional staff, and graduate teaching assistants. </p>
              <div className="col-12 units-container filter"> <a data-filter="educational-development" href="#">
                <div className="col-4 units-box ub-2">
                  <p className="unit-box-text"> Educational <br/>
                    Development <br/>
                    &nbsp;</p>
                </div>
                </a> <a data-filter="professional-development" href="#">
                <div className="col-4 units-box ub-1">
                  <p className="unit-box-text"> Professional Development Programs <br />
                    &nbsp;</p>
                </div>
                </a> <a data-filter="grant-funding" href="#">
                <div className="col-4 units-box ub-3">
                  <p className="unit-box-text"> Grant & Funding Opportunites <br />
                    &nbsp;</p>
                </div>
                </a>
                <div className="clearfix"></div>
                <a data-filter="testing-service" href="#">
                <div className="col-4 units-box ub-4 ">
                  <p className="unit-box-text ub-box-text-btm">Testing <br />
                    Services</p>
                </div>
                </a> <a data-filter="instructional-tech" href="#">
                <div className="col-4 units-box ub-5">
                  <p className="unit-box-text ub-box-text-btm">Instructional <br />
                    Technology </p>
                </div>
                </a> <a data-filter="learning-experience" href="#">
                <div className="col-4 units-box ub-6">
                  <p className="unit-box-text ub-box-text-btm">Learning Experience Design</p>
                </div>
                </a>
              </div>
              <div className="col-12 events-cal">
                <h2 className="home-page-content-sub-heading">Upcoming Events</h2>
            <div className="placeholder-img-2"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-us-east-1.graphcms.com/v2/ckzekoep138iw01z59a8p5x42/master",
    cache: new InMemoryCache(),
  });

  const { data: auburnOnlines } = await client.query({
    query: gql`
    query MyQuery {
      auburnOnlines {
        profileImage {
          id
          url
        }
        name
        positionTitle
        email
        phoneNumber
      }
    }
    `,
  });

  return {
    props: {
      auburnOnlines
    },
  };
}