import { getLangQuery } from '../../queries/Language/LanguageQuery';

export const setLang = (_obj, { language }, { cache }) => {
  const query = getLangQuery;
  try {
    // const prevLang = cache.readQuery({ query }).language;
    // console.log(`lang: ${language}`);
    // console.log(`prev lang: ${prevLang}`);

    cache.writeQuery({
      query,
      data: {
        language
      }
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};
