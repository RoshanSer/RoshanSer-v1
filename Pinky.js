/* By Roshan
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 PLKAFN: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,
 PHONE: process.env.NUMBER === undefined ? '+918848859106' : process.env.NUMBER,   
 OA_NAME: process.env.DEPLOYER === undefined ? 'RoshanSer' : process.env.DEPLOYER,    
};
