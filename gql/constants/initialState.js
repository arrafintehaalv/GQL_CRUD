export default {
  language: 'en',
  initialRoute: '',
  registration: {
    __typename: 'Registration',
    tempMerchantId: '',
    authorizeProfile: {
      __typename: 'AuthorizePersonProfile',
      nidFront: '',
      nidBack: '',
      authorizedPersonPhoto: '',
      eTin: '',
      mobileNumber: ''
    },
    companyProfile: {
      __typename: 'CompanyProfile',
      projectedTransaction: '',
      tradeLicenceNumber: '',
      tinNumber: '',
      vatRegistrationNumber: '',
      jointStockNumber: '',
      tradeLicenceImage: '',
      vatRegistrationImage: '',
      jointStockImage: '',
      storeImage: ''
    }
  }
};
