import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidenav from './components/Sidenav'
import MainContent from './components/MainContent'
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="container-center">
        <Sidenav classBgColor="purple"/>
        <MainContent/>   
        <Sidenav classBgColor="blue"/>               
      </main>
      <Footer />
    </div>
  );
}

export default App;