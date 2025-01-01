export function formatEmbed(message: any, user: any, keyword: string): any {
  return {
    title: message.content.replace(new RegExp(`^${keyword}\\s*`, "i"), ""),
    url: message.url,
    description: `Mensaje de [${user.username}](https://discord.com/users/${user.id})`,
    color: 0x0099ff,
    author: {
      name: user.username,
      icon_url: user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
        : null,
    },
    image:
      message.attachments.size > 0
        ? { url: message.attachments.first().url }
        : null,
    footer: {
      text: `Reenviado desde #${message.channel.name}`,
    },
  };
}
