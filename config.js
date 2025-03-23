const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "dhAzUT4Y#9-XEEn7oC6OtNk7zegxUVuK-GhcOjcIK7-H_QKH0Idc",
  MONGODB: process.env.MONGODB || "mongodb://mongo:nHMMoWEAEvMTiEoenVsGOXybHUMOAZLm@shinkansen.proxy.rlwy.net:37636L",
  OWNER_NUM: process.env.OWNER_NUM || "94789634207",
};
