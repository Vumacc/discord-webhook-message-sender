# discord Webhook Message Sender
This repository contains a simple Node.js application that allows you to send messages and embeds to a Discord channel using a webhook. The application is configured using a json file, making it easy to customize the messages and embeds you send.

## Prerequisites
**Before using this application, ensure you have the following installed:**

- Node.js (version 12 or higher)
- npm (Node.js package manager)

## Installation
1. Clone this repository to your local machine:
```shell
> git clone https://github.com/Vumacc/discord-webhook-message-sender.git
```

2. Navigate to the project directory
```shell
> cd discord-webhook-message-sender
```

3. Install all dependencies
```shell
> npm install
```

## Configuration
Open `config.json` in your preferred text editor and configure the following values:
```json
{
    "id": "webhook ID",
    "token": "webhook Token",

    "username": "username here",
    "avatarUrl": "URL for webhook avatar",
    "message": "message to send (required)",
    
    "includeEmbed": "true or false",
    "embedTitle": "embed title",
    "embedDescription": "embed content"
}
```
- Replace the values of `id` and `token` with your actual Discord webhook ID and Token
- Replace the values of `username`, `avatarUrl`, and `message` with the correct content
- The value of `includeEmbed` must be either "true" or "false"
- If needed, replace the values of `embedTitle` and `embedDescription` with the correct content

## Usage
As described before, this allows you to send a message and/or embed from a Discord webhook.

After configuring the application, use this command to send the message to where the webhook resides:
```shell
> node index.js
```
