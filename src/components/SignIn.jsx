import React from 'react';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import theme from '../theme';
import Button from './Button';
import useSignIn from '../hooks/useSignIn';

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
            <Button testID="submitButton" style={styles.signInButton} onPress={onSubmit}>Sign in</Button>
        </View>
    );
};

const SignIn = () => {
    const [signIn] = useSignIn();

    let history = useHistory();

    const onSubmit = async (values) => {
        console.log('login values',values);
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });
            if (data.authorize.accessToken) {
                history.push("/");
            }
        } catch (e) {
            console.log('caught in signin.jsx',e);
        }
    };

    return <SignInContainer onSubmit={onSubmit} />;
};

export const SignInContainer = ({onSubmit}) => {

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