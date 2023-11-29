const { Embed } = require('discord.js');

module.exports = {
    name: 'recrutement',
    description: 'Avec cette commande, vous pouvez faire votre demande de recrutement',

    run: async (client, interaction) => {
        const rcembed = new Embed()
            .setColor('#FF0000')
            .setTitle('Recrutement')
            .setDescription('Vous allez recevoir un message privé avec les questions à répondre.')
            .addFields(
                { name: 'Important', value: 'Veuillez vérifier vos DM' }
            )
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });
        interaction.followUp({ embeds: [rcembed] });
        const firstQuestionEmbed = new Embed()
            .setColor('#FF0000')
            .setTitle('Recrutement')
            .setDescription('Bienvenue dans le processus de recrutement ! Répondez aux questions suivantes en DM.')

        await interaction.user.send({ embeds: [firstQuestionEmbed] });

        const askQuestion = async (question) => {
            const questionEmbed = new Embed()
                .setColor('#FF0000')
                .setTitle('Recrutement')
                .setDescription(question);

            await interaction.user.send({ embeds: [questionEmbed] });

            const filter = (response) => response.author.id === interaction.user.id;
            return interaction.user.dmChannel.awaitMessages({ max: 1, time: 60000, errors: ['time'] }).then((collected) => {
                const response = collected.first() ? collected.first().content : '';
                return response;
            }).catch(() => {
                interaction.user.send('Délai écoulé. La réponse n\'a pas été reçue.');
                return '';
            });
        };

        const hdv = await askQuestion('Question 1: Quel est votre niveau de HDV (1,2,3...) ?');
        const trophies = await askQuestion('Question 2: Combien de trophées avez-vous ?');
        const cocId = await askQuestion('Question 3: Quel est votre ID Clash of Clans ? (Allez sur votre profile et copiez le tag)');

        const recrutementChannel = interaction.guild.channels.cache.find(channel => channel.name === 'recrutement');

        if (!recrutementChannel) {
            interaction.user.send('Le salon "recrutement" n\'a pas été trouvé sur ce serveur. Les réponses n\'ont pas pu être envoyées.');
        } else {
            const answerEmbed = new Embed()
                .setColor('#FF0000')
                .setTitle(`Chef ! Une nouvelle demande de recrutement vient d'arriver !`)
                .addFields(
                    { name: 'Utilisateur', value: interaction.user.toString() },
                    { name: 'HDV niveau :', value: hdv },
                    { name: 'Nombre de trophées :', value: trophies },
                    { name: 'ID Clash of Clans :', value: cocId }
                );

            recrutementChannel.send({ embeds: [answerEmbed] });
        }

        interaction.user.send('Vos réponses ont bien été envoyé, Veuillez attendre une réponse des Recruteur.');
    },
};
