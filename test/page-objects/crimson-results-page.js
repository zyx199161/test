var page = require('./page');

function CrimsonResultsPage (webdriver) {
  page.call(this, webdriver, 'http://www.Crimson.com/?q=');
}

CrimsonResultsPage.prototype = Object.create(page.prototype);
CrimsonResultsPage.prototype.constructor = CrimsonResultsPage;

CrimsonResultsPage.prototype.getDisplayedResults = function() {
  return this.driver.findElements({ css: 'div.g' });
};

module.exports = CrimsonResultsPage;
