/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V647qNhd9lcp/YUruF6SRGkIuXAIhBGaYqj8c4gSTK7YhE454pep7h77YpwwzmiO1PZ1KzS/Lsddee++1l7+BssIUzVALht9ATfAFMtQtWVsjMASjc5IgAvoghgyCIfDsPL1uRdzgHdtNpbbnyDYKC0ufVBPRTJ6jY1SxSBpHefoIbn1Qn6Mc738AOHVtcvWkw44OTkej17xITlWaJ/v45HNLZbdZSc1On9fL65U+gluHCDHBZWrVB1QgAvMZan2Iydfoz+ZWsVwmpBnJgYKNdDOhRRrXTZuau2XLfA9vj7unQyLm2tfoE3Pt6BexqPh2t1TJrLdpjHFY+Ut0KvDzYCaZcposnUAs0zt9itMSxZMYlQyz9st1N+ZreJkZ6q6sKslsp6f5q/rCpuHrZYmftOBQTePReJ3OB4LxNeLP++mLzGebSmTBsqZk0zuoPKyptpmepExa0Hrh69t9YYvG98R98qGV7N/UXZsmhpcybcXW11KTdgvRXQcDjq6P9sajZuBgI/G3KzPMua/R15975QWfXf9peWI21zPmQlpi94Um6nycnq64dXSV9+e9gPukD9mZ/IhlZnPk9dr0HGtg7xVZuFyqqU74QDCCcaVYznTx/LprbDgnx54xG8CWVaesGp8aMQn9KC52i3AwFZ62k/LZkVbFHDkj/9A8vmWUoXYSgyF/6wOCUkwZgQxX5dseL/UBjC9rtCeIvZUXaFqQ885A0LlF6J72xnj9sjrZl2ZyXp2ssEa0PsIDP8MTbfII+qAm1R5RimIXU1aR1kOUwhRRMPz1rVNd0gQVFUNTHIMhEGRJ1TSJ03lO/oX+3Bwgo7Cufy4RA32QkKrwEBgyckZ98HZBES2BM23FFnl7pAjSiB8JiqhIGm/LqiFZXYrFPWiIC0QZLGow5FVJ4jWF14Rb/7/hYXGSqKi6ooi2anCypNuazVmGyluSaMgj+cc8dOH2Wx+U6JXdddxVX5T7IMGEsk15rvMKxh8i//gJ9/vqXLJ1W+7NboEIGPKf24gxXKa0y+xcQrI/4AsyuzzAMIE5Rbc+iNEF71GHBw5hVo6zh2Z1xg+xaVyNp4Y4q66Dh6q8H5F1PoojXXhAqho/SLrGPUSKEj+gRI0kUZDURFVAV467hXR3/lbRo2hi6QPmStORZW6Tplk0g+cFDt1D9qbKuxQRQfFHlSO4z851WGWo/AHutRkZ5cRNTLO3NE89BTvPpTk7ydVR+g73LnEw/PZp22YVd3izmTBS3MUUdN3q4vxJDUNJ+rMgStidBus/fk8ZadOU/GS1lCFclj+tcXomf/wPElqVHYP39nTYMWIQ5xQMgbmAaq16pjUfPwlzzXEMKzXM1ACf7fywifsYbtWnubbP1ovAda8v50OAr8VmYg0GmhpnoXF1Q0YI1P2mrR7/AgQMwVhusrHPR9l+tiGqr4nldtYcjpN05qk+mxzDQz57Ea2eUvCRIciZoNjsKEleGqZhoxpzJ39dbdJlmUPO5eOaDNxLOEofu2h3WX0fzPNyZu+5pF0YtqjJhjPzZQeN/cVoEXB8oJRBcwpFfbmexerBM1OvLVHqunlvMbpSLV65qAy0yNtUIqXJNEFCD9dpejewNwPN3x8u/G4tdxEmGL29A+/t+cc2fs4Dd+t/h/H+svydlreIxwN3ah03wasmRNVmR+XcHPmDwVJ8sRrvlVOhIlxCzTuBWzfodQ5ZUpECDAEtIgj6IIeUGZ/z/BcWoYp9ULRGXa8ZZB82AIzu8zMB3P4Px80p/zEJAAA=';
const prefix = process.env.PREFIX || '+';
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
