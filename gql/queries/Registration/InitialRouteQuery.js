import gql from 'graphql-tag';

export const getInitialRouteQuery = gql`
    {
        initialRoute @client
    }
`;

export const setInitialRouteQuery = gql`
    mutation setInitialRoute($initialRoute: String){
        setInitialRoute(initialRoute: $initialRoute) @client
    }
`;
