import React from "react";
import Container from "../container";
import Col from "../common/Col/col";
import Link from "next/link";
import AnimatedText from "../common/AnimatedText";
import Image from "next/image";
import BookImage from "./../../public/images/book.png";

const Book = () => {
    return (
        <section className={"mt-[240px] mb-[193px]"}>
            <Container>
                <Col colStart={[2, 2, 3]} colEnd={[26, 26 , 13]} className={'items-center'}>
                    <div className={"flex flex-col gap-[50px]"}>
                        <AnimatedText text={"Le cercle d’histoire"} splitBy={"word"} as={"h2"} gap={"12px"} duration={.5} className={"text-wine capitalize font-medium text-[42px]"} />
                        <AnimatedText
                            className={"text-[17px]"}
                            text={"Vous vous demandez peut-être qui est le personnage dont le nom est inscrit sur la plaque émaillée de votre rue ou quelle est l’origine de votre quartier ? Quels commerces ou industries y étaient florissants ? Quelles personnalités y vécurent ? Vous aimeriez savoir comment se divertissaient vos prédécesseurs, comment vivaient vos voisins d’antan ?"}
                            splitBy={"phrase"} as={"p"} gap={"10px"} duration={.5} />
                        <div className={"flex justify-center text-center w-[200px] bg-red-700 text-white py-[10px] px-[15px] rounded-full "}>
                            <div>
                                <Link href={"#"} className={"m-auto"}>
                                    Commander le livre
                                </Link>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col colStart={[2, 2, 16]} colEnd={[26,26,24]} className="flex items-center">
                    <div className="flex items-center">
                        <Image src={BookImage} alt={"book"} />
                    </div>

                </Col>
            </Container>
        </section>
    )
}
export default Book;