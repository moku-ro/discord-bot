export interface ChannelConfig {
  sourceChannels: string[];
  targetChannels: string[];
}

export interface KeywordConfig {
  keywords: string[];
}

export interface ReactionConfig {
  emoji: string;
}

export interface BotConfig {
  channelConfig: ChannelConfig;
  keywordConfig: KeywordConfig;
  reactionConfig: ReactionConfig;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface MessageEmbed {
  title: string;
  user: User;
  media: string[];
}
