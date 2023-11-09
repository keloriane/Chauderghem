import React, {useEffect, useState} from "react";
import Image from "next/image";
import { twMerge } from 'tailwind-merge'
import  styles  from './posts.module.css';
import ReactHtmlParser from "react-html-parser";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import {Pagination} from "swiper/modules";
import SwiperNavigation from "../swiper-navigation";



const LastPosts = ({ posts }:any) => {

    const swiper = useSwiper()

    console.log(posts);
    return (
        <div className={"w-full"}>

        <Swiper
            slidesPerView={2.5}
            pagination={{
                clickable: true,
            }}
            spaceBetween={60}
            modules={[Pagination]}
        >
            {posts.edges.map((post) => (
                <SwiperSlide>
                    <div className={"rounded-[7px] flex  w-full max-w-[420px] h-[520px]"} style={{backgroundImage:`url(${post.node.featuredImage.node.sourceUrl})`}} >
                        <div className={twMerge("w-full self-end bg-wine text-white p-[30px]", styles.postBottom)}>
                            <h3> {post.node.title}</h3>
                            {ReactHtmlParser(post.node.excerpt)}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
         <SwiperNavigation />

        </Swiper>
        </div>
    )
}
export default LastPosts;


