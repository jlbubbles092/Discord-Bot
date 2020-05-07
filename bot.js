require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION']});
const { registerCommands, registerEvents } = require('./utils/registry');
