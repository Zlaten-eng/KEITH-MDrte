/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V2Y6jOBT9F78mPWEPRCpp2BOSkJ0so3kwYMBhDYYk0Mq/j6hUqUrqnu4aaXiyjH3uufeec/0dZDkmaIoaMPoOihJfYYW6ZdUUCIyAUgcBKkEf+LCCYAQWymERUe3R8TklPm4TPRIv1+g2XjCzu5MXuUuguW/wcc6IL+DRB0XtJtj7BWAmG5Ht+Edp5lcJex1spHnKoOBWrnJ+txggJbbnp9Jjyg33Ah4dIsQlzkK9iFCKSphMUbOEuPwafUrJOCfO7bpm7hHRTpeFjYKrg1RP3Ktybx3esKlFvA/N3dfo27tcWNeNuI7DYyyMT8NpYtobPSRtj9mR02zauC27Fk7NNnzSJzjMkD/xUVbhqvly3S9WZOaWyR7ZRV2vJCI0u+UYtumiOF6alS30LLHEE2Fxdr5InJ+ujJkeR7VKl+K2CIi2nfqHwk3Si2icm2pbG8UiKvhruPtMfFm+ayX+L3W/LGxmaFKYrC+WO9XqM27Psdler7od+k4wr5o2MqepS4wv0l8MXbNuJ/awuNnI8YLdkJvYsZgL1nxx4fkzHxZ37SRN1jH3QR9WdfkrltPMgcWsTXlVqCC1jC2zscSFbLu9wc5nyGrrzaMjzubMAUNte2+cnX5Upqv9wLwsZ6zZ1sdx0BrsAK+LXEoP9G1wQYr88ppRjJqJD0b0ow9KFGJSlbDCefa6J0h9AP3rBnklql7LCzY8bTfb/VhYny/npE21o70OpnsluxP3esPaZad5djQxBF1/AX1QlLmHCEH+GJMqL5s5IgSGiIDRX6+d6pIuUZpXyMI+GAGG54a0KLK8xLJ/kj9uEawILIo/MlSBPgjKPJ0jMKrKGvXB6wVKEFWe0liZ5jWe1liVlQ2OMXReHnKqpFFdiukz6BaniFQwLcCIHnIcLTE8Lz76/w8PXZYEnaJpiad5QzeGPM3QIseLDCMptMEpv+Eh/V88BFoccpSqc0NZoXRBYA2KonlKYSVF0WTjNzwk/vF3H2ToXj391KmApfsgwCWpdlldJDn03832/hN6Xl5n1abJPLVboBKMPm2jqsJZSLrM6gyWXoSvSO3yAKMAJgQ9+sBHV+yhDg+4E1Lmy/FhE2w8UZa1MBWv+1WnpCjPnkd4mkUBy0rfWIGXvnECI35zxSD4xnve0KfgkBt6LOjK8Rxl3Z1/n7sTEy6cM2OeN3CTSD72jr3b+nT1Ze7VHU9LoBL571V2oRfXxTaPUfYLXPdwFxvzrlm7Kh+Ot9AJ3P1stvPpMfmE+7QaGH3/eD7U3O/wpsuxRQ/NMei61cX5QQ0jdvijIDLYnQa7LM7yW9YFeutCB+GjCuKEgBFQJ+NbTXRFt9IJ44qmKeuhrIYy+Oja+1R6uh5xCi1nMyGbr47lbMlRliPdYJjmydGRbLkyHA6h67q3VPOXn4B0TRvPSzWfzu6ZLghMZVPkKvkHZI3Te5hBGnNY8yVNmq7CVNWPmyUWT2J7c4KYWctedOg53l2ZC81ghSaH6S1JTsbNUFcvXbSnej4Hux7uxoTgWX64Q3lyc3vLlN1YxWCOjqScOM0kt9pNSiZ7Z4PhciERTa+F7bn2BGnFyWNp3apCm7msNoOruExbVx+o2tu8fJ3Xyds7id8m2VNrAUavz85bF37brQ/ZU4/+J4y3h+xfpKUcatlfWU2vaHVz2rQ9W3UCz8yti7U3gu1qtnbQOCup4Hy7gEfn5yKBVZCXKRgBmPlljn3QBwkklfzh3J8NJaoP0kYuik0Fq3fDA7n7rJkJHv8AeUpXpqMJAAA=';
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
const presence = process.env.WA_PRESENCE || 'recording';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || 'zlatan';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'currently unavailable ';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'false';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'false';
const anticallmsg = process.env.ANTICALL_MSG || 'call declined successfully opt for direct message ';
const autobio = process.env.AUTOBIO || 'false';

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
