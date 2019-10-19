const { I } = inject();
// Add in your custom step files

When('I navigate to the homepage', () => {
  I.amOnPage('http://localhost:3000');
});

Then('I can see a list of 10 blog posts', () => {
  I.seeNumberOfElements('[data-testid="blog-post"]', 10);
});
