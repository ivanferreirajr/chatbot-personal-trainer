require('dotenv/config');

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN_BOT;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Testando');
});