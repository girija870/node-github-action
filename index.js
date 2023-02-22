const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/1077878564088721409/Zt4yPHMCgMrif3RgPKw21if8QbyCfji2EWhN_gSWrLr-Ry6dPZLFqiD5F0cE3tVW_mLL");
const app = require("express")();
const port = process.env.PORT ?? 3000;
const axios = require("express")();
// import { Octokit } from 'octokit';
const github = require('octokit');


const octokit = new github.Octokit({
    auth: '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'
})



app.post('/', async (req, res) => {
    /// get artifict url
    const response = await octokit.request('GET /repos/girija870/ci-cd-github_action/actions/artifacts');








    const embed = new MessageBuilder()
        .setTitle('My title here')
        .setURL(response.data.artifacts[0].archive_download_url)
        .addField('First field', 'this is inline', true)
        .addField('Second field', 'this is not inline')
        .setColor('#00b0f4')
        .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
        .setDescription('Oh look a description :)')
        .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
        .setFooter('Hey its a footer', 'https://cdn.discordapp.com/embed/avatars/0.png')
        .setTimestamp();

    hook.send(embed);
    return res.status(200).send('');






})


app.listen(port, () => {
    console.log(`server is up and running at ${port}`);
})

