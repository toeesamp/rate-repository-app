import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
    repositories {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
query getRepository($id: ID!){
    repository(id: $id) {
        id
        ownerAvatarUrl
        fullName
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        url
      }
  }
`;