import React, {useEffect, useState} from "react";
import Image from "next/image";
import { twMerge } from 'tailwind-merge'
import  styles  from './posts.module.css';
import ReactHtmlParser from "react-html-parser";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import {Pagination} from "swiper/modules";
import SwiperNavigation from "../swiper-navigation";
import Link from "next/link";



const LastPosts = ({ posts }:any) => {

    const swiper = useSwiper()


    return (
        <div className={"sm:w-[90%] md:w-[75%] mr-0"}>
            <h2 className={"text-wine text-[34px] uppercase mb-10 "} >No dernières publication</h2>

        <Swiper
            spaceBetween={60}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                },
                1424: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
        >
            {posts.edges.map((post) => (
                <SwiperSlide>
                    <Link href={`/posts/${post.node.slug}`} className={"rounded-[7px]"}>

                    <div style={{backgroundImage:`url(${post.node.featuredImage.node.sourceUrl})`}} className={"flex w-full h-[520px] bg-cover"} >
                    </div>
                        <div className={twMerge("w-full self-end bg-wine text-white p-[30px]", styles.postBottom)}>
                            <h3 className={"text-[30px]"}> {post.node.title}</h3>
                            {ReactHtmlParser(post.node.excerpt)}
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
         <SwiperNavigation />

        </Swiper>
        </div>
    )
}
export default LastPosts;


