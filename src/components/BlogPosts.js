import React from 'react';
import withLoader from '../hocs/withLoader';

export const BlogPosts = ({ data }) => {
    return (
        <ul data-testid="blog-posts">
            {data.map(({ id, title: { rendered } }) => <li key={id}>{rendered}</li>)}
        </ul>
    )
}

export default withLoader(BlogPosts);