# Chatbot - Personal Trainer 🤖

Chatbot to help with training routine and diet.

## 🚀 Technologies

- [dialogflow](https://www.npmjs.com/package/dialogflow)
- [youtube-node](https://www.npmjs.com/package/youtube-node)
- [telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)

## ✋🏻 Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Telegram](https://web.telegram.org/)

## 🔥 Getting started

### Bot creation

* Search for `@BotFather` and start the conversation
* Submit the command `/newbot` and execute the instructions
* Stores the token sent by `@BotFather`

### Creating the conversation flow in [Dialogflow](https://dialogflow.com/)

* Create a new agent
* Create a new project
* Click on the gear to configure the agent
* Click on the service id, you will be redirected to the GCP panel to create a key (type json)
* After the key has been downloaded, replace the contents in `.env`
* Create a new intent called "Treino"
* Add training phrases with some body parts
* Define entities of type "corpo" and their synonyms

### Links to generate credentials:
- 🎬 Youtube API Key - https://console.developers.google.com/start/api?id=youtube 
- 🔊 Dialogflow - https://console.cloud.google.com/iam-admin/serviceaccounts 

## 🚀 Execution

1. Clone this repository;
2. Enter ín folder with `cd chatbot-personal-trainer` ;
3. Run `yarn` or `npm install` to install dependencies;
4. Copy the file `.env.example` and create a `.env` file with the dialogflow credentials, telegram token and youtube api key;
7. Run `yarn dev` to start the server.

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.

---

Made with ☕ by Ivan Ferreira 🧙‍♂️
