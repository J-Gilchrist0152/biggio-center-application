import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bootStrap from './services/bootStrap'
import MainBanner from './graphics/MainBannerGraphic'
import Link from 'next/link'
import NavBar from './components/_includes/NavBar'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import { gql, GraphQLClient } from 'graphql-request'
import { useState } from 'react'

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);



function Hit({ hit }) {
  return (
    <Link href={`/programs/${hit.slug}`}>
          
      <a>
        <div className='row'>
        <div className='col-4 program-list-search' key="i">
          <h1 className="program-title">{hit.title}</h1>
        </div>
        </div>
      </a>
    </Link>
  );
}

export default function Home() {

  const [showHits, setShowHits] = useState(false);

  return (
      <div id="main-container" className="filter-container">
        <h1 className="sr-only">Biggio Center Website</h1>
        <div className="home-page-wrapper">
          <div data-category="home" className="biggio-home-content">
            <div className="home-page-banner-graphic"> 
              <MainBanner></MainBanner>
              <div className="biggio-search">
                <div className="right-panel">
                  <SearchBox 
                    onSubmit={() => setShowHits(true)}
                    onClick={() => setShowHits(false)}
                  />
                </div>
      
              </div>
            </div>
            <NavBar></NavBar>
            <div className="biggio-content-wrapper">
              <div className='col-10 search-results-container'>  
                  {showHits ? <Hits onFocus={() => setShowHits(true)} onBlur={() => setShowHits(false)} hitComponent={Hit} /> : null}
              </div>
              <h2 className="home-page-content-sub-heading">Biggio Mission Statement</h2>
              <p className="content-value values">We bring together the people, ideas, and services that enable Auburn’s teaching community to prepare our graduates to be creative problem solvers in a global economy. Our diverse units offer programming and support to faculty, instructional staff, and graduate teaching assistants. </p>
              <div className="col-12 units-container filter"> 
                <a href="/programs/educational-development-program">
                  <div className="col-4 units-box top">
                  <Image 
                      className='unit-icons'
                      src="/_assets/icons/Educational Development2.png" 
                      alt="" 
                      layout="responsive"
                      width={500}
                      height={250}
                    /> 
                  </div>
                </a> 
                <a href="/programs/professional-development-program">
                  <div className="col-4 units-box top">
                  <Image 
                      className='unit-icons'
                      src="/_assets/icons/Professional Development Programs.png" 
                      alt="" 
                      layout="responsive"
                      width={500}
                      height={250}
                    />  
                  </div>
                </a> 
                <a href="/programs/grants-funding-program">
                  <div className="col-4 units-box top">
                  <Image 
                      className='unit-icons'
                      src="/_assets/icons/Grants and Funding Opportunities2.png" 
                      alt="" 
                      layout="responsive"
                      width={500}
                      height={250}
                    />
                  </div>
                </a>
                <div className="clearfix"></div>
                <a href="/programs/testing-services-program">
                  <div className="col-4 units-box bottom">
                  <Image 
                      className='unit-icons'
                      src="/_assets/icons/Testing Services.2png.png" 
                      alt="" 
                      layout="responsive"
                      width={500}
                      height={250}
                    />
                  </div>
                </a> 
                <a href="/programs/instructional-technology-programs">
                  <div className="col-4 units-box bottom">
                  <Image 
                      className='unit-icons'
                      src="/_assets/icons/Instructional Technology.png" 
                      alt="" 
                      layout="responsive"
                      width={500}
                      height={250}
                    />
                  </div>
                </a> 
                <a href="/programs/learning-experience-design">
                  <div className="col-4 units-box bottom">
                    <Image 
                      className='unit-icons'
                      src="/_assets/icons/Learning Experience Design.png" 
                      alt="" 
                      layout="responsive"
                      width={500}
                      height={250}
                    />
                  </div>
                </a>
              </div>
              <div className="col-12 events-cal">
                <h2 className="home-page-content-sub-heading">Upcoming Events</h2>
              </div>
            </div>
          </div>
          </div>
        </div>
  )
}
