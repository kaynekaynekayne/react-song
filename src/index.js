import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Appjjab from './Appjjab';
import SongApp from './SongApp';
import '@fortawesome/fontawesome-free/js/all.js'; 

ReactDOM.render(
  <React.StrictMode>
    {/* <Appjjab /> */}
    <SongApp />
  </React.StrictMode>,
  document.getElementById('root')
);