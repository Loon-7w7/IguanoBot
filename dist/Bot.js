"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const discord_js_1 = require("discord.js");
const embledMessage_1 = require("./Dicord objects/embledMessage");
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds,
        "DirectMessages", "GuildPresences",
        "MessageContent",
        "DirectMessageReactions",
        "GuildMessages",
        "GuildMessageReactions",
        "Guilds"] });
const openai_1 = require("openai");
const configAi = new openai_1.Configuration({
    organization: process.env.OPENAI_ORGANIZATIO,
    apiKey: process.env.OPENAI_TOKEN
});
const OpenAI = new openai_1.OpenAIApi(configAi);
client.once('ready', c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.on("messageCreate", (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.content.startsWith(process.env.Prefix + 'gpt')) {
        try {
            const menssge = msg.content.slice(6);
            const gptResponse = yield OpenAI.createCompletion({
                model: 'text-davinci-003',
                prompt: `${menssge}`,
                temperature: 0.9,
                max_tokens: 1000,
                stop: ['ChatGPT:', 'Tonanes:'],
            });
            if (gptResponse.data.choices[0].text != undefined) {
                msg.reply({ embeds: [(0, embledMessage_1.MessageGpt)(msg, gptResponse.data.choices[0].text, client)] });
            }
            else {
                msg.reply({ embeds: [(0, embledMessage_1.MessageGpt)(msg, 'Me repites? no te entendi', client)] });
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    if (msg.content.startsWith(process.env.Prefix + 'adentro')) {
        msg.reply(`Adentro el Iguano`);
    }
}));
client.login(process.env.DISCORD_TOKEN);
