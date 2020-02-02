
"use strict";
const { openBrowser, closeBrowser, goto,  screenshot } = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

const {login}=require('../tests/modelPage/LoginPage');


beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};

step("Login Sahi <user> <password>", async (user,password) => {
    await goto('http://sahitest.com/demo/training/login.htm');
    await login(user,password);
    gauge.screenshot();

});
