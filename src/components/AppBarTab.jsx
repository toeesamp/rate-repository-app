import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
import Text from "./Text";
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: theme.paddings.big
    },
    text: {
        color: theme.colors.appBarText,
        fontWeight: theme.fontWeights.bold
    }
});

const AppBarTab = React.forwardRef((props, ref) => {
    return (
        <View {...props} ref={ref} style={styles.container}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    );
});

AppBarTab.displayName = 'AppBarTab';
export default AppBarTab;