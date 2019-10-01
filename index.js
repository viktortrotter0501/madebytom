//Viktor, delete any of this and the bot won't work!
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("!")
const { Client, RichEmbed } = require('discord.js');




bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

// Create an event listener for messages
bot.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '!av') {
      const avEmbed = new Discord.RichEmbed()
      .setColor('#A20EF7')
      .setTitle('Here is your avatar!')
      .setImage(message.author.avatarURL)
      
      
      message.channel.send(avEmbed);
    }
  });

bot.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
      // Assuming we mention someone in the message, this will return the user
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick(`kicked by an admin.`).then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`you have successfully kicked ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });
  
bot.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('!ban')) {
      // Assuming we mention someone in the message, this will return the user
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`you have successfully banned ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('that user isn\'t in this guild!');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('you didn\'t mention the user to ban!');
      }
    }
  });

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === '✈｜arrivals');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`**Welcome to the server, ${member}, we are very happy you have arrived! Have any questions? Why not ask a memeber of staff?** ✈✈✈`);
  });

bot.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '!help') {
      // We can create embeds using the MessageEmbed constructor
     const helpEmbed = new Discord.RichEmbed()
      .setColor('#FFA500')
      .setTitle('Zero Gravity RP!')
      .setURL('https://discord.gg/VQPwTNu')
      .setAuthor('Help Console!')
      .setDescription('Welcome to the help console! Here, you can see what commands do, and who to contact for help!')
      //commands
      .addField('!help', 'Sends you right here!')
      .addField('!kick', 'Allows the admins to remove someone from the server! (not permanent!)')
      .addField('!ban', 'This allows the admins to permanently ban the user!')
      .addField('!app', 'Sends you the link to the applications page!')
      .addField('!purchase', 'Shows the current purchasable perks!')
      //.addBlankField()
      //.setImage('')
      .setTimestamp()
      .setFooter('Operated by SignalManSteve#0001', 'https://cdn.discordapp.com/avatars/413453219365126145/a_1ef69a4e3461a622b00c94782faecedc.gif');
  
    message.channel.send(helpEmbed);
    }
  });

  bot.on('message', message => {
    if (message.content === '!ip') {
        const ipEmbed = new Discord.RichEmbed()
        .setColor('#FF00D8')
        .setTitle('Zero Gravity Server IP:')
        .setDescription('208.87.97.148:30102')
        .setTimestamp()
        .setFooter('Operated by SignalManSteve#0001', 'https://cdn.discordapp.com/avatars/413453219365126145/a_1ef69a4e3461a622b00c94782faecedc.gif');
      message.channel.send(ipEmbed);
    }
  });

//!app command

bot.on('message', message => {
    if (message.content === '!app') {
        const appEmbed = new Discord.RichEmbed()
        .setColor('#00F7FF')
        .setTitle('Wanna apply?')
        .setDescription('Head over to https://hlrp.typeform.com/to/ra3fhN today!')
        .setTimestamp()
        .setFooter('Operated by SignalManSteve#0001', 'https://cdn.discordapp.com/avatars/413453219365126145/a_1ef69a4e3461a622b00c94782faecedc.gif');
      message.channel.send(appEmbed);
    }
  });

//purchase command

bot.on('message', message => {
    if (message.content === '!purchase') {
        const purchaseEmbed = new Discord.RichEmbed()
        .setColor('#08FF00')
        .setTitle('Wanna buy some perks??')
        .setDescription('See our selections below! (DM Viktor Trotter#2710!)')
        .setImage('https://imgur.com/GAv96BZ.png')
        .setTimestamp()
        .setFooter('Operated by SignalManSteve#0001', 'https://cdn.discordapp.com/avatars/413453219365126145/a_1ef69a4e3461a622b00c94782faecedc.gif');
      message.channel.send(purchaseEmbed);
    }
  });

//activity


bot.on('ready', () => {
    bot.user.setActivity('Zero Gravity', { type: 'PLAYING' })
  })




  bot.login('NjI4NjE4NzYyODIzNzk0NzE5.XZN4yQ.38lAIUmda4TN72bkipNXqsWtP8I');