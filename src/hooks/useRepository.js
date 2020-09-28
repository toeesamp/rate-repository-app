import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({id}) => {
    const { data, ...result } = useQuery(GET_REPOSITORY, {
        variables: {id}
    });

    return { repository: data ? data.repository : undefined, ...result };
};

export default useRepository;