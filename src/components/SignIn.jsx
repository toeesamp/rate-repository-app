import React from 'react';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
// import TextInput from './TextInput';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingBottom: 10
    },
    signInButton: {
        backgroundColor: theme.colors.languageBackground,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 10,
        textAlign: "center",
        marginHorizontal: 10,
        color: theme.colors.appBarText,
        fontWeight: theme.fontWeights.bold,
        borderRadius: 5
    }
});

const initialValues = {
    username: '',
    password: '',
};

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" secure={false} />
            <FormikTextInput name="password" placeholder="Password" secure={true} />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <Text style={styles.signInButton}>Sign in</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;