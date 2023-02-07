import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';

function SectionD() {
    return (
      <>
      <div className="containerfluid sec-d">
        <h2 className='Secd-heading text-center'>How will you use Dropbox?</h2>
        <div className="secd-box ">
            <div className="secd-left">
                <img className='d-leftimg' src="images/secd-left.jpg" alt="" />
                <div className="d-contant">
                    <div className="d-lefttitle">For Work</div>
                    <div className="d-leftdisc">Work efficiently with teammates and clients, stay in sync on projects, 
                        and keep company data safe—all in one place.</div>
                    <button className='d-leftbtn'> <span className='btntext'>Get Dropbox for work</span><button className='arrow'><FontAwesomeIcon icon={faArrowRight}/></button></button>
                </div>
            </div>
            <div className="secd-right">
                <img className='d-rightimg' src="images/secd-right.jpg" alt="" />
                <div className="d-contant">
                    <div className="d-lefttitle"> For personal use</div>
                    <div className="d-leftdisc">Keep everything that’s important to you and your family shareable and safe in one place. 
                            Back up files in the cloud, share photos and videos, and more.</div>
                    <button className='d-rightbtn'> <span className='btntext'>Get Dropbox for work</span><button className='arrow'><FontAwesomeIcon icon={faArrowRight}/></button></button>
                </div>
            </div>
        </div>
        <h3 className="secd-botheading text-center">Get more out of Dropbox by connecting with the tools you love</h3>
        <a href="" className="secd-link ">Learn more about partner integrations</a>

            <div className="row secd-one">
                    <div className="col-3 sub-oneA">
                        <div className="Secd-icons"><img src="images/d-1.png" alt="" /></div>
                        <div className="sub-oneT">Zoom</div>
                        <div className="sub-oned">Enhance remote collaboration with Zoom instant meetings and video recordings.</div>
                        
                    </div>
                    <div className="col-3 sub-oneB">
                        <div className="Secd-icons"><img src="images/d-2.png" alt="" /></div>
                        <div className="sub-oneT">Slack</div>
                        <div className="sub-twod">Bring Slack conversations and Dropbox content together to keep teams in sync.</div>
                        
                    </div>
                    <div className="col-3 sub-oneC">
                        <div className="Secd-icons"><img src="images/d-3.png" alt="" /></div>
                        <div className="sub-oneT">Adobe Creative Cloud</div>
                        <div className="sub-threed">Easily and securely send files to clients and vendors from within Adobe Photoshop.</div>
                        
                    </div>
                    <div className="col-3 sub-oneD">
                        <div className="Secd-icons"><img src="images/d-4.png" alt="" /></div>
                        <div className="sub-oneT">Microsoft Office</div>
                        <div className="sub-fourd">Easily access, edit, and share Office docs online in Dropbox.</div>
                        
                    </div>
            </div>

            <div className="row secd-two">
                <div className="col-3 sub-twoA">
                        <div className="Secd-icons"><img src="images/d-5.png" alt="" /></div>
                        <div className="sub-oneT">Google Workspace</div>
                        <div className="sub-oned"> Create, edit, and share Google Docs, Sheets, and Slides in Dropbox.</div>
                        
                    </div>
                    <div className="col-3 sub-twoB">
                        <div className="Secd-icons"><img src="images/d-6.png" alt="" /></div>
                        <div className="sub-oneT">Trello</div>
                        <div className="sub-twod">Collaborate on team projects in Trello with Dropbox content.</div>
                       
                    </div>
                    <div className="col-3 sub-twoC">
                        <div className="Secd-icons"><img src="images/d-7.png" alt="" /></div>
                        <div className="sub-oneT">Canvas</div>
                        <div className="sub-threed">Upload course files or assignments straight from Dropbox to Canvas.</div>
                       
                    </div>
                    <div className="col-3 sub-twoD">
                        <div className="Secd-icons"><img src="images/d-8.png" alt="" /></div>
                        <div className="sub-oneT">Asana</div>
                        <div className="sub-fourd">Track all of your team’s work with Asana while keeping Dropbox content alongside.</div>
                       
                    </div>
                </div>

      </div>
      </>
    );
}

export default SectionD;