import axios from 'axios';

const baseUrl = 'https://geodoo.work/wp-json/wp/v2';

export default {
    getBlogPosts: () => axios.get(`${baseUrl}/posts`)
};