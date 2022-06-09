"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const text_1 = require("./text");
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const bot = new node_telegram_bot_api_1.default(process.env.TOKEN);
bot.startPolling({ polling: true });
let users = new Map();
bot.onText(/\/start/, (message, metadata) => {
    users.set(message.chat.id, {
        id: message.chat.id,
        state: 0,
        listening: 0,
        reading: 0,
        speaking: 0,
        writing: 0,
        result: 0
    });
    requireListening(message);
});
bot.onText(/\/info/, (message, metadata) => {
    info(message);
});
bot.on('message', (message, metadata) => {
    let user = users.get(message.chat.id);
    if (user) {
        if (user.state === 1) {
            user.listening = Number(message.text);
            requireReading(message);
        }
        else if (user.state === 2) {
            user.reading = Number(message.text);
            requireSpeaking(message);
        }
        else if (user.state === 3) {
            user.speaking = Number(message.text);
            requireWriting(message);
        }
        else if (user.state === 4) {
            user.writing = Number(message.text);
            sendResult(message);
        }
    }
});
function greeting(message) {
    var _a;
    let name = (_a = message.from) === null || _a === void 0 ? void 0 : _a.username;
    bot.sendMessage(message.chat.id, (0, text_1.salom)(name));
    requireListening(message);
}
function info(message) {
    bot.sendMessage(message.chat.id, ('Assalomu aleykum ushbu bot orqali siz IELTS baholarni taxminiy tazrda aniqlashingiz mumkin'));
}
function requireListening(message) {
    var _a;
    let name = (_a = message.from) === null || _a === void 0 ? void 0 : _a.first_name;
    bot.sendMessage(message.chat.id, (0, text_1.salom)(name) + ' IELTS imtixonining Listening qismi uchun qiymat kriting?');
    users.get(message.chat.id).state = 1;
}
function requireReading(message) {
    bot.sendMessage(message.chat.id, 'Reading?');
    users.get(message.chat.id).state = 2;
}
function requireSpeaking(message) {
    bot.sendMessage(message.chat.id, 'Speaking?');
    users.get(message.chat.id).state = 3;
}
function requireWriting(message) {
    bot.sendMessage(message.chat.id, 'Writing?');
    users.get(message.chat.id).state = 4;
}
function sendResult(message) {
    let user = users.get(message.chat.id);
    let result = (user.listening + user.reading + user.writing + user.speaking) / 4;
    if (result >= 0 && result < 0.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 0);
        user.state = 0;
    }
    else if (result >= 0.25 && result < 0.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 0.5);
        user.state = 0;
    }
    else if (result >= 0.75 && result < 1.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 1);
        user.state = 0;
    }
    else if (result >= 1.25 && result < 1.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 1.5);
        user.state = 0;
    }
    else if (result >= 1.75 && result < 2.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 2.0);
        user.state = 0;
    }
    else if (result >= 2.25 && result < 2.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 2.5);
        user.state = 0;
    }
    else if (result >= 2.75 && result < 3.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 3.0);
        user.state = 0;
    }
    else if (result >= 3.25 && result < 3.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 3.5);
        user.state = 0;
    }
    else if (result >= 3.75 && result < 4.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 4.0);
        user.state = 0;
    }
    else if (result >= 4.25 && result < 4.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 4.5);
        user.state = 0;
    }
    else if (result >= 4.75 && result < 5.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 5.0);
        user.state = 0;
    }
    else if (result >= 5.25 && result < 5.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 5.5);
        user.state = 0;
    }
    else if (result >= 5.75 && result < 6.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 6.0);
        user.state = 0;
    }
    else if (result >= 6.25 && result < 6.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 6.5);
        user.state = 0;
    }
    else if (result >= 6.75 && result < 7.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 7);
        user.state = 0;
    }
    else if (result >= 7.25 && result < 7.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 7.5);
        user.state = 0;
    }
    else if (result >= 7.75 && result < 8.25) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 8);
        user.state = 0;
    }
    else if (result >= 8.25 && result < 8.75) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 8.5);
        user.state = 0;
    }
    else if (result >= 8.75 && result <= 9) {
        bot.sendMessage(message.chat.id, "Listening: " + user.listening + '\n' +
            "Reading: " + user.reading + '\n' +
            'Speaking: ' + user.speaking + '\n' +
            'Writing: ' + user.writing + '\n' + '\n' +
            'Overall: ' + 9);
        user.state = 0;
    }
}
function id(id) {
    throw new Error('Function not implemented.');
}
// 1. greeting: salom
// 2. require: listening
// 3. require: reading
// 4. require: speaking
// 5. require: writing
// 6. result
