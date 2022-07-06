import Head from 'next/head'
import { Image } from '@chakra-ui/react'
import ProfBanner from '../graphics/ProfessionalDevelopment'
import Link from 'next/link'
import { gql, GraphQLClient } from 'graphql-request'
import Navbar from '../components/_includes/NavBar'


const ProfessionalDevelopment = ({ posts  }) => {
    return (  

      
      <div id="main-container" className="col-12 program-wrapper">
      <ProfBanner/>
      <Navbar/>
      <div className='col-12 program-container'>
          {posts.map( post => {
            return (
              <a href={post.slug}>
                <div className='col-4 program-list' key="i">
                    <h1 className="program-title">{post.title}</h1>
                    <h3 className="program-description">{post.description}</h3>
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
      posts(where: {tags_contains_all: "professional-development"}) {
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

export default ProfessionalDevelopment;