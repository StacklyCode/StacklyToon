import { gql } from '@apollo/client';

export const STUDIOBYID = gql`
  query StudioById($id: UUID!) {
    studioById(studioId: $id) {
      createdAt
      id
      description
      updatedAt
      name
    }
  }
`;
