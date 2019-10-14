Feature('Blog');

Scenario('I can see a list of blog posts when I go to the homepage', (I) => {
    I.amOnPage('http://localhost:3000');
    I.seeNumberOfElements('[data-testid="blog-post"]', 10);
});
