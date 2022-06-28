import Head from 'next/head'
import { Image } from '@chakra-ui/react'
import EdBanner from '../graphics/EducationalDevelopment'
import Link from 'next/link'
import { gql, GraphQLClient } from 'graphql-request'
import NavBar from '../components/_includes/NavBar'


const EducationalDevelopment = ({ posts  }) => {
    return (  

      
    <div id="main-container" className="col-12 auburn-online-container">
        <EdBanner/>
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
      posts(where: {tags_contains_all: "educational"}) {
        title
        slug
        tags
        content
        date
        description
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

export default EducationalDevelopment;