import { gql } from '@apollo/client';

export const SERIESBYID = gql`
  query ($id: UUID!) {
    serieById(serieId: $id) {
      id
      title
      image
      language {
        name
      }
      studio {
        name
      }
      studioId
      productionYear
      seasons {
        id
        title
        episodes {
          video
          image
          title
          id
          seasonId
          season {
            title
          }
        }
      }
    }
  }
`;
