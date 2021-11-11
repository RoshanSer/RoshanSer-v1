/* 
   Re:Roshan
*/
const Roshan = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Inbox Block System
const INBO1 = "_~~~••• RoshanSer •••~~~_* \n\n\n *I am blocking you.* \n\n *REASON:THERI ITTATH KOND🖐🏻🖐🏻* \n Enjoy without bot/make request to unblock in Developer Bot Group \n\n Link:https://chat.whatsapp.com/KequP491eI1IVVipViyWQP"
 if (Config.INBO1 == 'true') {
Roshan.addCommand({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1ichu = new RegExp('thayoli')
        let regexb2ichu = new RegExp('myre')
        let regexb3ichu = new RegExp('kunna')
        let regexb4ichu = new RegExp('poorimone')
        let regexb5ichu = new RegExp('myr')
        let regexb6ichu = new RegExp('patti')
        let regexb7ichu = new RegExp('oombi')
        let regexb8ichu = new RegExp('thendi')
// Now, Export Data
          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb7ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb8ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));


}
