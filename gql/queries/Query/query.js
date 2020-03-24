import gql from 'graphql-tag';

export const GET_QUERY = gql`
  query($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;

export const SET_QUERY = gql`
  mutation($mediaId: Int, $status: MediaListStatus) {
    SaveMediaListEntry(mediaId: $mediaId, status: $status) {
      id
      status
    }
  }
`;
