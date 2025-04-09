/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61W2Y7iSBD8l3qFAVf5RhppfdJgwBjTXKt9KNtlbHziC8yIf18ZujWtPXp7pfFTyUdkZGRmpH+ANAtLYpAWjH6AvAgbXJHuWLU5ASMg175PCtAHHq4wGIFyfqqs4wRBG+3XJlv1ZJLRB2sS+e3YitgoRkYuaXMy35Xfwb0P8tqJQ/cTQNZTVvL6HK9f/cO+x0X+Tb6e+a2fOZr5YqivrjDn/dzPWn3/Hdw7RBwWYXrU8oAkpMCxQdolDouv0e/N1Fxg/RyepnBMs+LysEInt9zbhPLns0Y7Y8bswVqXXqKv0Q8baB6Ys1nKupjEO0edtgac9yazmT0flsvkSPJUrFhnF7w+6ZfhMSXexCNpFVbtl3XvvYgTJWpJApVmEsznt705FIzDfs+e0tBa9lYWXNau29umXyS+pi3FRDt3/Dpu27U8LSxnNU6KxVClGRveHI9SGYb0lN7O+kh8Wbz3SvR/dD/qG0td5czJcHszimxtHCya9KapLGddafUS17ehUeBhnEhfo4/p1YSXwuw61ZKedQqoUonVYjprtDIqd4LKyLq3i+lQCPY/6eOqLj5jCfdYGc9Cc6sdVG9c7W1/Od1s6Z1qT80MctnWUaYHcSXuA2o/NrOUO1zWTOxkc3ccylFgXi7LerIQVNZ0DkvD7JUXdh1K3x8ZRaSdeGAE731QkGNYVgWuwizt7iGK7gPsNTZxC1I95AULfnEMjKF6iLJ6tu2d/ZrR/aNOLHiRAn8TTm7a9HTg4ETRvoM+yIvMJWVJvJewrLKinZOyxEdSgtHvj0p1SRckySoyDT0wAohleBGyiOch91s5uAS4KnGeD1JSgT7wiyyZEzCqipr0weMDjkUirTGsghRRZFld42mZFxhdg4jidVXtUkyeQddhQsoKJzkYQZ5hoEgLLHvv/xoeAqPRnEZBqAgsFDVW12lO5yUkUJwscgLzOQ8O/SoemgYpTaU1SdUkBJHKQohYWaRpQRFoRFOf8+CZX8WD4jieF2RR1FWRYSVJ4XlF50WdgYoiU1D4nIfwy/RQdU0QNZZlRA2qUKc0ldUomackGUIRav9RF5G+/9EHKblWT3/ppoKGfeCHRVm9pnUeZ9h7N5/3h9h1szqt7DZ1le5ACjD6cJtUVZgeyy6zOsWFG4QNUbo8nrzvfeCRJnTJ5FHOJT1WDH5unesG0egsCfFuI3WDFWTp8xWGhQwSKPQNOT77jXGw+80RaOcbhkhAAiSijwjo1Hg6e/fNv2/RAk9nU56sTxPVKirbnuRkMxOzsBEeZvF0CFIQ711kB7tRna+ziKSf4CIczbY3d3x1D8ZweA4OEtzY+k1BF+kD7tN5wOjHz22qZF6Hp8CVMFtJNuiK1cX5WzOMoPj3fkhx9zYYxAMySAbZIB3ggTcgXcS3anRYHqlwGJddmAnHljNX1wxkI0cYjyX3KCnHTu/36r279dMNEwMziC32EaRkY5yOBdRGTP3S5MveUV1Pr7zJ7zJj6Erjhxv+FQSMQHDJV9vemA7PqncUxSg0jvTrbVO8nJzAsmdkWORqUm8vUHEyQ0tVN1jnfKPXrTe8xu5rTvGql8vtdsOf2ev+yrnXpKd01v7eRh+Dlfya2WLaH6LAuKy9IYcWZHN2U3K6NeQwDMpV4c4njUWs25qJ5qJa6wlXopMcpLIWRDZ309elSZu+5C6i2RRTL9MgvDz3yGOPxW//D+Gbwz+bzg/JYx2/leM/y/az/6l7/wPG24L/lx6TD2FSL2qMpgtPsoP82izK3JwFPLceZhLVuuRWQ05paEkOwL2b6zzGlZ8VSadM4mDQBzEuK+nn+P7TxoB9kLRSntsVrt6nHkjdpbdbcP8TIY/1+LgKAAA=';
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
const url = process.env.URL || 'https://files.catbox.moe/zt1drz.jpg';
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
