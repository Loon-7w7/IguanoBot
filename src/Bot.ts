import {config} from 'dotenv'
config();
import {Client, GatewayIntentBits} from 'discord.js'
import {MessageGpt} from './Dicord objects/embledMessage';

const client = new Client({ intents: [GatewayIntentBits.Guilds,
    "DirectMessages","GuildPresences",
    "MessageContent", 
    "DirectMessageReactions", 
    "GuildMessages", 
    "GuildMessageReactions", 
    "Guilds"] });

import {Configuration, OpenAIApi} from 'openai';

const configAi = new Configuration(
	{
		organization:process.env.OPENAI_ORGANIZATIO,
		apiKey:process.env.OPENAI_TOKEN
	});
const OpenAI = new OpenAIApi(configAi);

client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async(msg) => { // When a message is created
	if (msg.content.startsWith(process.env.Prefix + 'gpt'))
	{
		try
			{
				const menssge = msg.content.slice(6);
				const gptResponse = await OpenAI.createCompletion(
					{
						model: 'text-davinci-003',
						prompt: `${menssge}`,
						temperature: 0.9,
						max_tokens: 1000,
						stop: ['ChatGPT:', 'Tonanes:'],
					});
				if(gptResponse.data.choices[0].text != undefined)
				{
					
					msg.reply({embeds:[MessageGpt(msg,gptResponse.data.choices[0].text)]});
				}
				else
				{
					msg.reply({embeds:[MessageGpt(msg, 'Me repites? no te entendi')]});
				}
			}
			catch (e) 
			{
				console.error(e);
			}
	}
	if (msg.content.startsWith(process.env.Prefix + 'adentro'))
	{
		msg.reply(`Adentro el Iguano`);
	}
});


client.login(process.env.DISCORD_TOKEN);