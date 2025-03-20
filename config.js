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
SESSION_ID: process.env.SESSION_ID || "CORNEH_TECH_254;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JnbGFpZHBuVEtVUzhtVEVhN3U3RklOSzRYS3RNUUVYaWpNdWdpdEJGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTk4wM01DQlRKRUpEUTZZQUxtQ3hEa2xyYkJla3BqSnRTdEU4RmdpQVQzOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTXFNTlJzMzd6K0FGK3B0NGxaSzB0YzUreWNUL1BVd1RhWjlqWk02TkhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTkVtckJ3UGdVcWg2cytoaUE0VmtqZTB2OVRpK1l0QXYrWUEraDl3bVc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGWGtNOHQ4K3RjOTRhNkZpVGZYS2lPeFF2WWRJU3hlalVSSmRNcTBKSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJckhuWVlHUklSZ2dwd01ONGd1WWdreldwb1ZHbW96N0ZGbHloQVNCeHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hrRG82OTkvVWhpdXlvRG5xNVltSi9Yc3QvczEwZzZQK214SWlXMnNtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielBzZFcySVFOTDJmT3BrL3FwT3hVQWdvT2pqeTJZdkNJUWlGTHJXRVNTZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlWV3RYRjRKSzVuc0JGZTM0Vng4dWE0eTIvN0V3RlVTejhrSTI0WlZtUmlUb1J1akprVzhOVnBYeXQ1enZ2aTJFK2tuRWNTQkRQb0VqQVZVWXVmWWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJrbmRWM3l6d1BPeDJjdzVCRkxuUlBXaWpISEdmUXA0UnFVSnpiamE1L3E0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhLUNldnlhMlNpaUFROFdJV2ozZGtRIiwicGhvbmVJZCI6IjA2MjUzZTRhLTJhZTItNGJmMi1hMTExLWYyOTYxOTI3OTU3ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXWnpLS2N6RjlORVl4U0xvK2ZDQ2dseWJ4bHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1lOWEhyUTVqSWx4TUZhYS9KelNnV2ZlL2l3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZIU0tBVExEIiwibWUiOnsiaWQiOiIyNTQ3OTU4OTE3MTE6MjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05XVWs0QUNFSUt1Nzc0R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFRYy9IZExMUjZ4bE9LaFdrcXcwTzBUR3JCa0tyV1ZZa2ZrY2tMRXFYVHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdLU2RwLzh4UXFneDFPZDcvc1ZMWlBSbVhGak9hVFZONG8xUXJUL0k2VS9oMThsYXQvV1RWVmVxcHZvQWRISWs2aUlPa0U2MW05Y3MyNEk2ZkM4UER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4MmprYTVOVnlnTzROL01jVE40N1lEMWdpczMrZ1NoTFI4ekVtaC9TNkw4TEczeWtYejcvUzBCL1lWTXM5T2dieWxnL2RMZENBK3JVMW93aEJWaDNoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NTg5MTcxMToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXa0hQeDNTeTBlc1pUaW9WcEtzTkR0RXhxd1pDcTFsV0pINUhKQ3hLbDA4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQyNDYwNjg5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUErSiJ9",
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
