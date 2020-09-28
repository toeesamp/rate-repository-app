import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    const fetchRepositories = async () => {
        if (!loading) {
            setRepositories(data.repositories);
        }
    };

    useEffect(() => {
        fetchRepositories();
    }, [data, error, loading]);

    return { repositories, loading, refetch: fetchRepositories  };
};

export default useRepositories;