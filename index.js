const puppeteer = require('puppeteer')


async function startPuppeteer() {
    const browser = await puppeteer.launch();
    console.log('Start browser')
    const page = await browser.newPage();
    console.log("open page")
   await page.goto(process.argv[2]);
    await page.setViewport({width: 1000, height: 500})
    page.on('load', () => console.log("page loaded"));
    console.log('get page')
    await page.screenshot({path: 'example.png'});
    await page.reload()
    await browser.disconnect()
    console.log('take screenshot')
    await browser.close();
    console.log('close browser')
    console.log(`your screenshot has name example.png in path ${__dirname} `)

}

(function () {
    process.argv.length > 2 ?  startPuppeteer() : console.log("enter URL!")
})()