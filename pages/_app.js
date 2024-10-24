import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {React, useState} from 'react';
//rendered all by next-js when created
function MyApp({ Component, pageProps }) {

  const [darkMode,setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <>
       <div className={`${darkMode ? "bg-[#020617] text-white" : "bg-white text-gray-600"} transition-colors duration-200 ease-in-out min-h-screen overflow-hidden`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Component {...pageProps} darkMode={darkMode} />
      </div>
    </>
  );
}

export default MyApp;
