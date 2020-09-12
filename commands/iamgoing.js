module.exports.run = async (bot, message, args) => {


    if(message.guild.id != "6567895989876578") return message.reply("No events to sign up for smfh");


    var sender = message.author.username;

    const guild = bot.guilds.cache.get('453362227970441216');

    const m = await message.channel.send("You signed up!");
    guild.owner.send(`${sender} signed up!`)

}

module.exports.help = {
    name: "iamgoing",
    aliases: []
}