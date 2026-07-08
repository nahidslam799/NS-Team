require("dotenv").config();

const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `👋 Welcome to SureSMS

🆔 Your Login UID

${msg.chat.id}

এই UID Website-এ লিখে Login করুন।

তারপর "Send OTP" চাপুন।`
  );
});

app.get("/", (req, res) => {
  res.send("SureSMS Bot Running Successfully ✅");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
