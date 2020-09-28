// import React, { useContext, useEffect } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
// import { useApolloClient } from '@apollo/client';
// import { useHistory } from 'react-router-dom';

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import theme from '../theme';
// import AuthStorageContext from '../contexts/AuthStorageContext';
// import Text from './Text';


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.mainBackground
    },
});

// const SignOut = () => {
//     let history = useHistory();
//     const authStorage = useContext(AuthStorageContext);
//     const apolloClient = useApolloClient();
    
//     useEffect(() => {
//         const signOutUser = async () => {
//             console.log('test');
//             await authStorage.removeAccessToken();
//             await apolloClient.resetStore();
//         };
//         signOutUser();
//         history.push("/");
//     }, []);

//     return (
//         <Text>Signing out...</Text>
//     );
// };

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/signin" exact>
                    <SignIn />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;