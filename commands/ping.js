module.exports.run = async (bot, message, args) => {

    const m = await message.channel.send("CSC IS LIT!!!").then(msg => msg.edit({timeout: 300}));
    m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms`);

}

module.exports.help = {
    name: "ping",
    aliases: []
}