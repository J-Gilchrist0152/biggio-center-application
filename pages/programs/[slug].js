import React from 'react'
import { GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer';
import NavBar from '../components/_includes/NavBar';
import SlugBanner from '../graphics/SlugHeader.js';

  export async function getStaticProps({ params }) {
    const graphcms = new GraphQLClient(
      'https://api-us-east-1.graphcms.com/v2/ckzekoep138iw01z59a8p5x42/master'
    );
  
    const {post} = await graphcms.request(
      `query PostPageQuery($slug: String!){
        post(where: { slug: $slug }) {
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
      `,
      {
        slug: params.slug,
      }
    );
    
    return {
      props: {
        post,
      },
    };
  }

  export async function getStaticPaths() {
    const graphcms = new GraphQLClient(
      'https://api-us-east-1.graphcms.com/v2/ckzekoep138iw01z59a8p5x42/master'
    );
  
    const {posts} = await graphcms.request(
      `
      {
        posts {
          title
          slug
        }
      }
      `
    );
    
    return {
      paths: posts.map(({ slug }) => ({
        params: {slug},
      })),
      fallback: false,
    };
  }

  const SlugFunction = ({ post }) => (
    <React.Fragment>
      <SlugBanner/>
      <NavBar/>
      <h1>{post.title}</h1>
      <RichText content={post.mainContent.raw.children}/>
    </React.Fragment>
  );

  export default SlugFunction;