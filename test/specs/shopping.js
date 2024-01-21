import shoppingPage from "../pages/shopping.page.js";
import { performLogin } from "../utils/loginUtils.js";
describe('Amazon Shopping Page Test', () =>{
    it('Add an item to the cart', async() => {
        await browser.url('./');
        await browser.maximizeWindow();
        //await browser.pause(30000);
        await performLogin('abcdt0340@gmail.com','Winter@123');
        await shoppingPage.addToCart('iphone');
        await expect(shoppingPage.displayedtext.toHaveText('Har lagts till i kundvagnen'));
    })
    it('Delete Item from Cart', async ()=>{
        await shoppingPage.deleteFromCart();
        await expect(shoppingPage.deleteMessage.toHaveText('Din Amazon-kundvagn är tom'));
    })
})


