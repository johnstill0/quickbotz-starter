import fs from "fs";
import path from "path";
import { Action, QuickBotz } from "quickbotz";

const loadActions = async (bot: QuickBotz, actionsDir: string) => {
  const walk = async (dir: string) => {
    const files = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        await walk(fullPath);
      } else if (
        file.isFile() &&
        (file.name.endsWith(".ts") || file.name.endsWith(".js"))
      ) {
        const actionModule = await import(fullPath);
        const action: Action | undefined = actionModule.default || actionModule;

        if (!action?.name || !action?.execute) {
          console.warn(`Skipping invalid action file: ${fullPath}`);
          continue;
        }

        bot.registerAction(action);
      }
    }
  };

  await walk(actionsDir);
};

export default loadActions;
