import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from "./RepositoryItem";
import useRepositories from '../../hooks/useRepositories';
import { useHistory } from "react-router-dom";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { repositories } = useRepositories();

    return <RepositoryListContainer repositories={repositories} />;
};

export const RepositoryListContainer = ({ repositories }) => {
    let history = useHistory();

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    const selectRepository = (id) => {
        history.push(`/repositories/${id}`);
    };

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectRepository(item.id) } >
                    <RepositoryItem item={item} showLink={false} />
                </TouchableOpacity>
            )}
        />
    );
};

export default RepositoryList;