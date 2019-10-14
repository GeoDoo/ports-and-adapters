import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import adapter from 'adapters';
import { BlogPosts } from 'components/BlogPosts'
import { emptyListOfBlogPostsMessage } from 'messages/empty.json';

test('loads and displays blog posts', async () => {
    const data = await adapter.getBlogPosts();
    const { getAllByTestId } = render(<BlogPosts data={data} />)

    expect(getAllByTestId('blog-post')).toHaveLength(10);
});

test('shows message when there are no blog posts', () => {
    const data = [];
    const { getByTestId } = render(<BlogPosts data={data} />)

    expect(getByTestId('blog-posts')).toHaveTextContent(emptyListOfBlogPostsMessage);
})