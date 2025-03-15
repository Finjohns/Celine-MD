/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : Malvin King <https://github.com/kingmalvn>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxoQTliU2x1R0w1SUhxbkNNLytpalpnZlZnMXVMR2lFNXVLZUZHdjIwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnVUNytSMWo4ZjNKNWlUeWRTSXpJZUQ5dHVNYVVGOXROMjAxV2xVZWhGMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR0VrWVBIclRLUFQyLzFCNFY3Z01lWGE1bVE5dm5GUFNzWU51cHk1OW1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTmE0clVYSkZldWQzMTJaK0hGdnRsV2hBTEFzWlVpMTZybVYwbitiNGpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBWS9GZCtmdDRPeE1JSk9VdktaazJ3RzFaSXYyKzM0eGtLdHVySExabjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndqZ3JOdXNuWndkT2x5NTBFOTZ4dlpYZ05sRnB4Q1JleWt2UUNPRnErd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtSNGoyTFlzVjBIVTZNN05kb0ttMUJadmM1dTFRT2dpRStnbXo5aFlXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG00bDBxTGZIdmwzSXVDMWgzL05kZXZPOHgwcnd4Ukp2U1VqNzl3WXBWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFsVnRNM2locy9henE4dzhEbW0rL0NpbFZ3dXlxRmllZFNXNVZ4T3Q1MmExTGlweG4vaGhIUW10S2k1SzQ4U0ZSU2t2N3NyM1pxemNzODN5Z2x6TUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJkZm55N2xYamswWkhURHErczljVHZBcURIb0owM3I4Q3hpSEpsYmc0eG1jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiQnBjSVNDRFJuQ2NacTAwYWVUNzRRIiwicGhvbmVJZCI6ImQzMmI4YTBlLWNlNzEtNDJlMC1iYzAzLTY5ZDE4OGFjNDAzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0NzNPdnhkSVZjU05EZmRsZzdOd3NuRWZOaVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzlMTU5wblFHY0hjWjJhajV4UDBNN3RiME1zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZUVkpYRE05IiwibWUiOnsiaWQiOiIyNTQ3MTYyMjY0NjU6NTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ29ybmVsaXVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMamc0WndHRU9YQzFyNEdHQXdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXcDdZU1laSFV1Vy9FQWtvcGo4cFpWTzBOZFQrOFBqYmNwNm9ENnJSU1ZZPSIsImFjY291bnRTaWduYXR1cmUiOiJPK1JIeFBzK2xZQUdsV3I4ZjhJV0N0S01jaUUyUFNDUklTTEtDZ2ZqMS9yVUNIV3FlNGl3VlVGSnRmNGNEWVhZUGMwVFByeTBtRFh4TGdFc3lwMzZCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoia2RENTZES1VsdG5LM2FyK3FHeXBOQStOYlIxZlBQMHpuUWxhZmIwY0RFWFo3WTFrb0RuN2RyZmRlZHFNTUlEbFRvK0F2U3Z5aW9lT3Y4dWNGUmd6RGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTYyMjY0NjU6NTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnFlMkVtR1IxTGx2eEFKS0tZL0tXVlR0RFhVL3ZENDIzS2VxQStxMFVsVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MjA1Mzc0NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDb0kifQ==",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/quytgo.jpg",
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/quytgo.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『CORNEH  MD  』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
