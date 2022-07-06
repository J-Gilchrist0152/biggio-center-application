import Layout from './components/_includes/Layouts';
import Script from 'next/dist/client/script'
import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.css'
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  

  return (
    <ChakraProvider>
      <Layout>
        <InstantSearch indexName="biggio-index" searchClient={searchClient}>
          <Component {...pageProps} />
        </InstantSearch>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
