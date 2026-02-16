import fs from "fs";
import path from "path";
import { QuickBotz } from "quickbotz";

const loadEvents = async (bot: QuickBotz, eventsDir: string) => {
  const files = await fs.promises.readdir(eventsDir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(eventsDir, file.name);

    if (
      file.isFile() &&
      (file.name.endsWith(".ts") || file.name.endsWith(".js"))
    ) {
      const eventModule = await import(fullPath);
      const event = eventModule.default || eventModule;

      if (!event?.name || !event?.execute) {
        console.warn(`Skipping invalid event file: ${file.name}`);
        continue;
      }

      bot.registerEvent({ name: event.name, execute: event.execute, once: event.once ?? false });
    }
  }
};

export default loadEvents;
