import { Client, Message } from 'discord.js';
import { getConfig } from '../utils/configManager';
import { forwardMessage } from '../utils/messageHandler';

const client = new Client();

client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return;

    const config = getConfig();
    const sourceChannelIds = config.sourceChannels;
    const targetChannelIds = config.targetChannels;
    const keywords = config.keywords;

    if (sourceChannelIds.includes(message.channel.id)) {
        const containsKeyword = keywords.some(keyword => message.content.includes(keyword));
        const hasMedia = message.attachments.size > 0 || message.embeds.length > 0;

        if (containsKeyword && hasMedia) {
            await forwardMessage(message, targetChannelIds);
        }
    }
});

export default client;