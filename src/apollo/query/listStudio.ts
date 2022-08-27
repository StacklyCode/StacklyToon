import { gql } from '@apollo/client';

export const LISTSTUDIOS = gql`
  query ListStudios($filter: StudioFilterInput) {
    listStudios(filter: $filter) {
      createdAt
      id
      description
      updatedAt
      name
      series {
        id
        title
        image
      }
    }
  }
`;
