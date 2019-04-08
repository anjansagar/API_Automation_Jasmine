
  describe ("this is a section",function(){
   it('demo ui test',function()
{
  browser.driver.manage().window().maximize();
browser.get('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register')
browser.sleep(3000)
element(by.name('firstName')).sendKeys('test')
browser.sleep(1000)
element(by.name('lastName')).sendKeys('user')
browser.sleep(2000)
element(by.name('username')).sendKeys('test')
browser.sleep(1000)
element(by.name('password')).sendKeys('welcome')
browser.sleep(3000)

element(by.className('btn btn-primary')).click()
browser.sleep(3000)
  });   

});
