const blogPosts = [{
    id: 1,
    title: { rendered: 'We are the champions' }
}, {
    id: 2,
    title: { rendered: 'Johnson at the EU' }
}];

export default {
    getBlogPosts: () => ({ data: blogPosts })
};