/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61Wa2+qSBj+L/NVu+Uy3EyaLAygUlERwepmPyAMMspNGFQ88b9vqG3aZM/2dJPDp8kw87zPe3ve+QHygtT4Gbdg8AOUFTkFFHdL2pYYDIDWxDGuQB9EAQ3AAATDw86cGk1oZEu7cFehmjlak9Wm68WxuxNtMhL3kSoZ5vkJ3PqgbLYpCb8ApMpaycPrxcUzu6TJKN4lo3Ia1waVJX+rPO7L8XB/VVChFk/g1iEGpCL5zigTnOEqSJ9xOw9I9U36hukkz76uMlBk+EDAuT/33cm650W6PHlOmSTVKnzYVtk36VuZc2DmkCqJLvmbSeyFl2MUPYpzN0gMOzz3Mq710Eiz9vWdfk12OY7GEc4poe234+7M/YmwkXaBoE1eWFcecQvNqUlB6nG9Z67XdispM//IT0fq94jXpsQlY3dtr05H1Xyc5u3Ev1iztEjSTbydcnypVLWEUobzPhOfV++1cvg/cc+moSIti6WsnCfm8kILLnb3l8fEs/hRZT+e5fZQQ7fKcHb4Hn0IxYtS1bnbK2elvnyGjjj2pimN/HU9Hsr1TLFWGlfS8RV+0A9oU33F0t1nR3jlr+fZ7FhVVshvtieG2xPT1zc2QTRawNkY7Yc4s23vaDNMtA2ItPUty3N5v35xVFYh/shGi9h5vJgzxn9p0Pnp1aMDbscRGLC3PqjwjtS0Cigp8tc9ie2DIDq5OKwwfQ0vILmQ55fZONcJO2NPCgzZZt0m0YXpnVx/7PWstkiyxYug2E+gD8qqCHFd42hEalpUrY3rOtjhGgz+es1U53SFs4Jii0RgADgBSqws84LC83/Wf5yTgNZBWf6RYwr6IK6KzMZgQKsG98HrBVFDGjJUTmB0A7E81BCvSbwscoIhcQIUOxezu9ElyXBNg6zsPIOQlziGFW/938ND0kxdYjhTgaJiMqLJsgqrIE6WGFbiNSj/gof0u3gg00SIg5qmyyKCjK4hVRA1U2d4KCNNY7/mAbnfxUNUNE6XNI7VWMGQGQUpElI1RkOI5URRhF/zEPjfxcOUOVPlRF5SBB5yis7qGmsYCLIsNBD6VTwEePu7D3J8oXd96bqCZ/sgJlVNvbwp0yKI3sXn/WcQhkWTU7fNQ9QtcAUGn7YxpSTf1Z1nTR5UYUJOGHV+gEEcpDW+9UGETyTEHR6wzriNok3ikiHczvWHZdqesl3XWUmR348EfLwVQjl8YAQ+fIBbyD1sY5F7kCKRU1iJEQTMgi4cd2nv7vyn0kQhwebCVaBhLuhQCjcweHGGAYbYflWLu0TgCkfvUd4G4aEpl8UB51/pbBHkTjp/zJFXIFSPVvGLreWZHJ3Xn3Dv0gMGPz7GKSqiDk9aOdMlJ+mgy1Zn51/VMBB+UhB50J0GXn7Ii3PeGXrLQgcRYRqQtO6aZsyfm9rQDKtBwkQeDlVjp6KdCj6y9q7SdxXEUGPVfCLmtrOuJnPIWL5yDnZZka59ZapS04cYnxa9OSqefgICBuAUoYsUrPmUDkcNy61iTtulnjkL+a2+9yZrZuohxzgsUlUVJ5fCg+5ouddY2Yui2VConzNmuObcXA43p6TM6Gp1PF819amzdq+ez8bc3mnrpgeuTohnLezjkuAyPWmyvNo8spvwsjjr8uX6jJ1khtuhbfoOH1f7Y6OPL+GBLGb7JvZ1dzS3T5C3TciJ5yR7NfY+v9K3dwN5U/Z7rcUEv47htyz8MlsfZc/c+p8w3gb7f5SW9tKokWO1vfJqDJ/ba2+K/DgcFtbRWpnx0pksfDzKKyben4/g1vVzmQY0Lqqs6508qgoSgT5Ig5qqH537M5Fm+iBr1bJ0aUDfGx6o3TeOeHD7B9We2rqzCgAA';
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
