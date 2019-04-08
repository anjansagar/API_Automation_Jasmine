
  describe ("this is a section",function(){
   it('demo ui test',function()
{
  browser.driver.manage().window().maximize();
browser.get('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
browser.sleep(3000)
element(by.model('vm.username')).sendKeys('test')
browser.sleep(2000)
element(by.model('vm.password')).sendKeys('welcome')
browser.sleep(2000)
element(by.className('btn btn-primary')).click()
browser.sleep(2000)
  });   

});
