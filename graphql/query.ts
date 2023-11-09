import { request } from 'graphql-request';
import {ta} from "date-fns/locale";



export const postByLetter =  `
        query AllPosts($tag: String) {
          posts(first: 20, where: {tag: $tag, orderby: {field: DATE, order: DESC}}) {
            edges {
              node {
                title
                excerpt
                slug
                date
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                author {
                  node {
                    name
                    firstName
                    lastName
                    avatar {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `

export const homePosts = `{
  posts(first: 6, where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`;