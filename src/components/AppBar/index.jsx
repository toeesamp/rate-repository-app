import React from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import Constants from 'expo-constants';
import theme from '../../theme';
import { AUTHORIZED_USER } from '../../graphql/queries';
import { Link } from 'react-router-native';
import Text from './../Text';

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


const AppBarTab = (props) => {
    return (
        <Link to={props.linkAddress} component={TouchableWithoutFeedback} >
            <View style={styles.tabContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </Link>
    );
};

const AppBar = () => {
    const { data } = useQuery(AUTHORIZED_USER);

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