module.exports.run = async (bot, message, args) => {
  const member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) || message.member;
  if(args[0] && args[0].toLowerCase() === "help") return help.helpMessage(message);
  if(!member) return error.invalid(message, "User", "User annot be found")
  let embed = new Discord.RichEmbed()
    .setDescription("**" + member.user.username + "**'s avatar (ID: " + member.id + ")\n　\n[Open avatar in browser](" + member.user.avatarURL + ")")
    .setImage(member.user.avatarURL)
    .setColor("#417af4");
    message.channel.send(embed)
     
  };

  const me = bot.users.get("357842475328733186");
exports.information = {
  trigger: {
    name: "avatar",
    aliases: "ava",
  },
  permission: {
    perm: "avatar",
    group: "Miscellaneous"
  },
  help: {
    name: "Avatar",
    description: "Show a users avatar",
    usage: "<User>",
    examples: [me.tag, me.id],
  }
}


