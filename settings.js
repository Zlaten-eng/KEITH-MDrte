/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61Wa4+qOBj+L/2qZ6WUq8kkW24q6ox4dzb7oUJBVChCEfHE/75BZzInOWdnZ5PDp6a0z/u8t+ftd5CyuKBDWoPud5Dl8Zlw2ix5nVHQBUYZhjQHbRAQTkAXYGddheMVKWaCvl+PzpNTPpG3SZZtMhULYpWhwTI2HddPpSdwa4Os3B5j/xPAwOxQPhoZ22up5fJ0sVAHCzlhdGUxZWPX8eLVRdvrKaRz/ARuDSKJ8ziN7GxHE5qT45DWExLnX6PfM8b7s28HI1wuOnWcBM6h1fKLYa/29Rc/tF58LauDQXVY21+jP6UXFO1cNJWM4nIVNX/aOjnl9DJc11JrH6eomLn9FtcmSfGgX8RRSoNBQFMe8/rLcR+7BkvGWwpfiZ2+IN18joaHwrqiwEVhKBaiNXCr1plMFl+M+8Hbjdh4IvlTVnaux+u2RZeDk7+xy1UnDvKLP6gXzh52qKn9SHySv9fK4f/EPbEMxXLWaT/AIysdeebU7ngXOVP0YH0NqiG90snqtMC1vfga/WJVcsObn/JBdsiXC+cQBabCJmg2dS/L68oweuf9Zgdrbtkf9Akv889YRmR9PS5fjSo9WWNhuS2dfbUqr3GY5qciDgK4mqQ7mGZa3gssj00JtCCyx3wjlZ0571+GK2eA0+wV9ovXaunxQ3hUTPx09+hA60EAuvDWBjmN4oLnhMcsbfZEpLYBCc4z6ueU38MLzsftK9KFS7WboOGuwJ5ehhp0Q7lI+oPeDJt62ZmNjrQS8BNogyxnPi0KGvTjgrO8HtOiIBEtQPeve6Yap3OaME7dOABdIMqSCjUNyTpCfxZ/VDvCC5Jlf6SUgzYIc5aMKejyvKRtcL9ga1BGqoiRZcmqZTmygUUo25Jj6Y5lY6FxMXkYnccJLThJMtCFqiRJgiBo0q39e3gYlipgQYMSFiRbt0yIJdnSRQUixbZ10/gPHsrv4iEb2FIMLBqGamJZEVQoOaKBsKSie5w+5QEh+l08REFGliHbmqQ6OlJEQ8KiYCFVwLYFoSl9zkOUfxcPAUFTMKChOBgiS5QNC4uqqRiCbFtIED7PCxSV299tkNILf+hL0xVIbIMwzgu+SMvsyEjwLj7vP4nvszLlszr1zWZBc9CFH9uU8ziNisazMiW5v4vP1Gz8AN2QHAt6a4OAnmOfNnjAWvHLaVqOvCEZ6Gtr11Os/TlqOmvH0seRLdUgDJDwTdAU9ZukB/K3rSrBb9AnSA4DSUOhDppwPKS9ufOvSmP0owHb7LmCL+FJ7Z0H/RH3emY5jgZ3tXhIBM1p8B7lLfEPZTZnB5p+Nia8njRmzzpiOepclxZRWvKKYcvdST/gPqQHdL9/jFOTBQ2ePXTR2vQ00GSrsfNTNXRl/eeCSElzGizSQ8qqtDH0loUGIqCcxMcCdIHp9quysA17PArkrdbrYTvCZoTBR9beVfqhglQyIE5HSjr2NvloIgnuUq9IlLDjZqk/Y+4sJUrP09bEZE+/AAFdsB/Zniv1maTG8wh5q7nReZ3NLsYwYczTDT69DljgmkMyy7ZsNdF0xzT7u+DZh89D9XUF+2S8748XwyFPZak64NyPtndJf6+eH42tpr6TSOqzKCZmr1iGSC2lzpoZk+d5Px4vxb1WDM7+fsNx7DlWuVJf3OnyMuNVGckU9l7kvfZCHVRpnX6nrtO46tvM8h7z4z6/jm/vhvhN2R+1Fsb0PobfsvCf2fooe+HW/gHjbbD/W8muSxx4bt3KrnZvWF9bz+Yy9HvMPbkrJ5x7o+mS9tNcCPfVCdyafs6OhIcsT0AXkDTIWRyANjiSguOPzv2FSKt6GyQ1zrIZJ/y94QFuvt5RBbd/AEYTmVSzCgAA';
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
