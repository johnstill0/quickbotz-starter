import { Client, Events } from "discord.js";
import { Context } from "quickbotz";

export default {
  event: Events.ClientReady,
  once: true,
  execute: async (ctx: Context, client: Client<true>) => {
    console.log(`Logged in as ${client.user.username}`);
  },
};
