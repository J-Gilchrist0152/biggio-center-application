import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/_includes/NavBar'
import { gql, GraphQLClient } from 'graphql-request'
import TestBanner from '../graphics/TestingServices'




const TestingServicesPrograms = ({ posts  }) => {
    return (  

      
    <div id="main-container" className="col-12 program-wrapper">
        <TestBanner/>
        <NavBar/>
        <div className='col-12 program-container'>
          {posts.map( post => {
            return (
              <a href={post.slug}>
              <div className='col-4 program-list' key={post.id}>
                  <h1 className="program-title">{post.title}</h1>
                  <p className="program-description">{post.description}</p>
              </div>
            </a>
            );
          })}
        </div>
    </div>
    )
}
 
export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckzekoep138iw01z59a8p5x42/master'
  );

  const { posts } = await graphcms.request(
    `
    {
      posts(where: {tags_contains_all: "testing-services"}) {
        title
          slug
          description
          tags
          contentWeight
      }
    }
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default TestingServicesPrograms;