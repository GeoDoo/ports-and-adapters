import React from 'react';
import withLoader from 'hocs/withLoader';
import { emptyListOfBlogPostsMessage } from 'messages/empty.json';

export const BlogPosts = ({ data }) => {
    return (
        <div data-testid="blog-posts">
            {
                data.length
                    ?
                    <ul>
                        {data.map(({ id, title: { rendered } }) => <li key={id} data-testid="blog-post">{rendered}</li>)}
                    </ul>
                    :
                    <p>{emptyListOfBlogPostsMessage}</p>
            }
        </div>
    )
}


export default withLoader(BlogPosts);