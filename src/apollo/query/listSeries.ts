import { gql } from '@apollo/client';

export const LISTSERIES = gql`
  query listSeries($filter: SerieFilterInput) {
    listSeries(filter: $filter) {
      title
      id
      image
      studio {
        id
        name
      }
    }
  }
`;
