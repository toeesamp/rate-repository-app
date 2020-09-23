import React, { useRef } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
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

    const repositoryTabRef = useRef();

    const onPress = () => {
        console.log('repository tab button pressed');
    };

    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <AppBarTab ref={repositoryTabRef} text={"Repositories"} />
            </TouchableWithoutFeedback>
        </View>
    );
};

AppBar.displayName = 'AppBar';

export default AppBar;