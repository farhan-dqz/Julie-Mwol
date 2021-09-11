const Julie = require("../events");
const Config = require("../config");
Julie.addCommand(
  { pattern: "help ?(.*)", fromMe: false, dontAddCommandList: true },
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
          (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*📓\n' +
          (command.desc === ""
            ? "\n\n"
            : " ".repeat(8 - match[2].length) + " \n ");
        if (command.desc !== "")
          CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
      }
    });
    return await message.sendMessage(CMD_HELP);
  }
);