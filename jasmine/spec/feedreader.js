/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test write a loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url ok', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.length).not.toBe(0);
                expect(feed.url).toMatch(/^(http|https)/);
            }); 
        });
        /* This test write that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name ok', function(){
           allFeeds.forEach(function(feedName){
                expect(feedName.name).toBeDefined();
                expect(feedName.name).not.toBe('');
           }); 
        });
    });

/* New test suite named "The menu" */
describe('The menu', function(){
    // This test ensures the menu element is hidden by default.
    it('hidden by default', function(){
        expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    // This test that ensures the menu changes visibility when the menu icon is clicked. 
    it('visibility when was clicked ,Toggle on', function(){
        var hamburgerMenu = document.querySelector('.menu-icon-link');
        // This test does the menu Display when cklicked.
        hamburgerMenu.click();
        
        expect($('body').hasClass('menu-hidden')).toBe(false);
        // This test does it hide when cklicked again
        hamburgerMenu.click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
    });
});

    /* New test suite named "Initial Entries" */
describe('Initial Enties', function(){
    // Created class variables in this scope
    var feedClass = document.querySelector('.feed');
    // The Jasmine's beforeEach and asynchronous done() function.
    beforeEach(function(done){
        loadFeed(0,done());
    });
    // This is the test that ensures when the loadFeed function is called and work
    it('loadFeed function is called after one', function(done){
        var entryFeed = feedClass.querySelectorAll('.entry').length;
        
        expect(entryFeed).toBe(0);
        
        done();
    });
});
    
    /*New test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        // Created class variables an variable in this scope
        var feed = document.querySelector('.feed');
        var firstFeed;
        var secondFeed;
        // The Jasmine's beforeEach and asynchronous done() function.
        beforeEach(function(done){
            loadFeed(0, function(){
                firstFeed = feed.innerHTML;            
                    
                loadFeed(1, function(){
                    secondFeed = feed.innerHTML;
                    done();
            });
        })
        });
        // This test actually changes the content in the loadFeed function
        it('Changes the feed content', function(done){
            secondFeed = feed.innerHTML;
            
            expect(firstFeed).toBeDefined();
            expect(secondFeed).toBeDefined();
            expect(firstFeed).not.toEqual(secondFeed);
            
            done();
        });
    });
}());
