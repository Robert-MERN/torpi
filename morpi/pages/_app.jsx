import '../styles/globals.css'
import { ContextProvider } from '../context/ContextProvider'
import NextProgress from "nextjs-progressbar";
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextProgress
        startPosition={0.1}
        stopDelayMs={100}
        height={3}
        color="rgb(124 58 237)"
        options={{ "showSpinner": false, 'easing': 'ease', 'speed': 500 }}
      />
      <ContextProvider >
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  )
}

export default MyApp
