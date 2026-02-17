import { Interaction, MessageFlags } from "discord.js";
import { Action, Context } from "quickbotz";

const pingButton: Action = {
  name: "ping_button",
  execute: async (ctx: Context, interaction: Interaction) => {
    if (!interaction.isButton()) return;
    interaction.reply({
      content: "You clicked me!",
      flags: MessageFlags.Ephemeral,
    });
  },
};

export default pingButton;
