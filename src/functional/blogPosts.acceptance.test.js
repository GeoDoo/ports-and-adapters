Feature('Blog posts list');

Scenario('I can see the blog posts list', (I) => {
    I.amOnPage('http://localhost:3000');
    I.see('We are the champions');
    I.see('Johnson at the EU');
    I.see('Hey three');
    I.see('Hohoho four');
    I.see('Now now now');
    I.see('This is it!');
    I.see('Problems');
    I.see('But why?');
    I.see('Here it is Sir!');
    I.see('Bad ass motherfuckers');
});
