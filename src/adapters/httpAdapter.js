import axios from 'axios';

const baseApiUrl = 'https://geodoo.work/wp-json/wp/v2';

export default {
    getBlogPosts: () => axios.get(`${baseApiUrl}/posts`)
};