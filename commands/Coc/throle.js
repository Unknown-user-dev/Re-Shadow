const { Embed } = require("discord.js");
const client = require('clash-of-clans-node');

async function infoplr(playertag) {
    try {
        await client.login(process.env.API);
        const clan = await client.getPlayer(playertag);
        return clan;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = {
    name: "throle",
    description: "Vous donne votre rôle HDV",
    options : [
{
    name: "id",
    description: "ID du joueur",
    type: 3,
}
    ],

    run: async (client, interaction) => {
        const playertag = interaction.options.getString("id");
        const plr = await infoplr(playertag);
        const townHallLevel = plr.townHallLevel;
        let roleToAdd;
        switch (townHallLevel) {
            case 1:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 1");
                break
            case 2:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 2");
                break
            case 3:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 3");
                break
            case 4:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 4");
                break
            case 5:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 5");
                break
            case 6:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 6");
                break
            case 7:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 7");
                break
            case 8:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 8");
                break
            case 9:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 9");
                break
            case 10:
                roleToAdd = interaction.guild.roles.cache.find(role => role.name === "HDV 10");
                break

            default:
                return interaction.followUp("Une erreur s'est produite lors de la recherche du joueur ou les données du joueur sont manquantes.");
                break;
        }

        if (roleToAdd) {
            await interaction.member.roles.add(roleToAdd);

            const embed = new Embed()
                .setColor("#FF0000")
                .setTitle(`Rôle ajouté : ${roleToAdd.name}`)
                .setDescription(`Vous avez obtenu le rôle correspondant à l'HDV ${townHallLevel}.`)
                .setTimestamp()
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });

            interaction.followUp({ embeds: [embed] });
        } else {
            const embed = new Embed()
                .setColor("#FF0000")
                .setTitle("Rôle non trouvé")
                .setDescription(`Aucun rôle correspondant à l'HDV ${townHallLevel} n'a été trouvé.`)
                .setTimestamp()
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });

            interaction.followUp({ embeds: [embed] });
        }
    },
};
