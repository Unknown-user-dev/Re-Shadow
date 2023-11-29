const { Embed, ApplicationCommandOptionType, ApplicationCommandType} = require("discord.js");

module.exports = {
    name: "troupe",
    description: "Les meilleur troupes HDV par HDV",
    options: [
        {
            name: "hdv",
            description: "Le niveau de l'hdv",
            type: 3,
            required: true,
            choices: [
                {
                    name: "hdv 9",
                    value: "hdv9",
                },
                {
                    name: "hdv 10",
                    value: "hdv10",
                },
                {
                    name: "hdv 11",
                    value: "hdv11",
                },
                {
                    name: "hdv 12",
                    value: "hdv12",
                },
                {
                    name: "hdv 13",
                    value: "hdv13",
                },
                {
                    name: "hdv 14",
                    value: "hdv14",
                },
                {
                    name: "hdv 15",
                    value: "hdv15",
                }
            ],
        },
    ],


    run: async (client, interaction) => {
        const hdvEmbedData = [
            {
                hdv: "hdv9",
                description: "Voici le guide de la gifle des sorcières pour l'hôtel de ville 9. Tout d'abord, vous devez créer un entonnoir en utilisant des sorcières guérisseuses sur deux côtés, puis déployer votre killsquad au centre. Les golems et les squelettes serviront de tank pour vos héros, sorcières et bouliste. Il ne vous reste plus qu'à utiliser vos sorts à bon escient pour nettoyer la base. C'est l'une des meilleures et des plus faciles stratégies au TH9. La composition de l'armée est copiée sur le lien ci-dessous :)",
                url: "https://link.clashofclans.com/en?action=CopyArmy&army=u9x15-1x13-4x7-4x6-5x4s1x2-2x3-1x1-1x5",
            },
            {
                hdv: "hdv10",
                description: "Guide TH10 GoWiPe. Tout d'abord, sachez que GoWiPe signifie Golem, Witch, Pekka. Commencez par déployer le Flame Flinger pour détruire les défenses d'un côté de la base. Faites ensuite passer vos golems, pekkas, bouliste, héros et sorciers. Mettez vos troupes en rage et empoisonnez les troupes ennemies. Déployez des troupes de nettoyage en dehors de la base pour accélérer le nettoyage. Pour cette attaque, vous aurez besoin du flame flinger et des hog riders dans votre CC. Gardez un sort de soin pour sauver vos HOG lorsque votre flame flinger est détruit. La composition de l'armée et le lien sont disponibles ci-dessous, amusez-vous bien !",
                url: "https://link.clashofclans.com/en?action=CopyArmy&army=u2x1-3x4-3x5-2x6-3x9-2x13-9x22-2x23s1x1-2x2-1x3-2x5-1x9",
            },
            {
                hdv: "hdv11",
                description: "Utilisez les héros, le P.E.K.K.A et le golem de glace pour tanker, puis toutes les sorcières, la reine et les soigneurs. Vous devez essayer de faire des entonnoirs pour vos chauves-souris, faites attention aux tours de sorciers, gelez-les à l'avance pour éviter de perdre toutes vos chauves-souris (même chose pour les tours Inferno à cibles multiples).",
                url: "https://link.clashofclans.com/en?action=CopyArmy&army=u2x1-1x5-2x6-5x7-1x9-10x15-2x58s5x5-6x28",
            },
            {
                hdv: "hdv12",
                description: "AQH classique (Archer Queen avec soigneurs) / Ballons",
                url: "https://link.clashofclans.com/en?action=CopyArmy&army=u5x7-20x5-2x17-1x62-1x23-12x10-8x4s5x5-2x11-2x2",
            },
            {
                hdv: "hdv13",
                description: "Yeti Smash est une attaque très puissante, l'une des meilleures pour TH13, voici comment la réussir : Concentrez-vous sur le placement des tirs de dispersion et de l'hôtel de ville, ainsi que sur les tours infernales et le eagle. L'objectif principal de votre attaque est d'utiliser les 8 sorts de tremblement de terre afin que votre troupe commence à se déplacer à travers la base. Vous voudrez toujours attaquer le eagle en premier, donc les 4 premiers sorts de tremblement de terre doivent être utilisés dans une zone proche de l'aigle, ce qui ouvrira la première partie de l'attaque. Ensuite, utilisez les 4 autres sorts de tremblement de terre pour atteindre l'autre partie arrière de la base. A ce stade, vous pouvez commencer à créer l'entonnoir. Placez quelques yétis et sorcières de part et d'autre afin de contrôler les déplacements de vos yétis, puis utilisez le reste de vos yétis, vos sorcières, vos héros et votre lanceur de buche pour commencer à vous déplacer dans la base. Gardez à l'esprit que les yetis de TH13 sont très forts et peuvent encaisser beaucoup de dégâts. En ce qui concerne la capacité Grand Warden, il est clairement préférable de l'utiliser rapidement afin de pouvoir protéger certaines de vos troupes. Enfin, pour les sorts de rage, il faut en utiliser un au début sur toutes vos troupes et le second lorsque le lanceur de bûches se casse.",
                url: "https://link.clashofclans.com/en?action=CopyArmy&army=u2x1-2x6-1x23-9x53-2x10-9x15-1x82s1x2-1x9-8x10",
            },
            {
                hdv: "hdv14",
                description: "J'ai obtenu de nombreux 3 étoiles en guerre et en CWL avec cette stratégie d'attaque et cette armée, c'est assez facile, il suffit de s'entraîner. Choisissez un coin sûr pour votre Flame Flinger, placez votre reine avec les soigneurs dans les coins les plus proches. Le dragon et le pekka peuvent être utilisés pour créer un entonnoir au départ ou pour assister votre Flame Flinger ou votre reine (les dragons et les pekka peuvent être remplacés par d'autres troupes). Une fois que votre entonnoir est prêt, placez tous vos mineurs entre votre Flame Flinger et votre Queen, juste après placez votre Warden pour protéger vos mineurs, puis placez vos hog riders juste derrière. Le gardien peut être placé juste après les HOG ou plus tard. Pour le Roi, essayez d'en tirer le meilleur parti en l'envoyant sur une défense de valeur. Essayez de garder le pouvoir du gardien pour sauver vos troupes de l'enfer et de l'explosion du TH14. En ce qui concerne les sorts, utilisez la rage sur la reine / les soigneurs quand c'est nécessaire, le sort de soin sur le mineur / le HOG (très utile contre la tour Inferno multiple), le sort de gel pour protéger la reine contre la tour Inferno et pour protéger les troupes contre les tirs de dispersion. Comme soutien, demandez : 9 Hog Riders, 2 sorts de gel et 1 sort de poison.",
                url: "https://link.clashofclans.com/en?action=CopyArmy&army=u8x4-5x7-2x8-1x9-13x11-14x24-1x91s2x1-3x2-1x5",
            },
            {
                hdv: "hdv15",
                description: "Un ensemble de balon, sorcier, clone, et autre parfait pour avoir une stratégie clone lalo !",
                url: "https://link.clashofclans.com/en?action=CopyArmy&army=u2x1-2x28-1x76-27x5-1x6-1x23-9x10-1x17-1x58-5x82-1x97s4x5-1x16-1x35-2x11-1x17",
            },
        ];

        const hdv = interaction.options.getString("hdv");
        const hdvData = hdvEmbedData.find(data => data.hdv === hdv);

        if (hdvData) {
            const embed = new Embed()
                .setColor("#FF0000")
                .setTitle(`Meilleures troupes pour l'HDV : ${hdv}`)
                .setDescription(hdvData.description);

            if (hdvData.url) {
                embed.setURL(hdvData.url);
            }

            embed.setTimestamp()
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });

            interaction.followUp({ embeds: [embed] });
        }
    },
};
