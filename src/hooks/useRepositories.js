import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    // const [loading, setLoading] = useState(false);
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        // Other options
    });



    const fetchRepositories = async () => {
        // setLoading(true);

        // const response = await fetch('http://192.168.0.102:5000/api/repositories');
        // const json = await response.json();

        // setLoading(false);
        // setRepositories(json);
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