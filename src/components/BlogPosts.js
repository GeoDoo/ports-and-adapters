import React from 'react';
import withLoader from 'hocs/withLoader';
import { emptyListOfBlogPosts } from 'messages/empty.json';

export const BlogPosts = ({ data }) => {
    return (
        <div data-testid="blog-posts">
            {
                data.length
                    ?
                    <ul >
                        {data.map(({ id, title: { rendered } }) => <li key={id}>{rendered}</li>)}
                    </ul>
                    :
                    <p>{emptyListOfBlogPosts}</p>
            }
        </div>
    )
}


export default withLoader(BlogPosts);