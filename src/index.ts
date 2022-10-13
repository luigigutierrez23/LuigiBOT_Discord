import { config } from 'dotenv';
import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { prefix } from './config.json';

config();

const bot: Client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

bot.on('ready', () => {
  console.log('Bot is ready - Again');
});

bot.on('messageCreate', async (message) => {
  console.log(message);

  if (message.content.startsWith(`${prefix}hey`)) {
    message.channel.send(`🚀 Hello there <@${message.author.id}>!! `)
  }

  if (message.content.startsWith(`${prefix}luigi`)) {
    message.channel.send(`Donde esta mario?`)
  }

  if (message.content.startsWith(`${prefix}manco`)) {
    message.reply(`El que lo escribe. 😎`)
  }
  
  if (message.content.startsWith(`${prefix}greetings`)) {
    const member = message.mentions.users.first();
    message.channel.send(`🚀 Hello there <@${member?.id}>!! `)
  }

  if (message.content.startsWith(`${prefix}kick`)) {
    const member = message.mentions.members?.first();
    if(member){
        // const kickedMember = await member?.kick();
        message.channel.send(`${member.user.username} has been kicked`)
    }
  }
});

bot.login(process.env.DISCORD_TOKEN);
