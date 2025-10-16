const { createInterface } = require('node:readline');
const { execSync } = require('child_process');
const fetch = require('node-fetch');
const { Client, Routes } = require('discord.js');

const ping = {
  name: 'ping',
  description: 'Pings the bot and shows the latency'
};

// Command Example
const miyuko = {
  name:'miyukowo',
  description:'say hello to miyukowo'
};

const commands = [ping, miyuko];

const client = new Client({ intents: [] });
const rl = createInterface({ input: process.stdin, output: process.stdout });

client.on('interactionCreate', (interaction) => {
  if (interaction.commandName === 'ping') {
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
  } else if(interaction.commandName === 'tvp') {
    interaction.reply(`whatup <@${interaction.user.id}>!`);
  }
  } else {
    interaction.reply('this command\'s response has not been added yet!');
  }
});

client.login(process.env.TOKEN);

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  try {
    console.log('Started refreshing application (/) commands.');
    await client.application.commands.set(commands);
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error('Error registering commands:', error);
  }
  
  console.log('DONE! Application/Bot is up and running.');
});
