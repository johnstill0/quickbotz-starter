import fs from "fs";
import path from "path";
import { Command, QuickBotz } from "quickbotz";

const loadCommands = async (bot: QuickBotz, commandsDir: string) => {
  const walk = async (dir: string) => {
    const files = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        await walk(fullPath);
      } else if (file.isFile() && (file.name.endsWith(".ts") || file.name.endsWith(".js"))) {
        const commandModule = await import(fullPath);
        const command: Command | undefined = commandModule.default || commandModule;

        if (!command?.data || !command?.execute) {
          console.warn(`Skipping invalid command file: ${fullPath}`);
          continue;
        }

        bot.registerCommand({
          data: command.data,
          execute: command.execute,
          autocomplete: command.autocomplete
        });
      }
    }
  };

  await walk(commandsDir);
};

export default loadCommands;
