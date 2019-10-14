import axios from 'axios';

const baseApiUrl = 'https://geodoo.work/wp-json/wp/v2';

export default {
    getBlogPosts: async () => {
        const { data } = await axios.get(`${baseApiUrl}/posts`);
        return data;
    },
};