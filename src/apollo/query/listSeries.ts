import { gql } from '@apollo/client';

export const LISTSERIES = gql`
  query {
    listSeries {
      title
      id
    }
  }
`;
