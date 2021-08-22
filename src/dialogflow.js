const dialogflow = require('dialogflow');
const config = require('./config/agent');

const sessionClient = new dialogflow.SessionsClient({
    projectId: config.project_id,
    credentials: { 
        private_key: config.private_key,
        client_email: config.client_email }
});

async function sendMessage(chatId, message) {
    const sessionPath = sessionClient.sessionPath(config.project_id, chatId);

    const request = {
        session: sessionPath,
        queryInput: { 
            text: { 
                text: message, 
                languageCode: 'pt-BR' 
            } 
        }
    }

    const response = await sessionClient.detectIntent(request);
    const result = response[0].queryResult;
    console.log(JSON.stringify(result));

};

sendMessage("123456879", "oi");

// module.exports.sendMessage = sendMessage;