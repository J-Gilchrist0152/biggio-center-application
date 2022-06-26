import Layout from './components/_includes/Layouts';
import Script from 'next/dist/client/script'
import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.css'
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
