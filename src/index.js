require('dotenv/config');

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN_BOT;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Testando');
});