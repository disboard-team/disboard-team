/**
 * Resolves a Discord avatar URL according to Discord Developer Docs CDN specification:
 * https://docs.discord.com/developers/reference#image-formatting-cdn-endpoints
 *
 * For users on the new username system without a custom avatar hash:
 *   index = (user_id >> 22) % 6
 *   endpoint: https://cdn.discordapp.com/embed/avatars/{index}.png
 *
 * For users with a known custom avatar hash:
 *   endpoint: https://cdn.discordapp.com/avatars/{user_id}/{avatar_hash}.png
 */
export function getDiscordAvatarUrl(userId, avatarHash = null) {
  if (userId && avatarHash) {
    return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png`;
  }
  if (!userId) {
    return 'https://cdn.discordapp.com/embed/avatars/0.png';
  }
  try {
    const index = Number((BigInt(userId) >> 22n) % 6n);
    return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
  } catch {
    return 'https://cdn.discordapp.com/embed/avatars/0.png';
  }
}
