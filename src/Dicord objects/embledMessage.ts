import {EmbedBuilder, Message, Client } from 'discord.js';

export function MessageGpt(discordMsg: Message, messageBot: string, bot: Client): EmbedBuilder
{
    const MessageEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle( discordMsg.content)
	.setAuthor({ name: discordMsg.author.username})
	.setDescription(messageBot)
	.setTimestamp()
	.setFooter({ text: 'Adentro el Iguano', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    const iconURLMessage = discordMsg.author.avatarURL();
    const iconURLBot = bot.user?.avatarURL()
    const botUserName = bot.user?.username;
    if( iconURLMessage != null)
    {
        console.log(discordMsg.author.avatarURL)
        MessageEmbed.setAuthor({ name: discordMsg.author.username, iconURL: iconURLMessage })
    }
    else
    {
        MessageEmbed.setAuthor({ name: discordMsg.author.username })
    }
    if( iconURLBot != null && botUserName != null)
    {
        console.log(discordMsg.author.avatarURL)
        MessageEmbed.setFooter({ text: botUserName, iconURL: iconURLBot });
    }
    return MessageEmbed;
}
