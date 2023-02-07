import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBoxOpen,faArrowRight,faX,faFileImport,faChartPie,faCamera,faArrowRightArrowLeft,faNoteSticky,faLock } from '@fortawesome/free-solid-svg-icons';


function SectionB() {
    return (
        <>
            <div className="containerfluid sub-head">
                <h3 className='sub-headtitle'>A set of products to help you do more</h3>
                <div className="row sub-one">
                    <div className="col-3 sub-oneA">
                        <div className="icon"><FontAwesomeIcon icon={faBoxOpen }/></div>
                        <div className="sub-oneT">Dropbox</div>
                        <div className="sub-oned">Securely store, organize, and share all your files.</div>
                        <a href="" className='sub-bt'><span>Learn more</span> <button className='arrow-bt'><FontAwesomeIcon icon={faArrowRight}/></button></a>
                    </div>
                    <div className="col-3 sub-oneB">
                        <div className="icon"><FontAwesomeIcon icon={faX } rotation={90}/></div>
                        <div className="sub-oneT">Sign</div>
                        <div className="sub-twod">Streamline your document workflows with legally-binding eSignatures.</div>
                        <a href="" className='sub-bt'><span>Learn more</span> <button className='arrow-bt'><FontAwesomeIcon icon={faArrowRight}/></button></a>
                    </div>
                    <div className="col-3 sub-oneC">
                        <div className="icon"><FontAwesomeIcon icon={faFileImport }/></div>
                        <div className="sub-oneT">DocSend</div>
                        <div className="sub-threed">Securely share your documents with real-time insights, so you know what's most impactful.</div>
                        <a href="" className='sub-bt'><span>Learn more</span> <button className='arrow-bt'><FontAwesomeIcon icon={faArrowRight}/></button></a>
                    </div>
                    <div className="col-3 sub-oneD">
                        <div className="icon"><FontAwesomeIcon icon={faChartPie }  rotation={90}/></div>
                        <div className="sub-oneT">Backup</div>
                        <div className="sub-fourd">Automatically back up important files on your devices to the cloud and easily restore them.</div>
                        <a href="" className='sub-bt'><span>Learn more</span> <button className='arrow-bt'><FontAwesomeIcon icon={faArrowRight}/></button></a>
                    </div>
                </div>


                <div className="row sub-two">
                <div className="col-3 sub-twoA">
                        <div className="icon"><FontAwesomeIcon icon={faCamera }/></div>
                        <div className="sub-oneT">Capture</div>
                        <div className="sub-oned"> Get your message across with screenshots, GIFs, or videos recorded right on your screen.</div>
                        <a href="" className='sub-bt'><span>Learn more</span> <button className='arrow-bt'><FontAwesomeIcon icon={faArrowRight}/></button></a>
                    </div>
                    <div className="col-3 sub-twoB">
                        <div className="icon"><FontAwesomeIcon icon={faArrowRightArrowLeft } rotation={90} /></div>
                        <div className="sub-oneT">Transfer</div>
                        <div className="sub-twod">Quickly and securely deliver large files—up to 100 GB—to anyone.</div>
                        <a href="" className='sub-bt'><span>Learn more</span> <button className='arrow-bt'><FontAwesomeIcon icon={faArrowRight}/></button></a>
                    </div>
                    <div className="col-3 sub-twoC">
                        <div className="icon"><FontAwesomeIcon icon={faNoteSticky }/></div>
                        <div className="sub-oneT">Paper</div>
                        <div className="sub-threed">Create collaborative documents to coordinate work and drive projects forward.</div>
                        <a href="" className='sub-bt'><span>Learn more</span> <button className='arrow-bt'><FontAwesomeIcon icon={faArrowRight}/></button></a>
                    </div>
                    <div className="col-3 sub-twoD">
                        <div className="icon"><FontAwesomeIcon icon={faLock }/></div>
                        <div className="sub-oneT">Passwords</div>
                        <div className="sub-fourd">Automatically store unlimited passwords in one central, secure place.</div>
                        <a href="" className='sub-bt'><span>Learn more</span> <button className='arrow-bt'><FontAwesomeIcon icon={faArrowRight}/></button></a>
                    </div>
                </div>
                <div className="sub-bottitle">What else can Dropbox help you do?</div>
                <div className="sub-botdisc">Dropbox brings everything—traditional files, cloud content, and web shortcuts—together in one place.</div>
            </div>
        </>
    );
}

export default SectionB