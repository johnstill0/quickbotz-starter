import { Events, GatewayIntentBits, SlashCommandBuilder } from "discord.js";
import "dotenv/config";
import { QuickBotz } from "quickbotz";

export const bot = QuickBotz.single({
  token: process.env.DISCORD_TOKEN!,
  clientId: process.env.CLIENT_ID!,
  guildId: process.env.GUILD_ID!,
  intents: [
    GatewayIntentBits.Guilds,
  ],
});

bot.registerEvent(Events.ClientReady, false, async (ctx, client) => {
  console.log(`Logged in as ${client.user.username}`);
});

bot.registerCommand({
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("replies with pong!"),
  execute: (ctx, interaction) => {
    interaction.reply("pong!");
  },
});

bot.start();
