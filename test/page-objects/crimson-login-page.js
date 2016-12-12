var page = require('./page');
var CrimsonResultsPage = require('./crimson-results-page');

function CrimsonLogin (webdriver) {
  page.call(this, webdriver, 'https://app-staging.crimsoneducation.org/');
}

CrimsonLogin.prototype = Object.create(page.prototype);
CrimsonLogin.prototype.constructor = CrimsonLogin;

CrimsonLogin.prototype.typeUserName = function(searchQuery) {
  return this.driver.findElement({ name: 'email'  }).sendKeys(searchQuery);
};

CrimsonLogin.prototype.typePassword = function(searchQuery) {
  return this.driver.findElement({ name: 'password'  }).sendKeys(searchQuery);
};

CrimsonLogin.prototype.clickLoginButton = function() {
  this.driver.findElement({ css: 'button_9jg6u' }).click();
  this.waitFor({ id: 'root' });
  return new CrimsonResultsPage(this.driver);
};

module.exports = CrimsonLogin;
