import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import {useEffect} from "react";
import Col from "../components/common/Col/col";
import AnimatedText from "../components/common/AnimatedText";
import Hero from "../components/sections/hero";
import imageHero from "./../public/images/chaussee-de-wavre.png"
import postalCard from "./../public/images/chasse-royal.png"
import Book from "../components/sections/book";
import Image from "next/image";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges

    const handleLetterClick = (clickedLetter:string) => {
        console.log("Clicked letter:", clickedLetter);
        // Here, you can make your WPGraphQL call using clickedLetter or perform any other actions.
    };
    useEffect(() => {
        console.log(edges[0]?.node);
    }, []);

  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
        <Hero imageHero={imageHero} />
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
            <Col colStart={2} colEnd={13}>

                <Image src={postalCard} alt={"coidn"} className={"w-full"} />
            </Col>
            <Col colStart={15} colEnd={26}>
                <div>
                    <AnimatedText text={"A propos du cercle d’histoire d’Auderghem"} splitBy={"word"} as={"h2"} className={"text-[30px]"} gap={"10px"} duration={.5} />
                </div>
               <div>
                    <p>
                        Un travail minutieux a été réalisé pour rassembler les informations, toutes référencées. De nombreuses sources ont été consultées : non seulement les archives, rapports et plans de la commune, mais aussi d’innombrables ouvrages, documents, même parfois manuscrits, relatifs à Auderghem.
                    </p>
               </div>

            </Col>
        </Container>



            {morePosts.length > 0 && <MoreStories posts={morePosts} />}

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
