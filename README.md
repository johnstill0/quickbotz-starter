# 🚀 QuickBotz Starter Kit

A modern **Discord.js v14 + TypeScript** starter kit using
QuickBotz built for scalability, clean structure, and rapid development.

## 📦 Features

- ⚡ Built on **discord.js v14**
- 🗂 Organized modular architecture
- 🔒 Environment-based configuration
- 🛠 Designed for production-ready bots

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/johnstill0/quickbotz-starter
cd quickbotz-starter
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file:

```
DISCORD_TOKEN=your-bot-token
CLIENT_ID=your-client-id
GUILD_ID=your-guild-id
```

---

## ▶️ Running the Bot (Development)

```bash
npm run dev
```

---

## 🧩 Creating a Slash Command

Create a file inside `src/commands/`

```ts
import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  AutocompleteInteraction,
} from "discord.js";
import { Context, Command } from "quickbotz";

const myCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("mycommand")
    .setDescription("my nice command description"),

  execute: async (ctx: Context, interaction: ChatInputCommandInteraction) => {
    //code
  },
  autocomplete: async (ctx: Context, interaction: AutocompleteInteraction) => {
    // if you need autocomplete
  },
};

export default myCommand;
```

---

## 🎧 Creating an Event

Create a file inside `src/events/`

```ts
import { Client, Events } from "discord.js";
import { Context, Event } from "quickbotz";

const clientReady: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  execute: async (ctx: Context, client: Client<true>) => {
    //  do what you want when bot is ready
  },
};

export default clientReady;
```

---

## 🎬 Creating an Action

Create a file inside `src/actions/`

```ts
import { Interaction, MessageFlags } from "discord.js";
import { Action, Context } from "quickbotz";

const actionName: Action = {
  name: "actionName",
  execute: async (ctx: Context, interaction: Interaction) => {
    // here you can handle every interaction that has a custom id, it will automatically match it.
  },
};

export default actionName;
```

## 🧪 Production Build (Optional)

If you want to build for production:

```bash
npm run build
npm run start
```

---

## 💡 Why This Starter?

- No unnecessary abstraction
- No heavy framework overhead
- Fully typed
- Clean architecture for scaling

Perfect for:

- Moderation bots
- Utility bots
- Dashboard-connected bots
- Large multi-feature projects

---

## 🛡 Requirements

- Node.js 18+
- npm 9+
- Discord Application + Bot Token

---

## 📜 License

MIT License

---

## ⭐ Contributing

Pull requests are welcome.
If you find a bug or want to suggest improvements, open an issue.

---

## 🧠 Author

Built with ❤️ for scalable Discord bot development.

---

Happy coding 🚀
