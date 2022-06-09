import { salom } from './text';
import { User } from './user';
import TelegramBot, { ChatId, Message } from "node-telegram-bot-api"

const bot = new TelegramBot(process.env.TOKEN!)

bot.startPolling({ polling: true })

let users = new Map<ChatId, User>()

bot.onText(/\/start/, (message, metadata) => {
  users.set(message.chat.id, {
    id: message.chat.id,
    state: 0,
    listening: 0,
    reading: 0,
    speaking: 0,
    writing: 0,
    result: 0
  })

  requireListening(message)
})

bot.onText(/\/info/, (message, metadata) => {
  info(message)
})

bot.on('message', (message, metadata) => {
  let user = users.get(message.chat.id)!
  if (user) {
    if (user.state === 1) {
      user.listening = Number(message.text)
      requireReading(message)
    }
    else if (user.state === 2) {
      user.reading = Number(message.text)
      requireSpeaking(message)
    }
    else if (user.state === 3) {
      user.speaking = Number(message.text)
      requireWriting(message)
    }
    else if (user.state === 4) {
      user.writing = Number(message.text)
      sendResult(message)
    }
  }
})

function greeting(message: Message) {
  let name = message.from?.username!
  bot.sendMessage(message.chat.id, salom(name))

  requireListening(message)
}

function info (message: Message) {
  bot.sendMessage(message.chat.id, ('Assalomu aleykum ushbu bot orqali siz IELTS baholarni taxminiy tazrda aniqlashingiz mumkin'))
}

function requireListening(message: Message) {
  let name = message.from?.first_name!
  bot.sendMessage(message.chat.id, salom(name) + ' IELTS imtixonining Listening qismi uchun qiymat kriting?')

  users.get(message.chat.id)!.state = 1
}

function requireReading(message: Message) {
  bot.sendMessage(message.chat.id, 'Reading?')
  users.get(message.chat.id)!.state = 2
}

function requireSpeaking(message: Message) {
  bot.sendMessage(message.chat.id, 'Speaking?')
  users.get(message.chat.id)!.state = 3
}

function requireWriting(message: Message) {
  bot.sendMessage(message.chat.id, 'Writing?')
  users.get(message.chat.id)!.state = 4
}

function sendResult(message: Message) {
  let user = users.get(message.chat.id)!
  let result = (user.listening + user.reading + user.writing + user.speaking)/4

  if(result >= 0 && result < 0.25) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   0 + '\n\nQayta hisoblash uchun /start bosing!')
    
    
    user.state = 0
  }

  
  else if(result >= 0.25 && result <0.75) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   0.5 )
    
    
    user.state = 0
  }

  else if(result >= 0.75 && result <1.25) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   1 )
    
    
    user.state = 0
  }

  else if(result >= 1.25 && result <1.75) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   1.5 )
    
    
    user.state = 0
  }

  else if(result >= 1.75 && result <2.25) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   2.0 )
    
    
    user.state = 0
  }

  else if(result >= 2.25 && result <2.75) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   2.5 )
    
    
    user.state = 0
  }


  else if(result >= 2.75 && result <3.25) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   3.0 )
    
    
    user.state = 0
  }

  else if(result >= 3.25 && result <3.75) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   3.5 )
    
    
    user.state = 0
  }

  else if(result >= 3.75 && result <4.25) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   4.0 )
    
    
    user.state = 0
  }

  
  else if(result >= 4.25 && result < 4.75) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   4.5 + '\n\nQayta hisoblash uchun /start bosing!')
    
    
    user.state = 0
  }

  else if(result >= 4.75 && result < 5.25) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   5.0 )
    
    
    user.state = 0
  }

  else if(result >= 5.25 && result < 5.75) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   5.5 )
    
    
    user.state = 0
  }

  else if(result >= 5.75 && result < 6.25) {
    
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   6.0 )
    
    
    user.state = 0
  }

  else if(result >= 6.25 && result < 6.75) {
    bot.sendMessage(message.chat.id, 
    "Listening: "  +   user.listening +'\n'+ 
    "Reading: "    +   user.reading + '\n' + 
    'Speaking: '   +   user.speaking + '\n'+ 
    'Writing: '    +   user.writing + '\n' + '\n' +
    'Overall: '    +   6.5 )
    
    
    user.state = 0
  }


  else if (result >= 6.75 && result < 7.25 ) {

    bot.sendMessage(message.chat.id, 
      "Listening: "  +   user.listening +'\n'+ 
      "Reading: "    +   user.reading + '\n' + 
      'Speaking: '   +   user.speaking + '\n'+ 
      'Writing: '    +   user.writing + '\n' + '\n' +
      'Overall: '    +   7 )
      
      
      user.state = 0
  }

  else if (result >= 7.25 && result < 7.75 ) {

    bot.sendMessage(message.chat.id, 
      "Listening: "  +   user.listening +'\n'+ 
      "Reading: "    +   user.reading + '\n' + 
      'Speaking: '   +   user.speaking + '\n'+ 
      'Writing: '    +   user.writing + '\n' + '\n' +
      'Overall: '    +   7.5 )
      
      
      user.state = 0
  }

  else if (result >= 7.75 && result < 8.25 ) {

    bot.sendMessage(message.chat.id, 
      "Listening: "  +   user.listening +'\n'+ 
      "Reading: "    +   user.reading + '\n' + 
      'Speaking: '   +   user.speaking + '\n'+ 
      'Writing: '    +   user.writing + '\n' + '\n' +
      'Overall: '    +   8 )
      
      
      user.state = 0
  }

  else if (result >= 8.25 && result < 8.75 ) {

    bot.sendMessage(message.chat.id, 
      "Listening: "  +   user.listening +'\n'+ 
      "Reading: "    +   user.reading + '\n' + 
      'Speaking: '   +   user.speaking + '\n'+ 
      'Writing: '    +   user.writing + '\n' + '\n' +
      'Overall: '    +   8.5 )
      
      
      user.state = 0
  }

  else if (result >= 8.75 && result <= 9 ) {

    bot.sendMessage(message.chat.id, 
      "Listening: "  +   user.listening +'\n'+ 
      "Reading: "    +   user.reading + '\n' + 
      'Speaking: '   +   user.speaking + '\n'+ 
      'Writing: '    +   user.writing + '\n' + '\n' +
      'Overall: '    +   9 )
      
      
      user.state = 0
  }  
  
}


function id(id: any): string {
  throw new Error('Function not implemented.');
}
// 1. greeting: salom
// 2. require: listening
// 3. require: reading
// 4. require: speaking
// 5. require: writing
// 6. result