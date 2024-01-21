import { performLogin } from "../utils/loginUtils.js";
import logoutPage from "../pages/logout.page.js";
describe('Amazon web page', ()=>{      
    it('Amazon login page ', async () =>{
    await browser.url('/');
    await browser.maximizeWindow();
    //await browser.pause(30000);
    await performLogin('abcdt0340@gmail.com','Winter@123');
    })

    it('Logout from Amazon Web Page', async () => {
        await browser.pause(1000);
        await logoutPage.performLogout();
        const  currentURL =  await browser.getUrl(); 
       await expect(currentURL).toContain('https://www.amazon.se/ap/signin?');
    })
})