import { gql } from '@apollo/client';

export const LISTSTUDIOS = gql`
  query {
    listStudios {
      name
      description
      id
    }
  }
`;
