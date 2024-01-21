import loginPage from "../pages/login.page.js";

export const performLogin = async (email, password) =>{
    const loginbuttonExist = await loginPage.loginbutton.isExisting();
        if(loginbuttonExist){
            await loginPage.loginbutton.click();
        }
        else{   //Ditt konto
            const linkText = $('=Ditt konto')
            await linkText.click();
            await loginPage.loginbutton.click();
            }
           await loginPage.performLogin(email, password);
};
