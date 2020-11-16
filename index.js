const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "";
client.on("ready", () => {
  console.log(Logged in as ${client.user.tag}!);
  client.user.setGame( BY|🔸 THOMAS 🔸|, "http://twitch.tv/S-F%22);
});

client.on("guildMemberAdd", member => {
  let memberavatar = member.user.avatarURL;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":bust_in_silhouette: | name : ", ${member})
    .addField(":microphone2: | Welcome!", Welcome to the server, ${member})
    .addField(":id: | User :", "[" + ${member.id} + "]")
    .addField(
      ":family_mwgb: | Your are the member",
      ${member.guild.memberCount}
    )
    .addField("Name", <@ + ${member.id} + >, true)
    .addField("Server", ${member.guild.name}, true)
    .setFooter(**${member.guild.name}**)
    .setTimestamp();

  member.send(embed);
});

/////////////////////

client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "welcome");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":bust_in_silhouette: | نـــاو ： ", ${member})
    .addField(
      ":nazar_amulet:  | 𝚆𝙴𝙻𝙲𝙾𝙼 ",
      "¦" + بەخـێربێیت بۆ سـێرڤـەرەکەمان + "¦"
    )
    .addField(
      ":id: | ئــایــدی میــمــبــەر ：",
      "⌜" + ${member.id} + "⌟"
    )
    .addField(
      ":1234: | تـۆکـەسی ژمارە：",
      "¦" + ${member.guild.memberCount} + "¦"
    )
    .addField(":shield:|𝐒𝐄𝐑𝐕𝐄𝐑：", ${member.guild.name}, true)
    .setImage(
      " "
    )
    .setFooter(◢${member.guild.name}◣)
    .setTimestamp();

  channel.sendEmbed(embed);

  client.login("NzU0NjExNTIyMTUxNTE0MjEz.X13Qvg.10RAtfVGHgDXVN_Wbbp4p51KadE");
});
