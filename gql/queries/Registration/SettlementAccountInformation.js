import gql from 'graphql-tag';

export const GET_MERCHANT_ID = gql`
    {
        registration @client{
            tempMerchantId
        }
    }
`;
