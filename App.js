import React from 'react';
import './App.css';
import Header from './components/Header';
import NawBar from './components/Nav';
import Content from './components/Component';



const App = () => {
  return (
    <div className='my-site'>
      <Header />
      <NawBar />
      <Content />
    </div>);
}
export default App;


