import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

function navbar() {
    const Numbers = {}
    const returndata = Object.entries(Numbers).map((res,i)=>{
        return <li classNameName="nav-item" key={i}>
          <Link classNameName="nav-link" aria-current="page" to={res[0]}>{res[1]}</Link>
        </li>
    })
    return (
       <>
        <Router>
                <div className="containerfluid">
                     <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container-fluid">
                        <img className='logo' src="images/logo.png" alt=""/>
                        <a className="navbar-brand logo-title" href="javascript:void(0)">Dropbox</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            <a className="nav-link nav-title" href="javascript:void(0)">Why Dropbox?</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-title" href="javascript:void(0)">Products</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-title" href="javascript:void(0)">Solutions</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-title" href="javascript:void(0)">Pricing</a>
                            </li>
                             {returndata}
                        </ul>
                        <ul className='right'>
                            <li className="nav-item">
                            <a className="nav-link nav-right" href="javascript:void(0)">contact</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-right" href="javascript:void(0)">Get app</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-right" href="javascript:void(0)">Sign in</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-right" href="javascript:void(0)">Sign up</a>
                            </li>
                        </ul>
                        <button className="btn btn-primary get-btn" type="button">Get started →</button>
                       </div>
                    </div>
                    </nav>
                </div>
        <Routes>
            {/* <Route path='/home' element={<Home/>}/> */}
        </Routes>
        </Router>
       </>
    );
}

export default navbar;