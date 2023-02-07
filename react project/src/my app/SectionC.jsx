import React from 'react';
import { useState } from 'react';

function SectionC() {
        const[images,setimages] = useState(<img src="images/acc1.png" alt="" height={600} width={600}/>)
    return (
        <>
            <div className="containerfluid">
                <div className="row acc-main">
                    <div className="col-6 left-acc">
                        <div class="accordion " id="accordionExample">
                            <div class="accordion-item ">
                                <h2 class="accordion-header " id="headingOne">
                                <button  onClick={() => setimages(<img src="images/acc1.png" alt="" height={600} width={600}/>)} class="accordion-button open acc-t " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Get 2 GB of cloud storage for free with Dropbox Basic
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Save and access your files from any device, and share them with anyone. Discover what Dropbox can do for you—get a free account, no strings attached!
                                </div>
                                <div className="accordion-body acc-bt"><a href="">Learn more</a></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button onClick={() => setimages(<img src="images/acc2.jpg" alt=""  height={600} width={600}/>)} class="accordion-button collapsed acc-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Dropbox Plus has room for all your content with space to spare
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Safeguard your photos, personal docs, work files, and much more. Save everything with 2,000 GB of space—and get some handy tools to help you stay organized.
                                </div>
                                <div className="accordion-body acc-bt"><a href="">Learn more</a></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button onClick={() => setimages(<img src="images/acc3.png" alt=""  height={600} width={600}/>)} class="accordion-button collapsed acc-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Dropbox Family is a place for everyone with space for everything
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Share 2,000 GB of storage between 6 people. Each family plan member gets their own private Dropbox account for less than the price of two Plus plans.
                                </div>
                                <div className="accordion-body acc-bt"><a href="">Learn more</a></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                <button onClick={() => setimages(<img src="images/acc4.jpg" alt=""  height={600} width={600}/>)} class="accordion-button collapsed acc-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Make life easier for you and your clients with Dropbox Professional
                                </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Get our full suite of premium productivity and sharing tools—plus 3,000 GB of space. Dropbox Professional makes it easier for you to work with colleagues and clients.
                                </div>
                                <div className="accordion-body acc-bt"><a href="">Learn more</a></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                <button onClick={() => setimages(<img src="images/acc5.png" alt=""  height={600} width={600}/>)} class="accordion-button collapsed acc-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Streamline your document workflow with Dropbox Sign
                                </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Save yourself time and hassle with Dropbox Sign. You can sign legally-binding agreements with a few clicks. And it's just as easy to request a signature from someone else.
                                </div>
                                <div className="accordion-body acc-bt"><a href="">Learn more</a></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSix">
                                <button onClick={() => setimages(<img src="images/acc6.png" alt=""  height={600} width={600} />)} class="accordion-button collapsed acc-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Centralize, secure, and easily access your work with Dropbox Standard
                                </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Safeguard sensitive and confidential info. Automate time-consuming processes with powerful admin and collaboration tools. And easily recover your work if something ever goes wrong. Minimum 3 users per plan.
                                </div>
                                <div className="accordion-body acc-bt"><a href="">Learn more</a></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSeven">
                                <button onClick={() => setimages(<img src="images/collaboration-diagram.svg" alt=""  height={600} width={600}/>)} class="accordion-button collapsed acc-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                DocSend lets you track, analyze, and optimize your content
                                </button>
                                </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Safely share business-critical documents and get real-time performance insights. DocSend helps you manage and optimize your company’s most important content.
                                </div>
                                <div className="accordion-body acc-bt"><a href="">Learn more</a></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingEight">
                                <button  onClick={() => setimages(<img src="images/acc8.png" alt=""  height={600} width={600}/>)}  class="accordion-button collapsed acc-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Proactively detect threats to your team’s content with Dropbox Advanced
                                </button>
                                </h2>
                                <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Always-on security monitoring and alerts. Extended 1-year version history and file recovery. Plus all the storage space you need. Dropbox Advanced is a secure collaboration solution for your entire team. Minimum 3 users per plan.
                                </div>
                                <div className="accordion-body acc-bt"><a href="">Learn more</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 acc-img">
                           <div  className="img-acc">{images}</div> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionC;
