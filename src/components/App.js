import React from 'react';
import adapter from 'adapters';
import BlogPosts from 'components/BlogPosts';

class App extends React.Component {
  render() {
    return (
      <BlogPosts callback={adapter.getBlogPosts} />
    );
  }
}

export default App;
