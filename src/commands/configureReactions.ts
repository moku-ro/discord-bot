import { CommandInteraction } from "discord.js";
import { updateReactionSettings } from "../utils/messageHandler";
import { ReactionConfig } from "../types";

export const configureReactions = async (interaction: CommandInteraction) => {
  const emoji = interaction.options.getString("emoji");
  const enable = interaction.options.getBoolean("enable");

  if (!emoji) {
    return interaction.reply({
      content: "Debes proporcionar un emoji.",
      ephemeral: true,
    });
  }

  const reactionConfig: ReactionConfig = {
    emoji: emoji,
    enabled: enable,
  };

  const success = await updateReactionSettings(reactionConfig);

  if (success) {
    return interaction.reply({
      content: `Reacción configurada: ${emoji} ${
        enable ? "activada" : "desactivada"
      }.`,
      ephemeral: true,
    });
  } else {
    return interaction.reply({
      content: "Hubo un error al configurar la reacción.",
      ephemeral: true,
    });
  }
};
