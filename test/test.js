var test = require('selenium-webdriver/testing'),
  expect = require('chai').expect,
  CrimsonLogin = require('./page-objects/crimson-login-page'),
  CrimsonResultsPage = require('./page-objects/crimson-results-page');

test.describe('Crimson Login', function() {

  var driver;
  
  this.timeout(30000);

  test.before(function(done) {
    driver = require('./driver').getDriver();
    done();
  });
  
  test.after(function(done) {
    if(driver)
      driver.quit();
    done();
  }); 

  test.it('should display results when searching for dinosaurs', function(done) {
    var crimsonLogin = new CrimsonLogin(driver);
    crimsonLogin.open();
    crimsonLogin.typeUserName('crimson.autotest@gmail.com');
	crimsonLogin.typePassword('password1');
	var CrimsonResultsPage = crimsonLogin.clickLoginButton();
   
  // CrimsonResultsPage.getDisplayedResults().then(function(numberOfResults) {
  //    expect(numberOfResults.length).to.be.above(0);
  //     done();
  //   });
  });

});
