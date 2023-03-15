import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect }  from 'chai';

Given(/^If I am currently in login page$/, async () => {
    await browser.url(`https://www.saucedemo.com/`);
    // browser.getUrl();
    expect(await browser.getUrl()).to.includes('saucedemo');
    expect(await browser.getUrl()).to.be.contains('sauce');
});

When(/^I will pass (\w+), (.+)$/,{timeout: 5 * 1000}, async (username, password) => {
    await $('#user-name').addValue(username); // "//input[@id='user-name']"
    expect(await username).to.contains("_user"); // "standard_user"
    await $('#password').setValue(password);
    expect(await password).to.be.contain("sauce"); // "secret_sauce"
    const l_btn = await $('#login-button'); // "//input[@id='login-button']" or *[value='Login']
    expect(await l_btn).to.be.haveOwnProperty
    l_btn.click();
});

Then(/^I want to see home page$/, async () => {
    const header = await $('.header_label');
    expect(await header).to.be.exist;
    await browser.pause(2000);
    await browser.scroll(0, 500);
    const foot = await $$('.footer ul li');
    expect(await foot).to.be.greaterThan;
    await browser.pause(5000);
    await browser.scroll(500, 0);
});

When(/^I click on element"([^"]*)?"$/, async (selector) => {
    const addCartButton=await $(selector);
    await addCartButton.waitForDisplayed({ timeout: 5000 });
    await addCartButton.click();
    await browser.pause(2000);
});

Then(/^I will enter data and validate$/, async () => {
    await $('#first-name').setValue("ASDFGH");
    await $('#last-name').setValue("QWERTY");
    await $('#postal-code').setValue("123456");
    await browser.scroll(0,300)
    const c_btn = await $("//input[@id='continue']")
    await c_btn.click();
    await browser.pause(2000);
    const f_btn = await $("//button[@id='finish']")
    await f_btn.click();
    await browser.scroll(500, 0);
    const txt = await $('.complete-header');
    expect(await txt).to.be.exist
    await browser.pause(3000);
});

Then(/^I want to logout$/, async()=>{
    const b_btn = await $('#back-to-products')
    await b_btn.click();
    await browser.pause(2000);
    await browser.scroll(500, 0);
    const menu_btn = await $('#react-burger-menu-btn')
    await menu_btn.click();
    await browser.pause(1000);
    const log_btn = await $("//a[@id='logout_sidebar_link']");
    await log_btn.click(); 
    await browser.pause(1000);
});