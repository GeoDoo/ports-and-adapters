import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import adapter from 'adapters';
import { BlogPosts } from 'components/BlogPosts'
import { emptyListOfBlogPosts } from 'messages/empty.json';

test('loads and displays blog posts', () => {
    const { data } = adapter.getBlogPosts();
    const { getAllByText } = render(<BlogPosts data={data} />)

    expect(getAllByText('the', { exact: false }).length).toBe(2);
});

test('shows message when there are no blog posts', () => {
    const data = [];
    const { getByTestId } = render(<BlogPosts data={data} />)

    expect(getByTestId('blog-posts')).toHaveTextContent(emptyListOfBlogPosts);
})