import React from "react";
import Container from "../container";
import Col from "../common/Col/col";
import Image, {StaticImageData} from "next/image";
import AnimatedText from "../common/AnimatedText";


type Hero = {
    imageHero: StaticImageData;
}
export default function Hero({imageHero}) {
    return (
        <div className={"w-screen h-full flex flex-col items-center justify-center"}>
            <Container className={"h-[500px] justify-center items-center"}>
                <Col colStart={4} colEnd={23}>
                    <div className={"flex items-center flex-col justify-center  w-full m-auto"}>
                        <AnimatedText as={"h2"} text={"Auderghem à travers les ages et par quartier"} gap={"5px"} duration={.5} splitBy={"word"} className={"text-center"}/>
                        <AnimatedText as={"h1"} text={"  Cercle d’histoire d’Auderghem"} gap={"15px"} duration={.5} splitBy={"word"} className={"text-[88px] uppercase text-center justify-center"}/>
                    </div>
                </Col>
            </Container>
            <Container>
                <Col colStart={2} colEnd={26}>
                    <Image src={imageHero} alt={"image hero rue Auderghem"} />
                </Col>
            </Container>
        </div>
    )
}