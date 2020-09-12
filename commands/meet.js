const Discord = require("discord.js")
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {

    var user = message.author;

    let embed = new Discord.MessageEmbed;
    embed.setTitle("CSC ZOOM MEETING");
    embed.setDescription("**When?** \n9/15/2020 @ 12:30pm \n\n[Click here](https://tinyurl.com/2021cscqanda) to join");
    embed.setColor(colors.blue);

    const m = await message.channel.send(`${user}`, embed);

}

module.exports.help = {
    name: "meet",
    aliases: ["zoom"]
}