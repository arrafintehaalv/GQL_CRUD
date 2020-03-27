import gql from 'graphql-tag';

export const GET_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`;

export const SET_QUERY = gql`
  mutation authors($id: Int!, $name: String, $age: Int) {
    updateAuthor(id: $id, name: $name, age: $age) {
      id
      name
      age
    }
  }
`;
