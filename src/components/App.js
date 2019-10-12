import React from 'react';
import BlogPosts from './BlogPosts';

const blogPosts = [{
  title: 'We are the champions'
},{
  title: 'Johnson at the EU'
}];

class App extends React.Component {
  render() {
    return (
      <BlogPosts callback={() => blogPosts} />
    );
  }
}

export default App;
