import { Message } from "discord.js";
import { ChannelConfig, KeywordConfig, ReactionConfig } from "../types";
import { formatEmbed } from "./embedFormatter";

export const handleMessageForwarding = async (
  message: Message,
  channelConfig: ChannelConfig,
  keywordConfig: KeywordConfig,
  reactionConfig: ReactionConfig
) => {
  // Check if the message is in a source channel
  if (!channelConfig.sourceChannels.includes(message.channel.id)) return;

  // Check for keywords
  const containsKeyword = keywordConfig.keywords.some((keyword) =>
    message.content.includes(keyword)
  );

  if (!containsKeyword) return;

  // Prepare the embed
  const embed = formatEmbed(message);

  // Forward the message to target channels
  for (const targetChannelId of channelConfig.targetChannels) {
    const targetChannel = message.client.channels.cache.get(targetChannelId);
    if (targetChannel && targetChannel.isText()) {
      await targetChannel.send({ embeds: [embed] });

      // Add reaction if configured
      if (reactionConfig.reactionEmoji) {
        await message.react(reactionConfig.reactionEmoji);
      }
    }
  }
};
