import React from 'react'
import { render } from '@testing-library/react'
import adapter from '../adapters';
import { BlogPosts } from './BlogPosts'

test('loads and displays greeting', () => {
    const { data } = adapter.getBlogPosts();
    const { getAllByText } = render(<BlogPosts data={data} />)

    expect(getAllByText('the', { exact: false }).length).toBe(2);
})