require('dotenv/config');

const TelegramBot = require('node-telegram-bot-api');

const dialogflow = require('./dialogflow');
const youtube = require('./youtube');

const token = process.env.TOKEN_BOT;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (message) => {
    const chatId = message.chat.id;
    console.log(message.text);

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), message.text);
    let textResponse = dfResponse.text;

    if (dfResponse.intent === 'Treino') {
        textResponse = await youtube.searchVideoURL(textResponse, dfResponse.fields.corpo.stringValue);
    }
    
    bot.sendMessage(chatId, textResponse);
});