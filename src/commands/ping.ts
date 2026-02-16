import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Context, Command } from "quickbotz";

const pingCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  execute: (ctx: Context, interaction:ChatInputCommandInteraction) => {
    interaction.reply("Pong!");
  },
};

export default pingCommand;
