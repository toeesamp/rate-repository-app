import React from 'react';
import * as yup from 'yup';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingBottom: theme.paddingsAndMargins.normal
    },
    signInButton: {
        backgroundColor: theme.colors.languageBackground,
        paddingHorizontal: theme.paddingsAndMargins.normal,
        paddingVertical: theme.paddingsAndMargins.big,
        marginTop: theme.paddingsAndMargins.normal,
        textAlign: "center",
        marginHorizontal: theme.paddingsAndMargins.normal,
        color: theme.colors.appBarText,
        fontWeight: theme.fontWeights.bold,
        borderRadius: 5
    }
});

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
        password: yup
        .string()
        .required('Password is required'),
});

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
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;