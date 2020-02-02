const { click, write, $ } = require('taiko');


var txt_username = `//input[@name='user']`;
var txt_password = `//input[@name='password']`;
var btn_login = `//input[@value='Login']`;


exports.login = login;

async function login(user, password) {

    await write(user, $(txt_username));
    await write(user, $(txt_password));
    await click($(btn_login));


}