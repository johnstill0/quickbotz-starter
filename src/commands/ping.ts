import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Context } from "quickbotz";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  execute: (ctx: Context, interaction:ChatInputCommandInteraction) => {
    interaction.reply("Pong!");
  },
};
