/**
 * tools: casperjs/phantomjs
 *
 * This test completes the _____ activity
 * 
 * @author J.Stone
 */

var x = require('casper').selectXPath;
var casper = require('casper').create();
var login = 'http://voxy.com/';

console.log('1.Navigate to voxy.com');
console.log('2.[user:u1@voxy.com/pwd:thing]');
console.log('3.Select the first goal/track available');

casper.start(login, function() {
	this.click(x('//*[@id="header_login_Btn"]'));
});

casper.wait(1000, function() {
	//fill out and submit login form
	this.fill('form#header_login', {
		'username':    'u1@voxy.com',
		'password':    'things'
	}, true);
});

casper.then(function() {
	this.echo('current url: ' + this.getCurrentUrl());
	this.echo('the activity: ' + this.fetchText('#name'));
	//this.click(x('//*[@id="lesson-preview"]/div[2]/div/a'));
});


casper.run(function() {
	this.test.renderResults(true);
});
