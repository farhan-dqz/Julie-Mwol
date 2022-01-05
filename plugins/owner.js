const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        
            await message.client.sendMessage(message.jid,'*Abhikutti by Ajay-o-s*' , MessageType.text);
    }));


    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        
            await message.client.sendMessage(message.jid,'*Abhikutti by Ajay-o-s*' , MessageType.text);
       
    }));
