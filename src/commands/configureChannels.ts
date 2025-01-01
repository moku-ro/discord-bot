import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { ChannelConfig } from '../types';

const channelConfigs: ChannelConfig = {
    source: [],
    target: [],
};

export const configureChannels = {
    data: new SlashCommandBuilder()
        .setName('configurechannels')
        .setDescription('Configura los canales de origen y destino.')
        .addChannelOption(option =>
            option.setName('source')
                .setDescription('Canal de origen para detectar contenido multimedia')
                .setRequired(true))
        .addChannelOption(option =>
            option.setName('target')
                .setDescription('Canal de destino para reenviar contenido multimedia')
                .setRequired(true)),
    async execute(interaction: CommandInteraction) {
        const sourceChannel = interaction.options.getChannel('source');
        const targetChannel = interaction.options.getChannel('target');

        if (sourceChannel && targetChannel) {
            channelConfigs.source.push(sourceChannel.id);
            channelConfigs.target.push(targetChannel.id);

            await interaction.reply(`Canales configurados: origen - ${sourceChannel.name}, destino - ${targetChannel.name}`);
        } else {
            await interaction.reply('Error al configurar los canales. Asegúrate de que los canales sean válidos.');
        }
    },
};

export default channelConfigs;