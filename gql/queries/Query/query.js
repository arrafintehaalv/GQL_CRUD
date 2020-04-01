import gql from 'graphql-tag';

export const getBooksQuery = gql`
  {
    books @client {
      name
      id
    }
  }
`;

export const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name @client
      id @client
    }
  }
`;

export const deleteBookMutation = gql`
  mutation($ID: ID) {
    deleteBook(id: $ID) {
      id
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export const getLangQuery = gql`
  {
    language @client
  }
`;
export const setLangQuery = gql`
  mutation setLang($language: String) {
    setLang(language: $language) @client
  }
`;
