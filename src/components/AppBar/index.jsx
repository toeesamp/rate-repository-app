import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import { AUTHORIZED_USER } from '../../graphql/queries';
import { Link } from 'react-router-native';
import Text from './../Text';
import AuthStorageContext from '../../contexts/AuthStorageContext';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarColor,
    },
    tabContainer: {
        padding: theme.paddingsAndMargins.big
    },
    text: {
        color: theme.colors.appBarText,
        fontFamily: theme.fonts,
        fontWeight: theme.fontWeights.bold
    },
    scrollView: {
        display: "flex",
        flexDirection: 'row'
    }
});


// const AppBarTab = (props) => {
//     return (
//         <Link to={props.linkAddress} component={TouchableWithoutFeedback} >
//             <View style={styles.tabContainer}>
//                 <Text style={styles.text}>{props.text}</Text>
//             </View>
//         </Link>
//     );
// };

const AppBarTab = ({ children, ...props }) => {
    return (
        <TouchableWithoutFeedback style={styles.tabTouchable} {...props}>
            <View style={styles.tabContainer}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const AppBar = () => {
    const { data } = useQuery(AUTHORIZED_USER);
    const authorizedUser = data ? data.authorizedUser : undefined;

    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    const history = useHistory();

    const signOutUser = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        history.push('/');
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollView}>
                <Link to="/" component={AppBarTab}>
                    Repositories
                </Link>
                {authorizedUser
                    ? <AppBarTab onPress={signOutUser}>Sign out</AppBarTab>
                    : (<Link to="/signin" component={AppBarTab}>
                        Sign in
                       </Link>
                  )
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;