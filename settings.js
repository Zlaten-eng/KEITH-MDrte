/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA71W2Y6jOBT9F78mNWFfIpU0ZguQUCEL2Ubz4IAhJMEQMElIK/8+olKlLqmnq2uk1vBkGfvcc7dz/Q2QPK3wEDeg/w0UZXpGFLdL2hQY9IFWxzEuQRdEiCLQB8ORUPJRR/Yme9vdRL3wmiTnCV01y4qumTOzKRqjcw7mW3vyDO5dUNTbYxp+AujdXvaInBPYCW9JcDgynmyOX1zF6ZXaZrCcq+vrODVXS45VnsG9RURpmZLELHY4wyU6DnHjo7T8Gn3kzGOmtFS/Y53pTa/3m6tR8qhmBE0+bpcZpw72+2tgBUH1NfoDveNPZ2jU2Bx9iUJYjjUpqjMoz+N46I2v4iq3Q11XinnyoF+lCcGRE2FCU9p8Oe5Y3+yP214c7beVn17kxSnx9mfB2HCxVu9QqA7FATHCXoe7fI34mlSbAz8andF03VHheh47IyPPlcCSs9nCXaoXB5lz7YIn64/E/fK9Vg7/Je7euNjKp2XFbGtnP7IZrYLczhg3OuPdzAta8n5vHqs1tVZfpC+nBE7p1YvyHpedEubYm0RBFPnDzXQ8W/fcc9BbS7lmeZcP9BGty89YrsbNkZesTNyotd+EBZ1e3SN9MUbi+exEvjKHdLWogxLaHRdpV9LTMIvswymWQimRxOZ6TZxgPjKnQ8e5JZsqVwttlzy/enTAjROBPnvvghInaUVLRNOcvO4pfBeg6DzDYYnpa3jBeO174w20K+LporErysTWtsKOGC+Tfdrsq1LgbIcU+l5RnkEXFGUe4qrCkZ1WNC8bD1cVSnAF+n+9Zqp1usRZTrGbRqAPOFGQWUXhRZXn/6z+uOwQrVBR/EEwBV0Ql3nmYdCnZY274PWCzpsyqxkmp4pQNVhDFqHMm4bOQSgLjK60LmYPo/M0wxVFWQH6rCwIrMArDHPv/h4eliFaUDAtSzdMyZR1TZdYRhANWZYtqLLs/8VD5xRoSrrGaabIaJqoMwqEOmNqsqCzsql+zoOTfxcPSYS8YRqczkiSYfGMCTnF5CRTUEVLUIxfxIP/bTwYRTMNRpV5HZqWKlqKJQuGpcuMyTEGLzCf8xCY+99dQPCVPvSl7Qqe7YI4LSsakLo45ih6F5/3nygM85rQWUNCvV3gEvQ/bGNKU5JUrWc1QWW4S89Yb/0A/RgdK3zvggif0xC3eAAPoRJPIzqJ0Iy3YbrP5PEhaTtrl5PHkVASpCiU5Cc2jLZPQoTVJ1WQmCcRqVusyNuttI1AG46HtLd3fqo0ZDWsosJxz74UpfDGDJ2AHhR54pP8VS0eEoFLHL1HeYvCQ13M8wMmn+AWWDBSoYJhwPVGl9ksaTz3eqkPuRJ+wH1ID+h/+z5O9Txq8YYrOLJYTwJttlo7P1RDnxd+LAiC2tMgIAeSX0hr6C0LLUSEKUqPVds0vnyuK1Mzh+MRWyqDATQTqCcQfM/au0o/VBALGgvJSCLeZF2OfIFxF+oFJVl+XC/UF0ithYDxedrx9fz5X0DagBSc2wlzGPfi6Xy1ZoV8oV9PJ9bvnIh9Gk4jfFhmux5nsiNnIKC1u7ezptwpBDG5v16pqykfNry7TBY9sq7XegXzQL88t9Ye1fPRmM5i000azlBRdrFnQakuF8xGZn1hPzC9mO/x8+3KqZOblW8nlBFcJtsltrBc43hkkglL3GGQ2Tf+tAj8OikKukRO8jY/XufX8e3dkL4p+6PW4hS/juG3LPwyW9/Lnrl3P2C8DfaflJa2qmE0cZtOcTMHw+bWedEXcTjI3ZO7tOL5ZDRdYJuUTLy/nMC97efiiGicl1n77iJRmadtexxRReH3zv1RDGRV6IKsgUUxo4i+NzyA7ee4K3D/B7IF2USzCgAA';

const prefix = process.env.PREFIX || '#';
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
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'currently available please try again later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
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
