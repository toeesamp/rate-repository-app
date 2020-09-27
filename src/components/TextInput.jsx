/* eslint-disable no-unused-vars */
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    inputField: {
        borderColor: "gray",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: theme.paddingsAndMargins.normal,
        marginTop: theme.paddingsAndMargins.normal,
        paddingVertical: theme.paddingsAndMargins.normal,
        paddingHorizontal: theme.paddingsAndMargins.big
    },
    inputFieldError: {
        borderColor: theme.colors.error
    }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.inputField,
    error && styles.inputFieldError,
    style
];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;