import loginPage from "../pages/login.page.js";
import { performLogin } from "../utils/loginUtils.js";
describe('Amazon web page', ()=>{      
        it('Amazon login page ', async () =>{
        await browser.url('/');
        await browser.maximizeWindow();
        await browser.pause(10000);
        await performLogin('abcdt0340@gmail.com','Winter@123');
        await expect(loginPage.displayedtext).toHaveText('Hej, abcd');
    })
})
