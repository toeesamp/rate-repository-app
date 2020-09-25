import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        marginLeft: 15,
        color: theme.colors.error
    },
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
        borderColor: theme.colors.error,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: theme.paddingsAndMargins.normal,
        marginTop: theme.paddingsAndMargins.normal,
        paddingVertical: theme.paddingsAndMargins.normal,
        paddingHorizontal: theme.paddingsAndMargins.big
    }
});

const FormikTextInput = ({ name, secure, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;
    let inputFieldStyle = styles.inputField;

    if (showError) {
        inputFieldStyle = styles.inputFieldError;
    }
    return (
        <>
            <TextInput
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                secureTextEntry={secure}
                style={inputFieldStyle}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;