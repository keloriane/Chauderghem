import React from "react";
import {useSwiper} from "swiper/react";

const SwiperNavigation = () => {
    const swiper = useSwiper();
    return (
        <div className={"flex gap-[30px] mt-[50px]"}>
            <div onClick={() => swiper.slidePrev()} className={"stroke-wine fill-wine flex justify-center items-center border-wine border rounded-full w-[70px] h-[70px] hover:bg-wine hover:stroke-white"}>
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292893 7.29289C-0.097631 7.68342 -0.0976311 8.31658 0.292893 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65685 0.928931L0.292893 7.29289ZM22 7L1 7L1 9L22 9L22 7Z" fill="white"/>
                </svg>
            </div>
            <div onClick={() => swiper.slideNext()} className={"stroke-wine flex justify-center items-center border-wine border rounded-full w-[70px] h-[70px] hover:bg-wine hover:stroke-white"}>
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9L21 9V7L0 7L0 9Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}
export default SwiperNavigation