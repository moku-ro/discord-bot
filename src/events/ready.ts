import { Client } from "discord.js";

const readyHandler = (client: Client) => {
  console.log(`Bot is online as ${client.user?.tag}`);
};

export default readyHandler;
