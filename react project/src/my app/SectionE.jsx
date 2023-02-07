import React, { useState } from 'react';
import Slider_API from './API/Slider_Api';
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function SectionE() {

    const[sliderdata,setsliderdata] = useState(Slider_API)
    console.log(sliderdata);

    return (
       <>
        <div className="containerfluid secE">
            <h2 className='sece-heading text-center'>Trusted by over 700 million registered users and 600,000 teams</h2>
            <div className="sece-link text-center"><a href="">View more customer stories</a></div>

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper myslide" 
            >   
                  {sliderdata.map((curEle)=>{
                    const{id,image,dis,link,foot}=curEle;
                        return( 
                            <SwiperSlide key={id}>
                                <div className="myslide ">
                                    <div className="myslide-left">{curEle.image}</div>
                                    <div className="myslide-right">
                                        <div className="mslide-dis">{curEle.dis}</div>
                                        <div className="mslide-link">{curEle.link}</div>
                                        <div className="mslide-foot">{curEle.foot}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            <div className="sece-foot">For all things worth sharing.
                <button className='sece-btn'><span className='sece-btext'>Explore plans</span><button className='sece-bbtn'><FontAwesomeIcon icon={faArrowRight}/></button></button>
            </div>
        </div>
       </>
    );
}

export default SectionE;
