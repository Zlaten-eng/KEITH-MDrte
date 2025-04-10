/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V2W6rSBD9l361M2ZfLEUadgev2MbbaB4aaDA2m5sGjK/87yPiRIl072Qy0uUJNfSpU1XnVP0AWR6XaIxaMPwBChzXkKDulbQFAkOgVmGIMOiDABIIhsCyj/N6u50ffDbEEd7Xkqu7e29QGPzkIngHkjlQ8OL5fDt9Bvc+KCovif0vABE1gNbuqlqH2MlP4UjccvZ8ZsYm0sdLcjotTscpf0iQ5/jP4N4hwhjHWWQUR5QiDJMxahcwxt+jL+hHhonyJNvLWcFfzZHNGEyVTFC+YPOxRAnLjKIGwcY1ne/Rl69luFY9cWpu/eC0GLgCaRV+LjqVVepVVJU1JUmBqGdn90G/jKMMBS8BykhM2m/X3bXNoL01gShN8Dhxl64d3YwVU0zcQXGyt9Hi4pwmKXt52ey/R3ymTZVeq1vMi38jnqpVqbR0mR21hNcI1qemzeesl69HN/X8mfgCv2vl/H/q3k7V69XS08kob47n3azSj6t2MN7xsZ/viQgR5tNUnx8c85v0R8c2PQatpcrjXTKAjYAP22w5pyinHt3C7FzsFY7kS5U9ch/0IanwVyz1YpkdxMlYdg5qTc0OGDUL2IjUmL9oyhofbi+aC3WfZQVe2u9FZNMjKJD1vNqcRHOqNbMFJdPMzd6FTIM2AY7hpVGV59eMzqh9CcCQvvcBRlFcEgxJnGfdGSf1AQzqFfIxIq/VBTbl6ZooW0usyUoTSWJ0EHshdV6NaMsns3ZkUPtKYv2LTD2DPihw7qOyRMEoLkmO2ykqSxihEgz/em1UlzNGaU6QHQdgCBieE2lJYnmZZf8s/2iOkJSwKP7IEAF9EOI8nSIwJLhCffB6QZQFiRJEimYVlaJZSVMYipEFgWNFwdQVvcswfQRdxykqCUwLMKRFjmMZlpXEe//38BAYTmcMlZUMnZUoheYYQ1VMVhZEWTBkUf0PHtLv4kHRCi8rHKupnMGyrKlyMi8JjKIYqkmbgvQlD46hfhcPUaU1hWE4mTVlWWJFzRB1XqUYSVEEyaCEr3mw1P3vPsjQlTxs3YmRpfsgjHFJ3KwqkhwG755//wh9P68ysmozX+teEAbDT8eIkDiLyi6zKoPYP8Y10ro8wDCESYnufRCgOvZRhwdUzpO4ST1fPz01TCLMglYJF1Gn6GOePX7xQ4qWkCg/BQzjPXGBxDxBFIhPCCIkhwET+GwAunI8Jmp3518N7hRFK0v8YFynI5OeKj01XlaX+nTrKa8mfTgTYRS8V9mD/rkq1vkZZV/gTtymdHQ10FR4yTaD9Wq1XjU9c769OZ9wH44Hwx8fW0zLgw5vsmKXqk3zoOtWF+cnNQx5+mdBZLD7G7jZOcubrAv01oUOIkAExkkJhkB7uTVVaajGGFmcJ1mWYkSKFingo2vvw/ExfRCn0ko2EbKps8eTBUfZG7mBUZon+408U4i54RCql72Flj//AqRbi5a+2E1ZW9QFr9UZIkZ7EbpaMm+PlHsVGmOQOoyWWLXW7jhe8Rt91Go2HzMXmRMwWUNHbRLn4vOeVO9Ye6CtVgfdee6iPdTzOZg7ejEcHF+47XTtC/B8radq2zuau5UzYKbuqEgJ0xts0G5VaXm+ud0wESbJcbPTdWbjLZ0lt2nZwblnkfNhjVtBi6aOFj3G9uvaSN7Wdfw2UR9aC2P0uv3euvCf3fqQPXXvf8J426f/Ii11VymBY7e94mZY4/bWm2mb0Ldy+2JvzXDtTJYbNMowFZ6aC7h3fi4SSMIcp2AIYBbgPO7skcCSKB/O/dVwpPsgbZWiWBFI3g0PlO55CShw/weCtop6KgoAAA==';
const prefix = process.env.PREFIX || '#';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Siggtryggr';
const packname = process.env.PACKNAME || 'Siggtryggr';
const dev = process.env.OWNER_NUMBER || '254788409105';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'siggtrygrr-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'recording';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || 'zlatan';
const url = process.env.URL || 'https://files.catbox.moe/puxjra.jpg';
const gurl = process.env.GURL || 'https://chat.whatsapp.com/DM1tZs0C6LJ8Sxrhm6Qwsa';
const reactemoji = process.env.EMOJI || '';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'false';
const antibot = process.env.ANTIBOT || 'false';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'currently unavailable please try aga later  ';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'false';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'false';
const anticallmsg = process.env.ANTICALL_MSG || 'call declined successfully opt for direct message ';
const autobio = process.env.AUTOBIO || 'true';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
