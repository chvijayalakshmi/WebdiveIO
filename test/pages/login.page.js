class loginPage {
    
    get loginbutton(){
        return $('#nav-link-accountList-nav-line-1');
    } 
    get emailid(){
        return $('#ap_email');
    }   
    get continuebutton(){
        return $('#continue');
    }
    get passwordinput(){
        return $('#ap_password')
    }
    get submitbutton(){
        return $('#signInSubmit')
    }
    get displayedtext(){
        return $('#nav-link-accountList-nav-line-1');
    }

      async performLogin(email, password) {
            await this.emailid.setValue(email);
            await this.continuebutton.click();
            //await browser.pause(20000);
            await this.passwordinput.setValue(password);
            await this.submitbutton.click();
        }
    
}
export default new loginPage();


