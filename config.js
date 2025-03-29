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
SESSION_ID: process.env.SESSION_ID || "CORNEH_TECH_254;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lRSCs3d1hlcjdmajIxek1sZWQzYkFCNERaWlNJKzdRc0xwUTNuR0xrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclFzWmh6YXZSSWRwNnFjNksxMzZJVzJVT2VibEZhdzBpWG1UZkg4V2dIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQjdBU1kyeHlBOW52eEMxRU9tQ3d1dktXdTRyZGlXbEtqa2tyK0tSYjFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIdUEvbklFdCtDT2RZR2FZbllIZVpEKzRGL0ExR0VEelNJTkhrMmE0VjFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPUHV0MUo3VkhGbktoVVRzaUk0WEdlVlRQcEVveFlybWFLYTUzTUtjRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8wYWx3aXZzeHNrNEM2VkpLdWZVVW1jcktOQ2wySzJxcFo2K2EzM3IvekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVA0K2VjZHlVVG1LNlM0MEtSVUJQT2J4ckk1TVY4TWZ5eUdsN0dGYUpVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGp1bFNjSlNkZWNLKzd0OVdxRGFNUDIvTGFYaFJOUEROem4wS0lhUmRXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKS3dHVU5vZ2ZFV1RyRkVydG02NjkyWXI3NXFzMm5kQlgxdnc1aHdWK2s2OFRMM00yd3lXb3dsYXU5M2hFWVRBTTBBbk9DWjlySzl5TEMzdWlnVEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6Ijl1VktpWEQ2dVlGdHg2bXk1UnhDUTZyaENoUEE5VlRPTzlBTUhRdUlDZ3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkwxZlNFTWZWVHBpZkU4VTAxMmphNHciLCJwaG9uZUlkIjoiMTAzNjljZjctOGZiZS00NGI3LTg0OWEtZDliZTg2MTY5NjNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inlzc2E4Z2R3MUN5MFgxMFdYTzFPOUVJcDlXST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyd2prUnc3RlNuVUxDWHVHaWdXQzdEaGF3NFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUc2RVFUS0siLCJtZSI6eyJpZCI6IjI1NDcxOTM3MTEyMTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNvcm5lbGl1cyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHZnNFp3R0VPeVNvTDhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV3A3WVNZWkhVdVcvRUFrb3BqOHBaVk8wTmRUKzhQamJjcDZvRDZyUlNWWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM1oyYy9WTjFvOXg3YVp6OVhsMkhJc3BpZ0ZVOTRiYytUcmRyM2h5ODhtSkJzOGpValFvUTdKQzBqUE9VWHBhNThaUktmVmJJQWNjeVc4OUlNWG5CQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImtiR3FtRkZaZjF3SWkwOER6QUoyZGVoL3pnbGZQTVZyZTNIM3dZdkErWXZySFp1MVdRN0IzQ1FNeW1nTG1OQ0l5RU5NQWo2YnBHTmVhVm5Ob0VGaUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzE5MzcxMTIxOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnFlMkVtR1IxTGx2eEFKS0tZL0tXVlR0RFhVL3ZENDIzS2VxQStxMFVsVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzI2MDAzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGTEsifQ==",
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
