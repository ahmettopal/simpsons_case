import API from '../api';
import endpoints from '../api/endpoints';
import handleError from '../api/handleError';
import axios from 'axios';

const getPosts = handleError(async () => {
    const { data } = await API.get(endpoints.simpsons);
    return [data, null];
});

export default {
    getPosts,
};