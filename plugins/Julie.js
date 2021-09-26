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
    return await message.sendMessage(CMD_HELP);
  }
);

Julie.addCommand({ pattern: "list ?(.*)", fromMe: false, dontAddCommandList: true },
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
    return await message.sendMessage(CMD_HELP);
  }
);
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
          : " ".repeat(8 - match[2].length) + " \n📓 ");
      if (command.desc !== "")
        CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
    }
  });
  return await message.sendMessage(CMD_HELP);
}
);

Julie.addCommand({ pattern: "list ?(.*)", fromMe: true, dontAddCommandList: true },
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
  return await message.sendMessage(CMD_HELP);
}
);
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: "help ?(.*)", fromMe: false, dontAddCommandList: true },async (message, match) => {
      let CMD_HELP = "";
      Asena.commands.map(async (command, index) => {
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
          CMD_HELP += `${index} ${match.length >= 3 ? HANDLER + match[2] : command.pattern
            }\n${command.desc}\n\n`;
        }
      });
      return await message.sendMessage("```" + CMD_HELP + "```");
    }
  );

  Julie.addCommand({ pattern: "list ?(.*)", fromMe: false, dontAddCommandList: true },
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
            CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n");
        }
      });
      return await message.sendMessage(CMD_HELP);
    }
  );

  }