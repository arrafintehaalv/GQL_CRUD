import {
  getAuthorizePersonProfileQuery,
  getCompanyProfileQuery,
  getInitialRouteQuery,
  getTempMerchantId,
  GET_INITIAL_STATE
}
  from '../../queries';

export const setAuthorizePersonProfileInfo = (
  _obj, { authorizePersonData }, { cache }
) => {
  const query = getAuthorizePersonProfileQuery;
  try {
    const prevData = cache.readQuery({ query }).registration.authorizeProfile;
    // console.log('prev ', prevData);
    // console.log('authorizePersonData ', authorizePersonData);
    cache.writeQuery({
      query,
      data: {
        registration: {
          __typename: 'Registration',
          authorizeProfile: {
            __typename: 'AuthorizePersonProfile',
            ...prevData,
            ...authorizePersonData
          }
        }
      }
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};

export const setCompanyProfileInfo = (_obj, { companyProfileData }, { cache }) => {
  const query = getCompanyProfileQuery;
  try {
    const prevData = cache.readQuery({ query });
    cache.writeQuery({
      query,
      data: {
        registration: {
          __typename: 'Registration',
          companyProfile: {
            __typename: 'CompanyProfile',
            ...prevData.registration.companyProfile,
            ...companyProfileData
          }
        }
      }
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};

export const setInitialRoute = (_obj, { initialRoute }, { cache }) => {
  const query = getInitialRouteQuery;
  try {
    cache.writeQuery({
      query,
      data: {
        initialRoute
      }
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};

export const setTempMerchantId = (
  _obj, { tempMerchantId }, { cache }
) => {
  const query = getTempMerchantId;
  try {
    cache.writeQuery({
      query,
      data: {
        registration: {
          __typename: 'Registration',
          tempMerchantId
        }
      }
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};

export const resetCacheData = (
  _obj, { resetData }, { cache }
) => {
  const query = GET_INITIAL_STATE;
  // console.log('==', resetData);
  try {
    cache.writeQuery({
      query,
      data: {
        registration: resetData
      }
    });
  } catch (e) {
    console.log(`err${e}`);
  }
  return null;
};
