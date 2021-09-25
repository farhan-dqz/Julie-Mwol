/* Copyright ©  @Farhan_dqz.
Licensed under the  GPL-3.0 License;
you can copy file. but credit must be there!!!
JulieMwol - Farhan-dqz
*/

const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "```Downloading media...```"

Julie.addCommand({pattern: 'instagram ?(.*)', fromMe: true, desc: "Downloads from instagaram" , dontAddCommandList: true }, async (message, match) => {
    
    const {data} = await axios(`https://zenzapi.xyz/api/downloader/instagram?url=${match[1]}&apikey=farhandqz`)
    const { status, result } = data
if(!status) return await message.sendMessage('not found')
await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });

let julie =  await axios.get(`${result.url}`)
const msg = `${result.type}`
if (msg === 'image') { await message.sendMessage(Buffer.from(julie.data), MessageType.image, {
    caption: msg,
  })}
        
if (msg === 'video') { await message.sendMessage(Buffer.from(julie.data), MessageType.video, {
    caption: msg,
  })}
 return await message.client.sendMessage(message.jid, "```Link Invalid```", MessageType.text);
});
