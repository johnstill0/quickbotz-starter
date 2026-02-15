import { Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import path from "path";
import { QuickBotz } from "quickbotz";
import { loadCommands, loadEvents } from "./loaders";

export const bot = QuickBotz.single({
  token: process.env.DISCORD_TOKEN!,
  clientId: process.env.CLIENT_ID!,
  guildId: process.env.GUILD_ID!,
  intents: [GatewayIntentBits.Guilds],
});

async function main() {
  try {
    await loadCommands(bot, path.join(__dirname, "commands"));
    await loadEvents(bot, path.join(__dirname, "events"));
    await bot.start();
  } catch (error) {
    console.error("Error starting bot:", error);
  }
}

main();
