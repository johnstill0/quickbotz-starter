import { Client, Events } from "discord.js";
import { Context, Event } from "quickbotz";

const clientReady: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  execute: async (ctx: Context, client: Client<true>) => {
    console.log(`Logged in as ${client.user.username}`);
  },
};

export default clientReady;
