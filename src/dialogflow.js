const dialogflow = require('dialogflow');
const config = require('./config/agent');

const sessionClient = new dialogflow.SessionsClient({
    projectId: config.project_id,
    credentials: { 
        private_key: config.private_key,
        client_email: config.client_email 
    }
});

async function sendMessage(chatId, message) {
    const sessionPath = sessionClient.sessionPath(config.project_id, chatId);
    
    console.log(sessionPath);

    const textQueryInput = { text: { text: message, languageCode: 'pt-BR' } };
    const eventQueryInput = { event: { name: 'start', languageCode: 'pt-BR' } }
    
    const request = {
        session: sessionPath,
        queryInput: {}
    }

    request.queryInput = message === '/start' ?  eventQueryInput : textQueryInput;

    const response = await sessionClient.detectIntent(request);
    const result = response[0].queryResult;
    
    console.log(JSON.stringify(result));

    return { text: result.fulfillmentText, intent: result.intent.displayName, fields: result.parameters.fields };
};

module.exports.sendMessage = sendMessage;