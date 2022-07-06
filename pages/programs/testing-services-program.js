import Head from 'next/head'
import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import NavBar from '../components/_includes/NavBar'
import { gql, GraphQLClient } from 'graphql-request'
import TestBanner from '../graphics/TestingServices'




const TestingServicesPrograms = ({ posts  }) => {
    return (  

      
    <div id="main-container" className="col-12 auburn-online-container">
        <TestBanner/>
        <NavBar/>
        <div className='col-12 insight-bios-container'>
        {posts.map(post => {
          return (
            <div className='col-4 program-list' key={post.title}>
                <h1>{post.title}</h1>
                <h3>{post.date}</h3>
                <h3>{post.description}</h3>
            </div>
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
          mainContent {
            html
            markdown
            raw
            text
          }
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