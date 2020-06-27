import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Accordion from './components/Accordion/Accordion';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Accordion/>
      <Footer/>
    </div>
  );
}

export default App;
