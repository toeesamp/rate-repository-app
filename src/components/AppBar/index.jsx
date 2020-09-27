import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarColor,
    },
    text: {
        color: theme.colors.appBarText,
        fontFamily: theme.fonts
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

export default AppBar;