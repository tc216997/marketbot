A simple coinmarketcap bot for discord.
To use, please install nodeJS v8.0.0

1. Install the dependencies.
2. create an .env file with bottoken=`bot token that discord provided you with`
   or replace `process.env.bottoken` with `'bot token that discord provided you with'`
3. run the bot on your own server with the command `node marketbot.js`
4. The only bot command for now is `!getprice *currency name*` 
   *for example* `!getprice bitcoin` will return bitcoin value in USD per coin.
