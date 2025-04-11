/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;IAAAAAAAAA5VVy46jRhT9lai29sQ8DbbUUjBgbGNjwE8cZVGGApfNy0UBpkf9AVnmC7KJlFX22c8P5RMi2t3qljKZdJCQSkXVuefee+7hM0gzXCATNWD4GeQEV5CidkmbHIEhGJVhiAjoggBSCIbAmK6TJltn1eRa1WfimYqnhqvEEG9Lx06j9KaKEg6sLEiKB/DUBXl5jLH/DcD1JEQkv/EdcVSSw6Ca7AaRtQlkz5riI66ss2n07ch2K415AE8tIsQEp5Gen1CCCIxN1NgQk4/R78xL0THoCfpjbtuJXbM/yWe2fpn21x3eFTIhSZijcbr0GOWD9Dk70LLsXO0fI6vpd/jC6ljGVq5YMleLOLWnK70KrHntXu70CxylKJgGKKWYNh+uu7rkx0jzuFk9Wu/i1XV58ycXd7Fwk3NWSZkVsPp4L09UNt58jDh7caSxkUpneJ0uac/eHa8S1BfZeNRXVx3WOS0yUtGJM0vr98Rt8qqVy/+pOzeDo5G/MPh4bcbz2JzUPcdwRbzbnSVryu4sZu8rF1/c8czH6G/DZiwdsLlb1fLmOOjsO4lItV5qz87Xjemxuu1f15V3ODPeG31IS/ItlsjTb44Og5E5sxJ7HBjkWJs4H/mT8RyaaCs2m9MYM/q81A5mpIdbrTDCzk0rrq4Bld1Ndh/35oxg2+GMsuYWnqGHmvPwnNEFNdMADNmnLiAowgUlkOIsbfc4kekCGFQr5BNEn8sLeCuVVoOcvSmdktnEB3XVW8LGUeSzmkxFzu3My/wKb5qC5AfQBTnJfFQUKJjggmakWaCigBEqwPDH5061SROUZBTNcND2QxQkRu4zAi8KPxTf1ydIC5jn36eIgi4ISZYsEBhSUqIueL6gqpLGCDwniANZ4DhNYgbKeCSrkiwIEqMJbYrJPegaJ6igMMnBkJUEgRcGosg8/dQFKbrRu37arHm2C0JMCrpJyzzOYPAqrteP0PezMqWrJvXVdoEIGL7bRpTiNCrazMoUEv+EK6S2eYBhCOMCPXVBgCrsoxYPbNajaa17O5caE7uvjSd1esB1W7lTlt6PIEHuo0EQfpIHYfBJ4I/yp8FACj6Jos+x/aMs9lketOW4j25751+V1DCHvcgcY6IfRvbW7XncZYb90Jlz0bMa7hJABAWvVT5C/1Lm6+yC0m/gMjRvTGv+iB4Hrn+shIswttRtxsc7+R3uXVpg+PnNLtUsaPEsQVDXe14FbbfaOP9Qw5D/px5S2B4G6y9/3povf3z5/Tvzy89//frbL197WxYvLWrxA0QhjotWQaZmFstspC/OK4HIhqHokaJGCnhr6euI3kegxgETdrTosdJmpA+Dg3hN+sdtfJi7wqYRbZ6Gt2bgqL42ffgKCBiC6+igoNUs2SGMuRszc8bb25WTFrcyYvjTmZ3o80hoprzncQu3A0Ne39dFb5WbUWlfH5G5OZilwkRe4pk9VbNW2lU4q/VDG+0urffBlGtU78+aQNi0CISzyyvupbG4qVLynYQeRLJkfUMvp4Izkklxml+c8ZJfYueoeFh3S3wZsfFmzt5khk1VVXI8s2crL+bxbF7xy08Dv4z1XYghRs8e/NKj/2rl20gwT913EC+m/i+yG/nTNJj0ImEh1Q3sJOkOwbxM2MNuxaDxolwPpL3sVxslVRrw1M56HkMaZiQBQwDTgGQ4AF0Qw4Iqb1P9FaPgxC5IGiXPVxTSVzMASvuYGwU8/Q1BSlH5rwgAAA==';
const prefix = process.env.PREFIX || '.';
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
const ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true, 
const ANTI_DELETE_PATH: process.env.ANTI_DELETE_PATH || "inbox", // set same for same chat
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
