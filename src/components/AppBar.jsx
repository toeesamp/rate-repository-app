import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarColor,
        // display: 'flex',
        // flexDirection: 'row'
    },
    text: {
        color: theme.colors.appBarText
    },
    scrollView: {
        display:"flex",
        flexDirection: 'row'
      }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollView}>
                <AppBarTab text={"Repositories"} linkAddress={"/"} />
                <AppBarTab text={"Sign in"} linkAddress={"/signin"} />
            </ScrollView>
        </View>
    );
};

// AppBar.displayName = 'AppBar';

export default AppBar;