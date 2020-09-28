import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import Constants from 'expo-constants';
import theme from '../../theme';
// import AppBarTab from "./AppBarTab";
import { AUTHORIZED_USER } from '../../graphql/queries';
import { Link } from 'react-router-native';
import Text from './../Text';
import AuthStorageContext from '../../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarColor,
    },
    tabContainer: {
        padding: theme.paddingsAndMargins.big
    },
    text: {
        color: theme.colors.appBarText,
        fontFamily: theme.fonts,
        fontWeight: theme.fontWeights.bold
    },
    scrollView: {
        display:"flex",
        flexDirection: 'row'
      }
});

const signOutUser = async () => {
    console.log('test');
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
};

const AppBarTab = (props) => {
    
    // if (props.text.valueOf() === "Sign out".valueOf()) {
    // if (false) {
    //     signOutUser();
    // }
    return (
        <Link to={props.linkAddress} component={TouchableWithoutFeedback} >
            <View style={styles.tabContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </Link>
    );
};

const AppBar = () => {
    const { data, error, loading } = useQuery(AUTHORIZED_USER);

    console.log(data);

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollView}>
            <AppBarTab text={"Repositories"} linkAddress={"/"} />
                {data && data.authorizedUser
                    ? <AppBarTab text={"Sign out"} linkAddress={"/signout"} />
                    : <AppBarTab text={"Sign in"} linkAddress={"/signin"} />
                }
                
            </ScrollView>
        </View>
    );
};

export default AppBar;