require('dotenv').config();
const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();

client.login(process.env.bottoken);

client.on('ready', () => {
  console.log('Running');
});

client.on('message', message => {
  if (message.content.startsWith('!getprice')) {
    let coin = message.content.split(' ')[1];
    if (!coin) {
      message.channel.send('You have to give me the name of the coin to search for!');
    } else {
      coin = coin.toLowerCase();
      request(`https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=USD`, (url, response, body) => {
        let res = JSON.parse(body);
        if (res.error) {
          // if api call response is invalid
          message.channel.send('The coin doesn\'t seem to exist on Coinmarketcap.');
        } else {
          message.channel.send(`USD $${res[0].price_usd} per coin`);
        }
      });
    }
  }
});