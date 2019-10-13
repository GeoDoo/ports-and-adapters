Feature('Blog posts list');

Scenario('I can see the blog posts list', (I) => {
    I.amOnPage('http://localhost:3000');
    I.seeNumberOfElements('.blog-post', 10);
});
