const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    var user = message.author;

    let embed = new Discord.MessageEmbed();
    embed.setColor(colors.red);
    embed.setTitle("Get Help/Info!");
    embed.setDescription("For help refer to <#453362925223149569>! \n\nIf more help is needed contact a <@&453362446728691722> or <@&709953488289005620>!")

    const m = await message.channel.send(`${user}`, embed);

}

module.exports.help = {
    name: "help",
    aliases: []
}