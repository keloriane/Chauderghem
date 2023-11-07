import React from "react";
import Container from "../container";
import Col from "../common/Col/col";
import Image, {StaticImageData} from "next/image";


type Hero = {
    imageHero: StaticImageData;
}
export default function Hero({imageHero}) {
    return (
        <div className={"w-screen h-full flex flex-col items-center justify-center"}>
            <Container>
                <Col colStart={2} colEnd={26}>
                    <div>
                        <h2 className={"text-center"}>
                            Auderghem à travers les ages et par quartier
                        </h2>
                        <h1 className={"text-[88px] uppercase text-center"}>
                            Cercle d’histoire d’Auderghem <span className={"accent"}>.</span>
                        </h1>
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