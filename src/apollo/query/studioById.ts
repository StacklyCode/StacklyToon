import { gql } from '@apollo/client';

export const STUDIOBYID = gql`
  query ($id: UUID!) {
    studioById(studioId: $id) {
      name
      description
      id
      series {
        title
        image
      }
    }
  }
`;
