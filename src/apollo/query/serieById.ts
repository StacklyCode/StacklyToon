import { gql } from '@apollo/client';

export const SERIESBYID = gql`
  query ($id: UUID!) {
    serieById(serieId: $id) {
      id
      title
    }
  }
`;
