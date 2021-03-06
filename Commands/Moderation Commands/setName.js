module.exports.run = async (bot, message, args) => {
  let nName = args.join(" ");
  let mName = message.guild.members.get("455946985090842626");
  if(!nName) return help.helpMessage(message);
  if(nName === bot.user.nickname) return error.invalid(message, "nName", "Bot's name is the same")
  mName.setNickname(nName)
  success.botName(message, nName)
};

exports.information = {
  trigger: {
    name: "setname",
    aliases: "sn",
  },
  permission: {
    perm: "SetName",
    group: "Moderation"
  },
  help: {
    name: "SetName",
    description: "Sets Bot's name to your desired name",
    usage: "<New Name>",
    examples: ["Blobbbbbbby", "Moderation Bot"]
  }
}


