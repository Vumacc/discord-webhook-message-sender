const { WebhookClient, EmbedBuilder } = require('discord.js');
const { id, token, username, avatarUrl, message, includeEmbed, embedTitle, embedDescription } = require('../config.json')

const webhookClient = new WebhookClient({ id: id, token: token });

const embed = new EmbedBuilder()
	.setTitle(embedTitle)
  .setDescription(embedDescription)
	.setColor(204, 153, 14);

if (includeEmbed == "false") {
  webhookClient.send({
    content: message,
    username: username,
    avatarURL: avatarUrl,
  })
} else {
  webhookClient.send({
    content: message,
    username: username,
    avatarURL: avatarUrl,
    embeds: [embed]
  })
}