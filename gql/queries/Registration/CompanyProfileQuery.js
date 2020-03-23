import gql from 'graphql-tag';

export const getCompanyProfileQuery = gql`
    {
        registration @client{
            companyProfile{
                projectedTransaction,
                tradeLicenceNumber,
                tinNumber,
                vatRegistrationNumber,
                jointStockNumber,
                tradeLicenceImage,
                vatRegistrationImage,
                jointStockImage,
                storeImage
            }
        }
    }
`;

export const setCompanyProfileQuery = gql`
    mutation setCompanyProfileInfo($companyProfileData: Object!){
        setCompanyProfileInfo(companyProfileData: $companyProfileData) @client
    }
`;
