/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VVS46rRhTdSlRTu2P+GEstBYyxAf/BNibKoAwFrrYpMBQ2+MkLyDAryCRSRpln/jaUJUS0u9UtvU86SEilourcc+895/IJkBQXyEY16H0CWY7PkKJmSesMgR7QyihCOWiDEFIIesAe6cHFUgt0jp9G1bnes3ytlLx/EaL+HG52hXAkl51Pzxv1EdzaICt3Rxx8BzCUfLNKpqZaOR6ThuOJ2o+vM7mUQ26IRuTqMJOpUYcmYtNHcGsQIc4xiQfZHiUoh0cb1XOI84/RX9jHAT1ZutJaKqzjhiwZJmcvoVhcPsU+x7tdNt1gjqoc8zH6s3HXIAKXcbP10Esv2mFb2fohXbF76RpblTk1zX13eEBcrN7pFzgmKDRDRCim9YfrbqqLkW8IyDV9pq/kp2V0eoo68nC2tL2py3rX8W7LSMY+Gn2w7oE8mB9HzEwbdjpQIYZhZn1zcNA2E/3CyvlRMAu7RkfbG17eE5/nr1o5/J+6q7YbDLuOBensiTelSzGQXcXInPng6Ee7GlnaeLbUdUEgk4/Rt5Ts0jEvdjXz/O0Bz09h51TbfKQRonboOvTtZGh1hcmeMd/oQ1rm32N5GsF1PDpdnZUS1TW6yilTJmc+xoXqFVPsSGzQj3inuCp1XyfEX/bP132dGDPLbI2358l2KXe4QLEjp8rGuVtoLUN5ih+fMzqg2gxBj721QY5iXNAcUpySZk9k2gCGZwcFOaLP1QVPMhL9nTCvtsmeL/yMyHg5ZeCYC1dJhaHstGxOtmbTbFA8gjbI8jRARYHCES5omtcTVBQwRgXo/fzcqCbnHCUpRRYOQQ9woiAzXYkReFH4qfjxsoe0gFn2I0EUtEGUp8kEgR7NS9QGzxd02dB1TWaMgahKhi7qjNbVWVFnNdnQZVFqMkzuQV2coILCJAM9VhYETuFFRr790gYEVfQunyZpnm2DCOcFXZEyO6YwfNXW60cYBGlJqFOToN8sUA5677YRpZjERZNZSWAe7PEZ9Zs8QC+CxwLd2iBEZxygBg+wE2a3EoJseXUeTktYyJp+shZN5fYpuR+BkSyEkiA8IClkHwRODh4glKQHng8gy+2gCLsBaMpxd25z55tCYhbeqDxgTqk7vqbDQcBlSyONB1u7eBbDXQEoR+FrlXcwOJSZmx4Q+Q6ue1nLqhJrC3gY8tJ1teJN5HFzXtpu3+HelQV6n96mZT8NG7wFP9G6PLsBTbeaOF+oocd9qQcCm8PA/fx3VX/+6/OfP9iff/3n9z9++9rbsHhpUYMfIgrxsQA90Lc6djFLtcHUDni5Oxyqg1jtxyp4a+mrQ+8WuOCQiVp6fD3rVi7B0BdPibRbH/3xUljV4pynUVUri36gm49fAQE9gPIoZAa2f7XSctOZrYZkj8Trds6j6uotmY2YHLh8UYiMs1vsjbV1sDeaNly1ONKyT/7prJZyZUhZR5Qxy51PxZSEnrp4bKLdpfU+WMtKa+pBVxsx3c7AsmNN3LrTKOCmBFtXLU14JZ16mkKGlRjs4nJc2Xq6NcXcyarNnEB/QD23Fsx1ah8m/vCyzsddrN5nx/PsOr78M/CLre9CjDB6HsEvPfqvVr5Zgrm130G8zPRvyE4LTBKOOrEwkS81bCVkg2BWJqy/cRhkTEpXkb1ucF6pRK3BrfF6doQ0SvOk8RUJ8xSHoA2OsKDqm6u/HBSCzLVBUqtZ5lBIX4cBUJvHdlvg9i9fyQQ0rggAAA=='
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
