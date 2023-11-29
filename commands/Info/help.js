const { Embed } = require("discord.js");

module.exports = {
    name: "help",
    description: "Vous donne la liste des commandes",

    run: async (client, interaction) => {
        const embed = new Embed()
            .setColor("#FF0000")
            .setTitle("Liste des commandes")
            .setDescription(`Ici vous trouverez la liste des commandes disponible sur le bot`)
            .addFields(
                { name: '/gdc', value: 'Les informations de la GDC actuelle', inline: true },
                { name: '/clan', value: 'Les informations du clan', inline: true },
                { name: '/membres', value: 'Les membres du clan', inline: true },
                { name: '/ping', value: 'Le ping du bot', inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });
        interaction.followUp({ embeds: [embed] });
    },
};
