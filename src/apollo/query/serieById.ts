import { gql } from '@apollo/client';

export const SERIESBYID = gql`
 query($id: UUID!){
 serieById(serieId: $id) {
   title
   image
   language {
     name
   }
   studio{
     name
   }
   productionYear
   seasons{
     episodes{
       video
       image
       title
       id
       season {
         title
       }
     }
   }
 }
`;
