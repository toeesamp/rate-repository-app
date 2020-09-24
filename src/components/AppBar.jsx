import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarColor,
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        color: theme.colors.appBarText
    }
});

const AppBar = () => {

    // const repositoryTabRef = useRef();
    // const loginTabRef = useRef();


    // const showRepositories = () => {
    //     console.log('repository tab button pressed');
    // };

    // const showLogin = () => {
    //     console.log('login tab button pressed');
    // };

    return (
        <View style={styles.container}>
            <AppBarTab text={"Repositories"} linkAddress={"/"} />
            <AppBarTab text={"Sign in"} linkAddress={"/signin"} />
        </View>
    );
};

{/* <View style={styles.container}>
<AppBarTab ref={repositoryTabRef} text={"Repositories"} linkAddress={"/"} />
<AppBarTab ref={loginTabRef} text={"Login"} linkAddress={"/signin"} />
</View> */}

{/* <View style={styles.container}>
<TouchableWithoutFeedback onPress={showRepositories}>
    <AppBarTab ref={repositoryTabRef} text={"Repositories"} />
</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={showLogin}>
    <AppBarTab ref={loginTabRef} text={"Login"} />
</TouchableWithoutFeedback>
</View> */}

AppBar.displayName = 'AppBar';

export default AppBar;