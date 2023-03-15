import Page from './page.js';
/*
 sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /*
      define selectors using getter methods
     */
    get U_name () {
        return $('#user-name');
    }

    get Pwd () {
        return $('#password');
    }

    get l_btn () {
        return $('#login-button');
    }

    /*
      a method to encapsule automation code to interact with the page
      e.g. to login using username and password
     */
    async login (username, password) {
        await this.U_name.addValue(username);
        await this.Pwd.addValue(password);
        await this.l_btn.click();
        // const elem = await $("//input[@id='login-button']")
        // await expect(elem).toBeClickable().click(); 
    }

    /*
      overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}
export default new LoginPage();