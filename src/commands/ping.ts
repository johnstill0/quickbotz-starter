import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Context, Command } from "quickbotz";

const pingCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  execute: async (ctx: Context, interaction: ChatInputCommandInteraction) => {
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("ping_button")
        .setLabel("Click Me")
        .setStyle(ButtonStyle.Primary),
    );

    await interaction.reply({ content: "Pong!", components: [row] });
  },
};

export default pingCommand;
