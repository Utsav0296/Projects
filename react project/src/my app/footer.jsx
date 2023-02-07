import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe,faChevronRight } from '@fortawesome/free-solid-svg-icons';

function footer() {
    return (
        <>
            <div className="containerfluid Foot">
                <div className="foothead">
                    <div className="firstfoot">
                        <h4 className='foottitle'>Dropbox</h4>
                        <div className="footsec">Desktop app</div>
                        <div className="footsec">Mobile app</div>
                        <div className="footsec">Integrations</div>
                        <div className="footsec">Features</div>
                        <div className="footsec">Solutions</div>
                        <div className="footsec">Do more than store</div>
                        <div className="footsec">Security</div>
                        <div className="footsec">Advance access</div>
                    </div>
                    <div className="Secondfoot">
                        <h4 className='foottitle'>Products</h4>
                        <div className="footsec">Plus</div>
                        <div className="footsec">Professional</div>
                        <div className="footsec">Business</div>
                        <div className="footsec">Enterprise</div>
                        <div className="footsec">Dropbox Sign</div>
                        <div className="footsec">DocSend</div>
                        <div className="footsec">Plans</div>
                        <div className="footsec">Product updates</div>
                    </div>
                    <div className="Thirdfoot">
                        <h4 className='foottitle'>Support</h4>
                        <div className="footsec">Help center</div>
                        <div className="footsec">Contact us</div>
                        <div className="footsec">Privacy & terms</div>
                        <div className="footsec">Cookie policy</div>
                        <div className="footsec">Cookies & CCPA preferences</div>
                        <div className="footsec">Sitemap</div>
                        <div className="footsec">Learning resources</div>
                    </div>
                    <div className="fourthfoot">
                        <h4 className='foottitle'>Community</h4>
                        <div className="footsec">Blog</div>
                        <div className="footsec">Developers</div>
                        <div className="footsec">Community forums</div>
                        <div className="footsec">Referrals</div>
                    </div>
                    <div className="fifthfoot">
                        <h4 className='foottitle'>Company</h4>
                        <div className="footsec">About us</div>
                        <div className="footsec">Jobs</div>
                        <div className="footsec">Investor relations</div>
                        <div className="footsec">ESG</div>
                        <div className="footsec">Partners</div>
                    </div>
                </div>
                <div className="footbtn">
                    <button className='tr'><i class="fa-brands fa-twitter"></i></button>
                    <button className='fb'><i class="fa-brands fa-facebook"></i></button>
                    <button className='yt'><i class="fa-brands fa-youtube"></i></button>
                </div>
                <div className="footline">
                    <hr />
                </div>
                <div className="footlng">
                    <button className='lng'><span><FontAwesomeIcon icon={faGlobe}/></span> English (United States)<FontAwesomeIcon icon={faChevronRight} className='grt'/></button>
                </div>
            </div>
        </>
    );
}

export default footer;