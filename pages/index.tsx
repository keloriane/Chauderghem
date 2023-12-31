
import Head from 'next/head'
import Image from "next/image";
import {GetStaticProps} from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import {getAllPostsForHome, getAllTags, getPostsSlider} from '../lib/api'
import {CMS_NAME} from '../lib/constants'
import React, {useEffect, useState} from "react";
import Col from "../components/common/Col/col";
import AnimatedText from "../components/common/AnimatedText";
import RougeCloitre from "./../public/images/rougeCloitre.png";
import postalCard from "./../public/images/chasse-royal.png"
import Book from "../components/sections/book";
import {postByLetter} from "../graphql/query";

import LastPosts from "../components/sections/last-posts";

import Menu from "../components/common/Menu";

type Tag = {
    name:string,
    id:string
}

export default function Index( {allTags:{nodes} , allPosts:{edges}, homePosts, preview }) {

    const [allPosts , setAllPosts] = useState(edges)
    const [sliderPosts , setSliderPosts] = useState(homePosts)




    useEffect(() => {
        setAllPosts(edges); // Set initial posts when component mounts
    }, [edges]); // Run when edges change

    const fetchData = async (tag: string) => {
        const res = await fetch(`https://playground.pxl-studio.com/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: postByLetter,
                variables: {
                    tag: tag,
                },
            }),
        });

        const data = await res.json();

        setAllPosts(data.data?.posts?.edges);


    };



    const tags = nodes;

    const tag =  tags.map((tag:Tag) =>tag.name)




  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
        <div className={"w-screen h-full flex flex-col items-center justify-center"}>
            <Container className={"h-[500px] justify-center items-center"}>
                <Col colStart={4} colEnd={23}>
                    <div className={"flex items-center flex-col justify-center  w-full m-auto"}>
                        <AnimatedText as={"h1"} text={"  Cercle d’histoire d’Auderghem"} gap={"15px"} duration={.5} splitBy={"word"} className={"sm:text-[40px] md:[40px] xl:text-[88px] uppercase text-center justify-center"}/>
                    </div>
                </Col>

            </Container>
            <Container className={"mb-[50px]"}>
                <Col colStart={4} colEnd={23}>
                    <Menu />
                </Col>
            </Container>
            <Container>
                <Col colStart={2} colEnd={26}>
                    <div className={"relative"}>
                        <Image src={RougeCloitre} alt={"image hero rue Auderghem"} />
                        <div className={"absolute bottom-0 bg-wine w-full py-[25px] pl-[35px]"}>
                            <AnimatedText as={"h2"} text={"Auderghem à travers les ages et par quartier"} gap={"5px"} duration={.5} splitBy={"word"} className={"text-center text-white text-[40px]"}/>
                        </div>
                    </div>

                </Col>
            </Container>
        </div>

        <Book />
        <Container>
            <Col className={''} colStart={[2, 3, 3, 2 ]} colEnd={[26, 26, 27, 18]  }>
                <AnimatedText text={"Le cercle d’histoire"} splitBy={"word"} as={"h2"} gap={"12px"} duration={1} className={"text-wine capitalize font-medium text-[42px]"} />
                <div className="mt-[30px]">
                    <p className={"text-[16px] md:text-[20px] leading-10 text-zinc-800 text-wine"}>
                        Vous vous demandez peut-être <span className="accent"> qui est le personnage </span> dont le nom est inscrit sur la <span className="accent"> plaque émaillée </span> de votre rue ou quelle est l’origine de votre quartier ? Quels commerces ou industries y étaient florissants ? Quelles personnalités y vécurent ? Vous aimeriez savoir comment se divertissaient vos prédécesseurs, comment vivaient vos voisins d’antan ?
                    </p>
                </div>

            </Col>
            <Col colStart={[2, 3, 3, 2 ]} colEnd={[26, 26, 27, 20]} className={'mt-[30px]'}>
                <p className={"text-[16px] md:text-[20px] leading-10 text-zinc-800"} >Ce site répond à bien des questions et évoque aussi quelques curiosités et anecdotes liées à la commune d’Auderghem.</p>
            </Col>

        </Container>
        <Container className={"mt-[100px]"}>
            <Col colStart={[2,2,2,]} colEnd={[26,26,13,13]}>
                <Image src={postalCard} alt={"coidn"} className={"w-full"} />
            </Col>
            <Col colStart={[2,2,15,15]} colEnd={[26,26,26]}>
                <div className={"flex gap-[20px] flex-col justify-center"}>
                    <h2 className={"text-[30px] text-wine"}>
                        A propos du cercle d’histoire d’Auderghem.
                    </h2>
                   <p
                       className={"text-[18px] "}>
                       Un travail minutieux a été réalisé pour rassembler les informations, toutes référencées. De nombreuses sources ont été consultées : non seulement les archives, rapports et plans de la commune, mais aussi d’innombrables ouvrages, documents, même parfois manuscrits, relatifs à Auderghem.
                   </p>
               </div>

            </Col>
        </Container>

        <section className={"flex justify-end mt-[200px] mb-[200px]"}>
            <div className={"w-[100%] flex justify-end"}>
                <LastPosts posts={sliderPosts}  />
            </div>
        </section>

        <Container>
            <Col colStart={[2,2,2,2]} colEnd={[26,26,20, 15]}>
                <h2 className="text-[66px] text-dark">
                    Auderhem par quartiers
                </h2>
                <p className={"text-[21px] font-semibold"}>
                    Vous vous demandez peut-être qui est le personnage dont le nom est inscrit sur la plaque émaillée de votre rue ou quelle est l’origine de votre quartier ? Quels commerces ou industries y étaient florissants ? Quelles personnalités y vécurent ? Vous aimeriez savoir comment se divertissaient vos prédécesseurs, comment vivaient vos voisins d’antan ?
                </p>
            </Col>

            <Col colStart={2} colEnd={24}>
                <div className="flex justify-evenly mt-[100px] mb-[100px]">
                    {tags.map((tag: any) => (
                        <button key={tag.id} onClick={() => fetchData(tag.name)} className={"hover:font-semibold hover:text-wine text-[33px] text-dark"}>
                            {tag.name}</button>
                    ))}
                </div>
            </Col>

        </Container>


            {allPosts && allPosts.length > 0 && <MoreStories key={tags} posts={allPosts} />}

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false } , tag='A') => {
    const allPosts = await  getAllPostsForHome(preview , tag);
    const homePosts = await getPostsSlider(preview);
    const allTags = await getAllTags()
  return {
    props: { allPosts, allTags, homePosts, preview },
  }
}
