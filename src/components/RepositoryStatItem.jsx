import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from "./Text";

const styles = StyleSheet.create({
    lowerInnerContainer: {
        // backgroundColor: 'deepskyblue',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    boldText: {
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.bold
    },
    text: {
        fontSize: theme.fontSizes.body
    }
});

const numberFormatter = (number) => {
    return Math.abs(number) > 999 ? Math.sign(number) * ((Math.abs(number) / 1000).toFixed(1)) + 'k' : Math.sign(number) * Math.abs(number);
};

const RepositoryStatItem = ({ label, value }) => {
    return (
        <View style={styles.lowerInnerContainer}>
            <Text style={styles.boldText}>{numberFormatter(value)}</Text>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
};

export default RepositoryStatItem;