import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './myindex.css';
import 'bootstrap5/src/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './my app/navbar';
import SectionA from './my app/sectionA';
import SectionB from './my app/SectionB';
import SectionC from './my app/SectionC';
import SectionD from './my app/SectionD';
import SectionE from './my app/SectionE';
import Footer from './my app/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <SectionA/>
    <SectionB/>
    <SectionC/>
    <SectionD/>
    <SectionE/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
