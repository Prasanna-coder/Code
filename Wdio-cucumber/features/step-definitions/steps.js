import { Given, When, Then } from '@wdio/cucumber-framework';
// import { expect } from 'chai'
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
    const windowSize = await browser.getWindowSize();
    console.log(windowSize);
    // expect(await browser.getUrl()).to.contain('sauce')
    // const url= await browser.getUrl()
    await expect(browser).toHaveUrlContaining('sauce');
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    // await LoginPage.waitForDisplayed({ timeout: 10000 });
    await LoginPage.login(username, password); 
    // expect(await LoginPage.getText()).to.be.equal('Data transmitted successfully!') 
});

Then(/^I should see a title heading saying (.*)$/, async (heading) => {
     expect(await SecurePage.title).toBeExisting();
     expect(await SecurePage.title).toHaveTextContaining(heading).log;
});

Then(/^I open new window$/, async () => {
    await browser.newWindow("");
});

Then(/^sleep$/, async () => {
    await browser.pause(10000);
});