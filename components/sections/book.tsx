import React from "react";
import Container from "../container";
import Col from "../common/Col/col";
import Link from "next/link";

const Book = () => {
    return (
        <section className={"mt-[240px] mb-[193px]"}>
            <Container>
                <Col colStart={3} colEnd={14} className={'items-center'}>
                    <div className={"flex flex-col gap-[50px]"}>
                         <h2 className={"text-[20px]"}>Notre dernier livre</h2>
                        <p className={'text-[20px]'}>
                            Vous vous demandez peut-être qui est le personnage dont le nom est inscrit sur la plaque émaillée de votre rue ou quelle est l’origine de votre quartier ? Quels commerces ou industries y étaient florissants ? Quelles personnalités y vécurent ? Vous aimeriez savoir comment se divertissaient vos prédécesseurs, comment vivaient vos voisins d’antan ?
                        </p>
                        <div className={"flex justify-center w-[200px] bg-red-700 text-white py-[10px] px-[15px] rounded-full "}>
                        <Link href={"#"} className={""}>
                            Commander le livre
                        </Link>

                        </div>
                    </div>
                </Col>
                <Col colStart={16} colEnd={22}>
                    <div className={"h-[500px] w-full bg-amber-400"}>

                    </div>
                </Col>
            </Container>
        </section>
    )
}
export default Book;