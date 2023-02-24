"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageGpt = void 0;
const discord_js_1 = require("discord.js");
function MessageGpt(discordMsg, messageBot, bot) {
    var _a, _b;
    const MessageEmbed = new discord_js_1.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(discordMsg.content)
        .setAuthor({ name: discordMsg.author.username })
        .setDescription(messageBot)
        .setTimestamp()
        .setFooter({ text: 'Adentro el Iguano', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    const iconURLMessage = discordMsg.author.avatarURL();
    const iconURLBot = (_a = bot.user) === null || _a === void 0 ? void 0 : _a.avatarURL();
    const botUserName = (_b = bot.user) === null || _b === void 0 ? void 0 : _b.username;
    if (iconURLMessage != null) {
        console.log(discordMsg.author.avatarURL);
        MessageEmbed.setAuthor({ name: discordMsg.author.username, iconURL: iconURLMessage });
    }
    else {
        MessageEmbed.setAuthor({ name: discordMsg.author.username });
    }
    if (iconURLBot != null && botUserName != null) {
        console.log(discordMsg.author.avatarURL);
        MessageEmbed.setFooter({ text: botUserName, iconURL: iconURLBot });
    }
    return MessageEmbed;
}
exports.MessageGpt = MessageGpt;
