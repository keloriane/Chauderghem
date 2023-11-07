import PostPreview from './post-preview'
import Container from "./container";
import Col from "./common/Col/col";

export default function MoreStories({ posts }) {
    const renderAlphabetButtons = () => {
        const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        return alphabets.map(letter => (
            <button className={"hover:font-semibold hover:text-wine text-[33px] text-dark"} key={letter}>{letter}</button>
        ));
    };
  return (
    <section>
        <Container>
            <Col colStart={2} colEnd={15}>
                <h2 className="text-[66px] text-dark">
                    Auderhem par quartiers
                </h2>
                <p className={"text-[21px] font-semibold"}>
                    Vous vous demandez peut-être qui est le personnage dont le nom est inscrit sur la plaque émaillée de votre rue ou quelle est l’origine de votre quartier ? Quels commerces ou industries y étaient florissants ? Quelles personnalités y vécurent ? Vous aimeriez savoir comment se divertissaient vos prédécesseurs, comment vivaient vos voisins d’antan ?
                </p>
            </Col>

            <Col colStart={2} colEnd={24}>
                <div className="flex justify-evenly mt-[100px] mb-[100px]">
                    {renderAlphabetButtons()}
                </div>
            </Col>

        </Container>

      <Container>
        {posts.map(({ node } , i:number) => (
          <PostPreview
            index={i}
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </Container>
    </section>
  )
}

