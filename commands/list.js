exports.run = (client, message, [title]) => {
  let content = ''
  client.recommended.forEach((value, key, map) => {
    content += `${key} - ${value.count}` + '\n';
  });

  // List them shits I guess?
  message.channel.send({content:`Current Recommendations:\n${content}`})
  .then((msg) => {
    msg.react('📝');
  }).catch(console.error);
}
