import React from 'react';
// import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';
// import { useApolloClient } from '@apollo/client';
import { useParams } from 'react-router-dom';

import RepositoryList from "./RepositoryList";
import RepositoryItem from './RepositoryList/RepositoryItem';
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import theme from '../theme';
import { GET_REPOSITORY } from '../graphql/queries';



const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.mainBackground
    },
});

const SingleRepository = () => {
    const id = useParams().id;

    const { data } = useQuery(GET_REPOSITORY, {
        variables: {id}
    });

    return (
        <>
            {data && <RepositoryItem item={data.repository} showLink={true} />}
        </>
    );
};

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/repositories/:id">
                    <SingleRepository />
                </Route>
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