import '../styles/globals.css'
import Amplify from "aws-amplify";
Amplify.configure(config);
import config from "../src/aws-exports"; 


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp