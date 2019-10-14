import React from 'react';
import adapter from 'adapters';
import BlogPosts from 'components/BlogPosts';

class App extends React.Component {
  state = {
    blogPosts: null,
  }

  async componentDidMount() {
    const blogPosts = await adapter.getBlogPosts();

    this.setState({ blogPosts });
  }

  render() {
    const { blogPosts } = this.state;

    return (
      <BlogPosts data={blogPosts} />
    );
  }
}

export default App;
