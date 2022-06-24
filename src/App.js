import React from 'react';
 import './index.css';
import Header from './componenets/Header';
import Feature from './componenets/Feature';
import  About from './componenets/About';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import  Contact from './componenets/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='App' button='Get the app'/>
      <About image={aboutimage1} title='Download to Get the App' button='Download'/>
      <Contact/>
       </div>
  );
}

export default App;
