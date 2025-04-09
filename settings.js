/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VV246jOBT8lZVfOzMBAgEitbRAEsiVJFzSyWofHDDE4Rpjbhn1L632H+bHVnS61S3tzGwvTxbY5Tp1qg7fQJrhAi1QC0bfQE5wBSnqlrTNERgBtQwCREAP+JBCMAK1IYeBM10c2Co9tuRJhU4t8/JCnG9ObaHkSKiPmRKbe331CJ57IC9PMfZ+ATgvONay/XxlLThiXdzrzhLKmzcOYankVTZuIAmmh2uma84jeO4QISY4DSf5GSWIwHiB2g3E5HP0J+bgaMrJPlPT7KzqU2KctRMr0HKv1+vBuQkD1lav6OZOo8/RN5w977lHub/HWT0Zt5XNyKZcbKYELhVzWVfwEEHhoQou3p1+gcMU+TMfpRTT9vO6L/ktW/Gtsd9r0aKPD1XYf1hYA73vLuLtVRB4xsT6dPcQfVJ3PjVISAUG0weNTwzhIvOWoG7F/XW9OC5WZp4iRKmCh4bzkfiGvHkl+j+6H/SlXUfQ6D84rVY004BV5lRJ4RI6u1Ntin3erBfncpM+OZ+j38yH86lorXeurtgzaz00t/PBfoEFYs/ZWBDoXhLy+JTzk9k7fUhL8iuWVjELnrRZmG+nh3Q9SepBNXYvuW5xrcpu82siNQd1vXOP7qlvR9NqdVs7mjibsg/Xsftkmi2zM/pOAtfp8uoO9CyOHHe8fXypKELtzAcj9rkHCApxQQmkOEu7d6LcA9CvLOQRRF/UBctWCWZzftz0z/6mueUMa/qHaTKeBnDdBPVmWKXChTFM1/QeQQ/kJPNQUSDfwAXNSLtCRQFDVIDRHy+N6momKMkommMfjAAn8KIk8YzMMsLvxdf6DGkB8/xriijogYBkyQqBESUl6oGXA5KkDIdTecxMVEVmRV5i1LE8HqoTTdEGqiZ0FSb3S22coILCJAcjVuR5juUGnPD8Zw+kqKF3+3RFD9geCDApqJOWeZxB/81bbx+h52VlSq029bRugQgYfXiNKMVpWHSVlSkk3hlXSOvqAKMAxgV67gEfVdhDHR5IWl1xw0C0ay4r97Z9iXUTh51y5yy9b+FYUeKY0+lLIDCnL/wwQF8kIeC/QMQFQxnJkBkyoJPjntzuzE+N1Cc3gVzHJx5nthkukHdr53ko4/Puns67AxBB/pvKJ+hFZW5nEUp/gcvqilCcG43R3bA92FxxfFL57U6aN7MPuHdngdG392mpZX6Hd9yKk/VRkUHXre6ef7lhxP/AECnsdgPr+18hJW0Ykt8mbUERTtPfLByW5PvfkBRZ2jF4bU+H7SMKcVyAEdDWSMzFlTZZcpgjkq4rk1DRQgW8t/MtnXf7u+J+KXmRtd4Zxu1Ynnf4ljizSb8viX5kKzfDpoRAeVO32eMPQMAI3Ax9Q0SbLJ6IJG8vJCoGbPTgbbyn2VAXfAaF1jbT06mN2fl6sWWW/MrG5Ww343Ajtn5ptAxpU8Ip80tsNFtZnbWO1kX5zVYfL7OHibZDmy1ydPZ2IEbdWv51z3BGwjPNCcc4sFhizIbnSmkZq/FJyprNmFPPJ8rL7LXZHBhxOElWqZZpuL3picaOx+F9brzMrfj1f4FfI303YYDRy/h9bc9/tvE9D8xz7wPG60D/iedUF7G4b8wnF2fXSNwpcw6FEGvqpt83B8dJvWoYEQ65ypZWV/DcBT2PIQ0ykoARKJITBD0Qw4Iq73n+wYhguR5IWiXPLQrp2xgASvdsIh48/wNh42LNqAgAAA=='
const prefix = process.env.PREFIX || '+';
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
const presence = process.env.WA_PRESENCE || 'typing';
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
