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
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
(0, dotenv_1.config)();
const bot = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.DirectMessages,
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildBans,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
    partials: [discord_js_1.Partials.Channel],
});
bot.on('ready', () => {
    console.log('Bot is ready - Again');
});
bot.on('messageCreate', (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(message);
    if (message.content.startsWith(`${config_json_1.prefix}hey`)) {
        message.channel.send(`🚀 Hello there <@${message.author.id}>!! `);
    }
    if (message.content.startsWith(`${config_json_1.prefix}luigi`)) {
        message.channel.send(`Donde esta mario?`);
    }
    if (message.content.startsWith(`${config_json_1.prefix}manco`)) {
        message.reply(`El que lo escribe. 😎`);
    }
    if (message.content.startsWith(`${config_json_1.prefix}greetings`)) {
        const member = message.mentions.users.first();
        message.channel.send(`🚀 Hello there <@${member === null || member === void 0 ? void 0 : member.id}>!! `);
    }
    if (message.content.startsWith(`${config_json_1.prefix}kick`)) {
        const member = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        if (member) {
            // const kickedMember = await member?.kick();
            message.channel.send(`${member.user.username} has been kicked`);
        }
    }
}));
bot.login(process.env.DISCORD_TOKEN);
