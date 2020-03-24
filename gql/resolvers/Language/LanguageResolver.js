import {getLangQuery} from '../../queries/Language/LanguageQuery';
import {SET_QUERY} from '../../queries/Query/query';

export const setLang = (_obj, {language}, {cache}) => {
  const query = getLangQuery;
  try {
    // const prevLang = cache.readQuery({ query }).language;
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
export const setQuery = (_obj, {id}, {cache}) => {
  const query = SET_QUERY;
  try {
    // const prevLang = cache.readQuery({ query }).language;
    // console.log(`lang: ${language}`);
    // console.log(`prev lang: ${prevLang}`);

    cache.writeQuery({
      query,
      data: {
        id,
      },
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};
