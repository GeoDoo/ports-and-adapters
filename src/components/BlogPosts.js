import React from 'react';
import withLoader from '../hocs/withLoader';

const BlogPosts = ({ data }) => {
    return (
        <ul>
            {data.map(({ id, title: { rendered } }) => <li key={id}>{rendered}</li>)}
        </ul>
    )
}


export default withLoader(BlogPosts);