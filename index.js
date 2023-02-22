const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/1077878564088721409/Zt4yPHMCgMrif3RgPKw21if8QbyCfji2EWhN_gSWrLr-Ry6dPZLFqiD5F0cE3tVW_mLL");
const app = require("express")();
const port = process.env.PORT ?? 3000;


app.post('/', (req, res) => {
    console.log(req);
    const embed = new MessageBuilder()
        .setTitle('My title here')
        .setURL('https://www.google.com')
        .addField('First field', 'this is inline', true)
        .addField('Second field', 'this is not inline')
        .setColor('#00b0f4')
        .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
        .setDescription('Oh look a description :)')
        .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
        .setFooter('Hey its a footer', 'https://cdn.discordapp.com/embed/avatars/0.png')
        .setTimestamp();

    hook.send(embed);
})


app.listen(port, () => {
    console.log(`server is up and running at ${port}`);
})

