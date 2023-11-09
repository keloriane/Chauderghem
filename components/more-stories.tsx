import PostPreview from './post-preview'
import Container from "./container";
import Col from "./common/Col/col";
import {GetStaticProps} from "next";
import {getAllTags} from "../lib/api";
import {useEffect} from "react";



export default function MoreStories({ posts , tags }) {


  return (
    <section>

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
