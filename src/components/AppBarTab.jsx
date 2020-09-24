import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
// import Constants from 'expo-constants';
import Text from "./Text";
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        padding: theme.paddingsAndMargins.big
    },
    text: {
        color: theme.colors.appBarText,
        fontWeight: theme.fontWeights.bold
    }
});

const AppBarTab = (props) => {
    return (
        <Link to={props.linkAddress} component={TouchableWithoutFeedback}>
            <View style={styles.container}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </Link>
    );
};

// AppBarTab.displayName = 'AppBarTab';

export default AppBarTab;