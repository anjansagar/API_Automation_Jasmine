describe ("this is a section",function(){
    //declare a variable globally
    var title;

    //no need to give the browser.get for every tc. globally we can declare.
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        title=browser.getTitle();
    });

    //after each fun() we can declare whatever required.
    afterEach(function(){
    browser.sleep(3000);
  console.log("after it block")
    })


    it ("test1",function(){
     
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        
    
        element(by.id('gobutton')).click();
    
        expect(element(by.binding('latest')).getText()).
            toEqual('3'); // This is wrong!
          
});
it ("test2",function(){
    
     //   browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
    
        element(by.id('gobutton')).click();
    
        expect(element(by.binding('latest')).getText()).
            toEqual('9'); // This is wrong!


});
it ("test3",function(){
   
       // browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(9);
    
        element(by.id('gobutton')).click();
    
        expect(element(by.binding('latest')).getText()).
            toEqual('10'); // This is wrong!
});
it ("test4",function(){
    //browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        
    
        element(by.id('gobutton')).click();
    
        expect(element(by.binding('latest')).getText()).
            toEqual('9'); // This is wrong!
});
it ("test5",function(){
    title.then(function(text){
        console.log(text);
        expect(title).toEqual("Super Calculato");
    });
});});
