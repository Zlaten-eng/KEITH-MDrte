/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA62WWY+qSBTHv0u9Yo/si0knw+qCqLjrZB4KKBRlLQoUb/zuE7Q73cnc6duTXJ4qLOf8zvY//ABpFpXIRg3o/QA5jmpIUHskTY5AD2hVGCIMOiCABIIe2PW1UXeIqSJu4NpQPX2w2NORyjOx4kzNOqTRkmWdbk648yu4d0BeeXHkf2GQFBvPdZMtu1keYLVbHb1NTQyXzmbbzVWDNXHZq85vt8xt9wrurUUY4Sg9mPkRJQjD2EbNDEb4e/jIoOSTI6FAGkhHNHWKegSv2GYcLQq2lrzpCkIgX8tI3Prfw6fxBI608aSRznNjgg7LYh40kuaxjA+HpedPqlsis1NRSugnfhkdUhQMA5SSiDTfznvkjCeUFSrBimYzd7qn87SUgmbV1/tjNDl6k/Nqelsr/QHzzbzLoVkzl9x0TNx3sXUqEqEq+ptm4aYDe6Lk9NyitTJSr7T6GXyG33vl/H/yvrG7TXZKfbHrW8W1qpCzTkkYrHjF6hfxlmk2cEXRnDkwv4lvJfs9fTRwRHmnURWP8254EM2ckrIIdmmlkpaSb9cXJzCdD3xIKvwVZahrztYw52ai22vNsGtlU83sZr7yeWo/gvFxWCWjtXuxN4WEPSxsXKePb7kSlaxi9wfUIsZUwZ+OxSLPbiN6O9isfM19fUR0Rs0wAD3m3gEYHaKSYEiiLH3cE5gOgEG9QD5G5JFeEA69jXA+CdZiNYizaX3dBnWuhgflRt1SKBkF8RylyEl6cl9BB+Q481FZomAQlSTDjYPKEh5QCXp/PSrVBo1RkhE0igLQA6zAS4wsc4LCcX+Wf1yOkJQwz/9IEQEdEOIscRDoEVyhDnh8ILOGqjCsIIicxXAcp9KSoIgMo1iCyCu62IaYPJ0uowSVBCY56DESz7M0Jyr0vfN7ODiJY0xZ0CTGUCWBkQ2F5TmdNnXG4mnVVH/BwfwuDsNQaYG1DEM1WEHTdc0QNYuhNY4VBc6guS85JEb5XRymyDOsKDCGomkWq/M8I+i8Yuo6L4i8xBpfc3Ds7+LQGN5iFVmWJM6QWYFTVUWzdI5jFYUWRZX5BQd3/7sDUnQlT31pp4JjOiCMcElWaZXHGQzexef9IfT9rErJokl9vT0gDHqfbiNCovRQtpFVKcT+MaqR3sYBeiGMS3TvgADVkY+Gj4AjFgmY282H9vjiTl+WiX6y3Hayjln6fIVHnCCzjPTC0WzwwjMC+yLTHPci0YoScFLoBSID2nQ8pb395j+VZjHdaxfdsubXqkHepBhcLzmfaIN66TzU4ikRCKPgPcse9M9VvszOKP1qPVMQLjh+Or+MThqckmYqcMNlqA64z3af0gN6Pz7WqZ4FrT1J3Dgbl7NAW63Wz7+6ocf/pCFS2L4NVuk5zS5p6+itCq2JABEYxSXoAX3oXarS1MxRGLKe3O+r5kHVDyr4qNq7Sj9VEPEao6ZjMXXcHR7PeHq0Vi7wkGTxbq1MVGKteYTqOTXTs9efGAE9UOUepNRYtGO/m4n2ZSbvhoZSrXfhXu5vm+khnQ9QOOwe+ofxeBk7E1PDMsqseD88cFWqs7vSDpLTzd7t1QLlKOkKlHp5bb09u+ezs/rGLcd4Mqns0ZRiteEwp47CLvMl5lTHHpONsxxl3fVRJDwl49KmpFuXTOaCGvVdovDp5jJWl7YwOleXQgmK2UyhaP3w3B+P/RW//TdEb8r+7LUwQo81/FaFX1bro+3pe+eTjbfF/h+tpW0rNXBHDZXfzL7d3KiJvg79fjYqRhsrXLrj+RoNUkyHp0sB7u085zEkYYYT0AMwDXAWBaADYlgS9WNyfyLSMt8BSaPm+YJA8j7wQG2vYZCA+z+0TUBOswoAAA=='
const prefix = process.env.PREFIX || '#';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Siggtryggr';
const packname = process.env.PACKNAME || 'Siggtryggr';
const dev = process.env.OWNER_NUMBER || '254788409105';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || 'zlatan';
const url = process.env.URL || 'https://files.catbox.moe/puxjra.jpg';
const gurl = process.env.GURL || 'https://chat.whatsapp.com/DM1tZs0C6LJ8Sxrhm6Qwsa';
const reactemoji = process.env.EMOJI || '';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'false';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'false';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'nice to chat with you  ';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'false';
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
