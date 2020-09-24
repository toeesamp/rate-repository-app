import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from "./Text";
import RepositoryStatItem from "./RepositoryStatItem";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        paddingBottom: theme.paddingsAndMargins.normal
    },
    upperContainer: {
        // backgroundColor: 'red',
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    upperInnerContainer: {
        // backgroundColor: 'lime',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: theme.paddingsAndMargins.normal,
        flexShrink: 1
    },
    lowerContainer: {
        // backgroundColor: 'deepskyblue',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    boldText: {
        fontSize: 18,
        fontWeight: theme.fontWeights.bold
    },
    text: {
        fontSize: 16
    },
    avatar: {
        width: 40,
        height: 40,
        margin: theme.paddingsAndMargins.normal,
        borderRadius: 5,
        
    },
    language: {
        backgroundColor: theme.colors.languageBackground,
        borderRadius: 4,
        color: 'white',
        padding: 3,
        marginTop: 5
    }

});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: item.ownerAvatarUrl }} />
                <View style={styles.upperInnerContainer}>
                    <Text style={styles.boldText}>{item.fullName}</Text>
                    <Text style={styles.text}>{item.description}</Text>
                    <Text style={styles.language} >{item.language}</Text>
                </View>
            </View>
            <View style={styles.lowerContainer}>
                <RepositoryStatItem label={"Stars"} value={item.stargazersCount}/>
                <RepositoryStatItem label={"Forks"} value={item.forksCount}/>
                <RepositoryStatItem label={"Reviews"} value={item.reviewCount}/>
                <RepositoryStatItem label={"Rating"} value={item.ratingAverage}/>
            </View>
        </View>
    );
};

export default RepositoryItem;