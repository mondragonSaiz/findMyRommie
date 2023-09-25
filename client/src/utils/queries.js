import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      firstName
      lastName
      email

      #   offers {
      #     _id
      #     name
      #     createdAt
      #     address
      #     petFriendly
      #     image
      #
      #   }
    }
  }
`;
