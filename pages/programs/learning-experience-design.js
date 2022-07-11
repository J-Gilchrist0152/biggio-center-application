import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/_includes/NavBar'
import { gql, GraphQLClient } from 'graphql-request'
import LearningBanner from '../graphics/LearningExperience'



const LearningExperienceDesign = ({ posts  }) => {
    return (  

      
    <div id="main-container" className="col-12 program-wrapper">
        <LearningBanner/>
        <NavBar/>
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
      posts(where: {tags_contains_all: "learning-experience-design"}) {
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

export default LearningExperienceDesign;