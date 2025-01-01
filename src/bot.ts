import { Client, GatewayIntentBits } from "discord.js";
import { configureCommands } from "./commands/index";
import { handleMessageCreate } from "./events/messageCreate";
import { handleReady } from "./events/ready";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", handleReady);
client.on("messageCreate", handleMessageCreate);

configureCommands(client);

client.login(process.env.DISCORD_TOKEN);
