import React from 'react';
import withLoader from '../hocs/withLoader';

const BlogPosts = ({ data }) =>
    <ul>
        {data.map(({ title }) => <li>{title}</li>)}
    </ul>

export default withLoader(BlogPosts);