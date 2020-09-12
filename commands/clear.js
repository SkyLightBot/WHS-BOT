module.exports.run = async (bot, message, args) => {

    if(args[0].toLowerCase() == "all") args[0] = 50;

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permssion to use this!");
    if(!args[0]) return message.reply("Please specify a amount!");
    if(parseInt(args[0]) > 99) return message.reply("You cannot delete more than 99 messages at a time!");

    message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
        message.channel.send(`Cleared ${args[0]} messages!`).then(msg => msg.delete({timeout: 3000}));
    }).catch((err) => {
        return message.reply("**ERROR!** Please check if I have `Manage Message` permission and make sure the message is not older than 14 days old.");
    })

}

module.exports.help = {
    name: "clear",
    aliases: ["purge"]
}