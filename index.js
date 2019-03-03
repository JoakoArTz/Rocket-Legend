const { Client, RichEmbed } = require('discord.js');
const client = new Client();
client.on("ready", () => {
    console.log("Estoy listo!");
    
    client.user.setPresence( {
        status: "online",
        game: {
            name: "Prefix: rl!",
            type: "PLAYING"
        }
    } );
 
 });

client.on('ready', () => {
    console.log(`El bot esta Encendido!: ${client.user.tag}`);
});

client.on('message', message => {
    // Receving the message
    console.log(message.content);
    if(message.content === 'Perro') {
        message.reply('Tu mama');
    }

    client.login('NTUxNDIwNzkzOTg1MTcxNDg1.D1ww0Q.MqZ9Tve8vQldm2SHYcCQp6ExMpc');
