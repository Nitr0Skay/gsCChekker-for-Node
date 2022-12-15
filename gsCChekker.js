async function gscVerification(url) {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const GSC = await page.$("meta[name='google-site-verification']");
    const isGSC = (GSC === null) ? false : true;
    browser.close();

    return Promise.resolve(isGSC);
}

const prompt = require("prompt-sync")({sigint: true});
let url = prompt("Please, give the URL of the Site: ");

const x = gscVerification(url);
x.then((resolve) => {
     if(resolve) {
        console.log('This site has Google Search Console Tool');
     } else {
        console.log('This site probably has not Google Search Console Tool');
     }
});