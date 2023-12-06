const { SlashCommandBuilder } = require("discord.js");


module.exports = {

data: new SlashCommandBuilder()
    .setName('wednesday')
    .setDescription('wednesday'),
    async execute(interaction) {
        await interaction.reply('Today is not Wednesday my dudes😩');
},
};