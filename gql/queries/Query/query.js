import gql from 'graphql-tag';

export const GET_QUERY = gql`
  query($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
      }
    }
  }
`;

export const SET_QUERY = gql`
  mutation setQuery($id: Int) {
    setQuery(id: $id)
  }
`;
