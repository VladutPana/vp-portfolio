import Navbar from '../components/Navbar';
import '../styles/globals.css';
//rendered all by next-js when created
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
