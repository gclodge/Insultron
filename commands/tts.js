exports.run = (client, message, args) => {
  let key = args.join(' ');

  //< Ensure there was a supplied argument
  if (!args || !key) return message.react('💩');

  //< Assert dominance
  message.react('👍').catch(console.error);

  //< Join the message sender's channnel and spit them bars
  message.channel.send(key,
  {
    tts: true
  }).catch(console.error);
}
