import { gql } from '@apollo/client';

export const SERIESBYID = gql`
  query ($id: UUID!) {
    serieById(serieId: $id) {
      id
      title
      image
      studioId
      seasons {
        id
        title
        episodes {
          id
          title
          seasonId
        }
      }
    }
  }
`;
