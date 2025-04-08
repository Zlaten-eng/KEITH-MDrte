/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V2Y6jRhT9lahe7R6zGrDUUoA2XvCONxzloYBiMauLwoBHfp63/MK8RfmP/NB8QoTdrW5pZjodKTyViqpzz7333FOfQZIGOdJRDXqfQYaDMySoWZI6Q6AHlMJ1EQZt4EACQQ/oE7+a00uhGFeXaSbmYas0rL2CopaOLyNnclQzmVj0KOyXj+DaBllhRYH9DqCGWTpG81F1qENqcW7t9A0eU60qOVf2yHU2xJz5E4mgw7D/CK4NIgxwkHj9zEcxwjDSUb2AAf4Y/a5eiXvdvzChq9qXEXdYilb2RFE5JKwpVDP/QPuUlUEmTj9Gn8fWpjvW0dBLzem6NtiONpwOYtGPqnDTLWrZbiWdU4UilbrTzwMvQc7IQQkJSP3hug+0nbkiKaMxazKeGMeB1vEcOiPmtlTWHTviym6532utci9/jLgHBXnqx0tMn/zEL/rRtiqZIAlrQbSE0piZRbpbGZsjnYzeEl/gF62E/6XugUZsitGPRsak/aVjtYbbvL7EPDbUgXCKTkJ5CteXgZDG04/R5/pTdHK9SG3xo42ZepRmd846wfRp4KgT30yy7fnpwq2GlfhKH5ICv8dyq5f8RbArJ1+dvSxBLXemjrtiqSrjwjGomhzYi6DZVOSgzniwlE6ThS6xYXf8RF10j2CX7uv40M/j5WDhioPBoGvqqvd4yyhE9cgBPfraBhh5QU4wJEGaNHtiG0DnbCAbI3IrLqhCers/8vnOWHlaJJx5yiz3e6ZzHLNBvKHRrrMYKYi7XHT5EbRBhlMb5TlyhkFOUlxPUZ5DD+Wg99utT03KGMUpQePAAT3A8JwgUZQgsZL0a/6p9CHJYZZ9ShABbeDiNJ4i0CO4QG1wu0Cxosooiib3aVak+iLH0nyf7UuiolEULUpNgvE96DqIUU5gnIEeLXAczXVFib+2/x8eiiyzypMsMhQvywrDsQqrdkW6K9OSxouy9i4Pielef2+DBFXkruKm9izfBm6Ac7JJiixKofMi8Zef0LbTIiFGndhqs0AY9OjXbURIkHh5k1mRQGz7wRmpTR6g58IoR9c2cNA5sFGDBwRG2Yin/cTYob2J+EW6jeZ02XTQT5P7EYbmbbvrOg8079gPnERLD5ZEWQ+szYgIShxHO13QlONuIM2dn+o5gjNp0fFhX5mpfu2Z9VDZhBGEiTm6afIuRISR81JlC9phka3TECXv4NasmfT1/OD4fnwYKKwUJFTuruY6Lb/BvQsc9D6/mraaOg2esN9ys0V3BZpuNXG+U0OPob4XRAKb02CBg8RGv/z9hzyb//Lt65e/vn398mcT9rknDaCDCAyiHPSAOh5qRWIuib7YnUvTlA1Z1uXb2Lz08MUZ7rM384+XBYniXafF0Uy6leoB7lTFORbgZSdAqz8pHflYmkw1+hEI6AFCFauREZb+Tk/tktotutLROPsWDNx1GWw9tDlSJ3EzXyfJarHeT6Cmz7ZO7muL02lIx0OTysmkXm1P+sWZ2/IOTzXuafnYRLtr6W0whSLcwVFYw2Lkc9jnzNKS8wm37Ux3Wlo9xSaPl4kd0N66oKTdTLRjY7GZPO1SVfLn52wWDsau60VWN7al01Bwdk/6XC3vnnXzzOj5rQqe/eSuPDdAN+t/7sm/9u51CKhr+w3G82PyE6Epa9MUL8LhEJ07xcw5aa7tnzqihfmCyemCiStVHC5H4mCWG+DaTHcWQeKmOAY9ABMHp4ED2iCCOZFf5/gHFiUybRDXcpYZBJKX8Qdy803mKrj+A7319DknCQAA';

const prefix = process.env.PREFIX || '/';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Siggtryggr';
const packname = process.env.PACKNAME || 'Siggtryggr';
const dev = process.env.OWNER_NUMBER || '254718835933';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'recording';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
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
