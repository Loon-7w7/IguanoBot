"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageGpt = void 0;
const discord_js_1 = require("discord.js");
function MessageGpt(discordMsg, messageBot) {
    const MessageEmbed = new discord_js_1.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(discordMsg.content)
        .setAuthor({ name: discordMsg.author.username })
        .setDescription(messageBot)
        .setTimestamp()
        .setFooter({ text: 'Adentro el Iguano', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    if (discordMsg.author.avatar != null) {
        MessageEmbed.setAuthor({ name: discordMsg.author.username, iconURL: discordMsg.author.avatar });
    }
    return MessageEmbed;
}
exports.MessageGpt = MessageGpt;
