import {EmbedBuilder, Message } from 'discord.js';

export function MessageGpt(discordMsg: Message, messageBot: string): EmbedBuilder
{
    const MessageEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle( discordMsg.content)
	.setAuthor({ name: discordMsg.author.username})
	.setDescription(messageBot)
	.setTimestamp()
	.setFooter({ text: 'Adentro el Iguano', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    if(discordMsg.author.avatar != null)
    {
        console.log(discordMsg.author.avatar)
        MessageEmbed.setAuthor({ name: discordMsg.author.username, iconURL: discordMsg.author.avatar })
    }
    return MessageEmbed;
}
