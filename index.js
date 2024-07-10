const TelegramBot = require('node-telegram-bot-api')

const token = '7151370296:AAFy6mow9SfHgp5Z_k5E99HtRiuWxCRq1MM'

const WebAppUrl = 'https://yotubeulbtv.netlify.app'

const bot = new TelegramBot(token, {polling: true});


bot.on('message', async(msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start'){
     await bot.sendMessage(chatId,'Появится кнопка нажмите и перейдите по ней',{
        reply_markup:{
           inline_keyboard:[
                [{text:'Открыть приложение',web_app: {url: WebAppUrl}}]
            ]
        }
     });
    }

  });


  bot.on('message', async(msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/help'){
     await bot.sendMessage(chatId,' Добро пожаловать в первый криптовалютный кошелек, способный переводить деньги по нику в Telegram.Доступные функции:- Переводы по нику: Отправляйте криптовалюту просто введя никнейм получателя в Telegram.    - Реферальная система: Пригласите 5 человек и получите 2 USDT.  - Мини-игра: Зарабатывайте деньги, участвуя в нашей мини-игре.  - А скоро должны появиться карты для оплаты в магазинах криптовалютой. Появится кнопка, нажмите и перейдите по ней для доступа к приложению',{  
        reply_markup:{
           inline_keyboard:[
                [{text:'Открыть приложение',web_app: {url: WebAppUrl}}]
            ]
        }
     });
    }

  });



