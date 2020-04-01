import {getBooksQuery, getLangQuery} from '../queries/Query/query';
const setLang = (_obj, {language}, {cache}) => {
  const query = getLangQuery;
  try {
    const prevData = cache.readQuery({query});
    // console.log(`lang: ${language}`);
    // console.log(`prev lang: ${prevLang}`);

    cache.writeQuery({
      query,
      data: {
        language,
      },
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};

const addBook = (_obj, {name}, {cache}) => {
  console.log('Hello From Name', name);
  const query = getBooksQuery;
  try {
    const prevData = cache.readQuery({query});
    const newBook = {
      __typename: 'Books',
      name,
      id: 2,
    };
    const data = {
      books: [...prevData.books, newBook],
    };
    console.log('prevData, ', prevData);
    cache.writeQuery({
      query,
      data,
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};

export default {
  Mutation: {
    setLang,
    addBook,
  },
};
