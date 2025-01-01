import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { updateKeywords } from "../utils/messageHandler";

export const configureKeywords = {
  data: new SlashCommandBuilder()
    .setName("configurekeywords")
    .setDescription(
      "Configura las palabras clave para la detección de mensajes."
    )
    .addStringOption((option) =>
      option
        .setName("keywords")
        .setDescription("Lista de palabras clave separadas por comas")
        .setRequired(true)
    ),
  async execute(interaction: CommandInteraction) {
    const keywords = interaction.options
      .getString("keywords")
      ?.split(",")
      .map((k) => k.trim());

    if (keywords) {
      updateKeywords(keywords);
      await interaction.reply(
        `Palabras clave configuradas: ${keywords.join(", ")}`
      );
    } else {
      await interaction.reply("No se pudieron configurar las palabras clave.");
    }
  },
};
