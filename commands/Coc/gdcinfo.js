const { Embed } = require("discord.js");
const client = require('clash-of-clans-node');
const moment = require('moment');

async function infogdc() {
    try {
        await client.login(process.env.API);
        const clan = await client.getClanCurrentWar(`#${process.env.TAGCLAN}`);
        return clan;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = {
    name: "gdc",
    description: "Les information de la GDC actuelle",

    run: async (client, interaction) => {
        const gdc = await infogdc();
        if (!gdc || !gdc.clan.name) {
            return interaction.followUp("Une erreur s'est produite lors de la recherche du clan ou les données du clan sont manquantes.");
        }
        const preparation = `${gdc.preparationStartTime}`
        const start = `${gdc.startTime}`
        const end = `${gdc.endTime}`

        const preptimestamp = moment(preparation, 'YYYYMMDDTHHmmss.SSSZ').valueOf();
        const starttimestamp = moment(start, 'YYYYMMDDTHHmmss.SSSZ').valueOf();
        const endtimestamp = moment(end, 'YYYYMMDDTHHmmss.SSSZ').valueOf();
        const embed = new Embed()
            .setColor("#FF0000")
            .setTitle(`${gdc.clan.name} contre ${gdc.opponent.name}`)
            .setDescription(`**Début de la GDC (Préparation) :** \n${new Date(preptimestamp).toLocaleString() } \n \n **Combat GDC : ** \n${new Date(starttimestamp).toLocaleString()}\n \n **Fin de la GDC :** \n${new Date(endtimestamp).toLocaleString()}`)
            .addFields(
                { name: '__Le clan :__', value: `${gdc.clan.name}`, inline: false },
                { name: 'Niveau du clan', value: `${gdc.clan.clanLevel}`, inline: true },
                { name: 'Étoile gagnée', value: `${gdc.clan.stars}`, inline: true },
                { name: 'Destruction', value: `${gdc.clan.destructionPercentage}%`, inline: true },
                { name: 'Attaque', value: `${gdc.clan.attacks}`, inline: true },
                { name: '__Le clan adverse :__', value: `${gdc.opponent.name}`, inline: false },
                { name: 'Niveau du clan', value: `${gdc.opponent.clanLevel}`, inline: true },
                { name: 'Étoile gagnée', value: `${gdc.opponent.stars}`, inline: true },
                { name: 'Destruction', value: `${gdc.opponent.destructionPercentage}%`, inline: true },
                { name: 'Attaque', value: `${gdc.opponent.attacks}`, inline: true },
            )
            .setThumbnail(`${gdc.clan.badgeUrls.medium}`)
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });
        interaction.followUp({ embeds: [embed] });
    },
};
