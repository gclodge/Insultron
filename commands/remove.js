exports.run = (client, message, args) => {
  let key = args.join(' ');

  //< Ensure there was a supplied argument
  if (!args || !key) {
    return message.react('💩');
  }

  //< Check if we got that damn title at all
  if (client.recommended.has(key)) {
    //< Oh damn we do, yeet it and acknowledge
    client.recommended.delete(key);
    return message.react('👍').catch(console.error);
  } else {
    //< Ain't here, bru
    return message.react('👎').catch(console.error);;
  }
}
