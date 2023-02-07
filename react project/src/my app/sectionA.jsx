import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,faSmile,faStar,faShield } from '@fortawesome/free-solid-svg-icons';

function SectionA() {
  
    return (
       <>
       <section>
        <div className="containerfluid head-main">
            <div className="heading">
                <h1>Join over 700 million registered users who trust Dropbox</h1>
                <p className='headp'>Easy to use, reliable, private, and secure. It’s no wonder
                 Dropbox is the choice for storing and sharing your most important files.</p>
                 <button className='head-btn'>Find your plan →</button>
                 <img className='head-img img-fluid' src="images/head.jpg" alt="" />
                 <h2 className='head-btitle'>See what sets Dropbox apart</h2>
                 <div className="row head-bot">
                    <div className="col-3 head-botone hbone" >
                        <div className="emoji"><FontAwesomeIcon icon={faSmile}/></div>
                        <h4 className='dtitle'>Your files, not ours</h4>
                        <p className='disc'>With Dropbox, your files belong to you, not us, so you can be sure we’re not reselling your data.</p>
                    </div>
                    <div className="col-3 head-botone hbtwo">
                        <div className="emoji"><FontAwesomeIcon icon={faCloud}/></div>
                        <h4 className='dtitle'>All your files in one place</h4>
                        <p className='disc'>Store computer backups, photo libraries, thousands of documents—all your files, in the same place.</p>
                    </div>
                    <div className="col-3 head-botone hbthree">
                        <div className="emoji"><FontAwesomeIcon icon={faStar} /></div>
                        <h4 className='dtitle'> One-of-a-kind functionality</h4>
                        <p className='disc'>Store files as large as 2 TB each, sync at light speed, and allow anyone to preview nearly 200 file types.</p>
                    </div>
                    <div className="col-3 head-botone hbfour">
                        <div className="emoji"><FontAwesomeIcon icon={faShield}/></div>
                        <h4 className='dtitle'>Ease of use and security</h4>
                        <p className='disc'>2/3 of surveyed users say Dropbox keeps their files more secure and we’re a leader in ease of use.</p>
                    </div>
                 </div>
            </div>
        </div>
       </section>
       </>
    );
}

export default SectionA;
