import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import theme from '../theme';
import AuthStorageContext from '../contexts/AuthStorageContext';


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.mainBackground
    },
});

const signOutUser = async () => {
    console.log('test');
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
};

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

{/* <Route path="/signout" exact>
                    {() => signOutUser()}
                </Route> */}