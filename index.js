const { createInterface } = require('node:readline');
const { execSync } = require('child_process');
const fetch = require('node-fetch');
const { Client, Routes } = require('discord.js');

const ping = {
  name: 'ping',
  description: 'Pings the bot and shows the latency'
};


// Command Example
const tvp = {
  name:'tvp',
  description:'Example'
};

const commands = [ping, tvp]; // Add your commands with commas to add them to the bot!

const client = new Client({ intents: [] });
const rl = createInterface({ input: process.stdin, output: process.stdout });


client.on('interactionCreate', (interaction) => {
  if (interaction.commandName === 'ping') {
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
  } else if(interaction.commandName === 'tvp') { // This is the example command's name!
    interaction.reply('whatup');
  } else { // a response if you forget to add the command here
    interaction.reply('this command\'s response has not been added yet!');
  }
});

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('DONE! Application/Bot is up and running.');
  });
