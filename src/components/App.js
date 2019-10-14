import React from 'react';
import adapter from 'adapters';
import BlogPosts from 'components/BlogPosts';

class App extends React.Component {
  isAlreadyMounted = false;

  state = {
    blogPosts: null,
  }

  async componentDidMount() {
    this.isAlreadyMounted = true;

    const blogPosts = await adapter.getBlogPosts();

    if (this.isAlreadyMounted) {
      this.setState({ blogPosts });
    }
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  render() {
    const { blogPosts } = this.state;

    return (
      <BlogPosts data={blogPosts} />
    );
  }
}

export default App;
