import { gql } from '@apollo/client';

export const EPISODEBYID = gql`
  query ($id: UUID!) {
    episodeById(episodeId: $id) {
      title
      numberEpisode
      summary
      image
      valoration
      video
      position
      season {
        id
        title
        serie {
          id
          title
          image
        }
      }
    }
  }
`;

// season {
//   id
//   title
//   serie {
//     id
//     title
//     image
//   }
// }
