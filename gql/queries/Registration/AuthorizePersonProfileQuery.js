import gql from 'graphql-tag';

export const getTempMerchantId = gql`
    {
        registration @client{
            tempMerchantId
        }
    }
`;

export const SET_MERCHANT_ID = gql`
    mutation setTempMerchantId ($tempMerchantId: String!) {
        setTempMerchantId (tempMerchantId: $tempMerchantId) @client
    }
`;


export const getAuthorizePersonProfileQuery = gql`
    {
        registration @client{
            authorizeProfile {
                nidFront,
                nidBack,
                authorizedPersonPhoto,
                eTin,
                mobileNumber
            }
        }
    }
`;

export const test = gql`
    mutation Test($userId: String!, $userPassword: String!) {
        crscsLogin(userId: $userId, userPassword: $userPassword){
            statusCode
        }
    }
`;

export const testQuery = gql`
    query CRAASIsLive{
        isLive
    }
`;

export const testToken = gql`
    mutation CRAASObtainToken{
        craasObtainToken(
            connectId:"74233289096503",
            deviceUuid:"514dgdgg45fdg",
            pin:"14354",
            location:"4234"){
            token
            status
            isInPinResetMode
            lockCounter
            lockTimer
            errorCode
            successCode
        }

    }
`;

export const setAuthorizePersonQuery = gql`
    mutation setAuthorizePersonProfileInfo($authorizePersonData: Object!){
        setAuthorizePersonProfileInfo(authorizePersonData: $authorizePersonData) @client
    }
`;

export const REQUEST_TEMPORARY_LOGIN = gql`
mutation CrmosTempLogin($accessToken: String!, $tempConnectId: String!) {
        crmosTempLogin(accessToken: $accessToken, tempConnectId: $tempConnectId){
            response
            successCode
            errorCode
            connectId
          }
    }
`;

export const GET_INITIAL_STATE = gql`
{
    registration @client{
       tempMerchantId
       authorizeProfile{
         nidFront
         nidBack
         authorizedPersonPhoto
         eTin
         mobileNumber
        }
       companyProfile{
         projectedTransaction
         tradeLicenceNumber
         tinNumber
         vatRegistrationNumber
         jointStockNumber
         tradeLicenceImage
         vatRegistrationImage
         jointStockImage
         storeImage
        }
    }
}
`;

export const RESET_CACHE_DATA = gql`
    mutation ResetCacheData ($resetData: Object!) {
        resetCacheData (resetData: $resetData) @client
    }
`;
