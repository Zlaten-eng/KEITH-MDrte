/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61VyY6rRhT9lai2uGOKGUstBQM2Np4wnqMoKqDAZTOZycZP/oAs8wXZRMoq++z7h/IJEe1udUtvSEcKEhIqqs49995zT30CcUJybOIadD6BNCMVKnDzWdQpBh3QLX0fZ6AFPFQg0AHrrj6BFSI1l892/bVgBMjWDKZ7zIaRXhmTw3C4kHJlCqHyCG4tkJZOSNxvAFLslNJq3J3vA9LntvqQ0yaEX4XJvmYHlRm2ScmKGaQGx/wR3BpERDISB3q6xxHOUGjieoZI9jH6icpJZGWUqbs4Xfe62ouQ5ZkiXxbyst/vM4kglbOCXtGx9TH6+dgSKpv4AR/V7FTR4GYQQcvKt0IpbcfC7DLmhy5GSnoZ3OnnJIixN/BwXJCi/nDdzdF5bqASX4UkEKKDJtqxgQ82bRtikJ04WiWkHIlVOo/zjxFfWHvOmffaJ2qhbJOrJh/WjrQz00l5pW2mUHndOndHk+FyLb0nPstetXL8L3U/TfKpOKDrKDkpG9Iud2VdreZUT+zb8plyxdmYStZOAdvH88fon0NLkLj5Op87g3jdvw7wcH/Q2/F1O+3Gi1kQu+JFT52to+tv9FFRZt9iKfd9WXVWensIi6V+6G0kD601OWRCQyFmLhoWd0m282NAxlxXI6jcrGbLKTuyo61i84tIXw7cA6tenN0xXG2hVUXHdhA8Pmd0xPXAAx14a4EMByQvMlSQJG7WGA62APIqG7sZLp7LCybn1TbrrmYbF45KczZnrKmUjupF4q5X9ri/TUxq5J0lWz0Gj6AF0ixxcZ5jzyB5kWT1GOc5CnAOOj8+d6pJOsNRUuAh8UAHMDwn0pJAcyzP/ZB/f96jIkdp+n2MC9ACfpZEYww6RVbiFng+oMm8KkOJEaCsQ1nneZFWe3xPZgVJhlDVmhSje9AFiXBeoCgFHShyHCNyPCfeWv8TD4Wle2yPUwRN1xTY4zldZxRV4gTI6Lzc/TYPgb/91AIxvhR3HTfVZ2EL+CTLi2VcpmGCvFeRv/5ErpuUcWHXsas2HzgDnXfLuChIHORNZmWMMndPKqw2eYCOj8Ic31rAwxVxcYMHCovJ6Z811xLwZd0tTU694J7SdHCfxPctMuQQ8n3hwWNk94GTfOFBYhz/AfIy57nYFxyZB0057hbSnPmqoo1LzxTP6kyxBjC0/AxS7d3suhAx1p9VeZcizrD3WmUHuccyXSRHHH8DVylLMXa67UnbGeuD2tDdbbYUbZtVk3e4d4mDzqc321YTr8EzzdnQGPdl0HSrifOZGjrwcz3EqNkMFk9/XeqnP5/++M58+uXv337/9Utvw+KlRQ2+hwtEwhx0gDoUzXyadPXJacBmUr+v6IGiBk0PXlv6ahX3UTwTj/YpLbhW2jATkLfjT5HgrMLdaM4ta37GFv6lli3V1QaPXwABHbCb6LK7LnOGHkQYUZRe+v48Ko9UhGlrpPR7Ie8czECHO2ISL6ANE1/PexImU0i395RQ8eXJZUZ8ZdHrlGH6q+sm05THJtpdWu+D9aYTHo74nR9th2Gd+5VxSi5DsuX4eT6zKZo3sxKurMk4ETdt0ypj6SgvTmHmslZ/22XKdLmBnpAMYds9jVMh6CmXmpzvJvZsouHL5UVe7OUuRJ/g57vgpUf/1sq3kaBvrXcQL5fLV2TXdQexZ7QDbiyea0RF8RqjtIzgbm3TuDcuF7K4kdxqqcRKDW7NrKchKvwki0AHoNjLEuKBFghRXihvU/0Fo2D5FohqJU3tAhWvZgCU5jEXErj9A4YQTGo3CQAA'
const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Siggtryggr';
const packname = process.env.PACKNAME || 'Siggtryggr';
const dev = process.env.OWNER_NUMBER || '254788409105';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'siggtrygrr-MD';
const mode = process.env.MODE || 'public';
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
const anticall = process.env.ANTICALL || 'false';
const antidelete = process.env.ANTIDELETE || 'false';
const antibot = process.env.ANTIBOT || 'false';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'nice to chat with you  ';
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
