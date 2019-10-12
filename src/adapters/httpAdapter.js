import axios from 'axios';

export default {
    getBlogPosts: () => axios.get('https://geodoo.work/wp-json/wp/v2/posts')
};