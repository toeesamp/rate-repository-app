import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(SIGN_IN);
    const apolloClient = useApolloClient();
  
    const signIn = async ({ username, password }) => {
        console.log('arguments passed to mutate in signIn', username, password);
        const mutateResponse = await mutate({ variables: { username, password } });
        await authStorage.setAccessToken(mutateResponse.data.authorize.accessToken);
        await apolloClient.resetStore();
        return mutateResponse;
    };
  
    return [signIn, result];
  };

  export default useSignIn;