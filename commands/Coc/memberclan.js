const { Embed } = require("discord.js");
const client = require('clash-of-clans-node');

async function infoclan() {
    try {
        await client.login(process.env.API);
        const clan = await client.getClan(`#${process.env.TAGCLAN}`);
        return clan;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = {
    name: "membres",
    description: "Les membres du clan",

    run: async (client, interaction) => {
        const clan = await infoclan();
        if (!clan || !clan.name) {
            return interaction.followUp("Une erreur s'est produite lors de la recherche du clan ou les données du clan sont manquantes.");
        }

        const membreclan = []

        clan.memberList.forEach((member) => {
            membreclan.push({
                name: member.name,
                trophies: member.trophies,
            })
        })

        const embed = new Embed()
            .setColor("#FF0000")
            .setTitle(`Liste des membre de ${clan.name}`)
            .addFields({
                name: "Membres",
                value: `${membreclan
                    .map((member) => `${member.name} - **Trophée** : ${member.trophies} <:trophy:1160400634177126552>`)
                    .join("\n")}`,
            })
            .setThumbnail(`${clan.badgeUrls.medium}`)
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });
        interaction.followUp({ embeds: [embed] });
    },
};
