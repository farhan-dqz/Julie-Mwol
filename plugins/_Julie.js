const Julie = require("../events");
const Config = require("../config");
const fs = require('fs');

if (Config.WORKTYPE == 'private') {

Julie.addCommand({ pattern: "help ?(.*)", fromMe: true, dontAddCommandList: true },
  async (message, match) => {
    let CMD_HELP = "";
    Julie.commands.map(async (command) => {
      if (
        command.dontAddCommandList === false &&
        command.pattern !== undefined
      ) {
        try {
          var match = command.pattern
            .toString()
            .match(/(\W*)([A-Za-z0-9ğüşiöç]*)/);
        } catch {
          var match = [command.pattern];
        }

        let HANDLER = "";

        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
          HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
        } else {
          HANDLER = ".";
        }
        CMD_HELP += '*🧞‍♂️' + 
          (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*\n' +
          (command.desc === ""
            ? "\n"
            : " ".repeat(8 - match[2].length) + " \n📓 ");
        if (command.desc !== "")
          CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
      }
    });
    return await message.sendMessage(CMD_HELP, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTPLK, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/logo.jpg')}}}});
  }
);
}

else if (Config.WORKTYPE == 'public') {

  Julie.addCommand({ pattern: "help ?(.*)", fromMe: false, dontAddCommandList: true },
    async (message, match) => {
      let CMD_HELP = "";
      Julie.commands.map(async (command) => {
        if (
          command.dontAddCommandList === false &&
          command.pattern !== undefined
        ) {
          try {
            var match = command.pattern
              .toString()
              .match(/(\W*)([A-Za-z0-9ğüşiöç]*)/);
          } catch {
            var match = [command.pattern];
          }
  
          let HANDLER = "";
  
          if (/\[(\W*)\]/.test(Config.HANDLERS)) {
            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
          } else {
            HANDLER = ".";
          }
          CMD_HELP += '*🧞‍♂️' + 
            (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*\n' +
            (command.desc === ""
              ? "\n"
              : " ".repeat(8 - match[2].length) + " \n```📓 ");
          if (command.desc !== "")
            CMD_HELP +=  command.desc + (command.usage === "" ? "```\n\n" : "\n\n");
        }
      });
      return await message.sendMessage(CMD_HELP, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTPLK, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/image/logo.jpg')}}}});
    }
  );
  }