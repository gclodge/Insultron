exports.run = (client, message, args) => {
  let key = args.join(' ');

  //< Ensure there was a supplied argument
  if (!args || !key) return message.react('💩');

  //< Ensure the supplied recommendation has a default object
  client.recommended.ensure(key, {
    count: 0,
    watches: 0,
    lastrecommend: new Date(),
    lastwatch: new Date(0)
  });

  //< Iterate the recommendation count
  client.recommended.inc(key, "count");

  //< Assert dominance
  message.react('👍').catch(console.error);
}
