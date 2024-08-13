const { zokou } = require('../framework/zokou');
const axios = require('axios');
const translate = require('../framework/translation');
const Genius = require('genius-lyrics');
const Client = new Genius.Client('your-genius-api-key-here'); // Replace with your actual Genius API key

zokou({ 'commandName': 'poll', 'reaction': '✨', 'category': 'General' }, async (dest, zk, commandOptions) => {
  const { reply, ms } = commandOptions;
  const args = commandOptions.arg.join(' ');
  let [question, options] = args.split('/');
  
  if (options.split(',').length < 2) {
    return reply('Incorrect format.\nExample: poll What is the answer/Option 1, Option 2');
  }
  
  let formattedOptions = [];
  for (let option of options.split(',')) {
    formattedOptions.push(option.trim());
  }
  
  await zk.sendMessage(dest.id, { 'poll': { 'name': question.trim(), 'values': formattedOptions } });
});

zokou({ 'commandName': 'fact', 'reaction': '✨', 'category': 'Fun' }, async (dest, zk, commandOptions) => {
  const { reply } = commandOptions;
  const response = await axios.get('https://nekos.life/api/v2/fact');
  const fact = response.data.fact;
  reply(`Here's a fun fact for you: ${fact}`);
});

zokou({ 'commandName': 'quote', 'reaction': '🗿', 'category': 'General' }, async (dest, zk, commandOptions) => {
  const { reply } = commandOptions;
  const response = await axios.get('https://favqs.com/api/qotd');
  const quote = response.data.quote;
  const author = quote.author;
  const translatedQuote = await translate(quote.body, { 'to': 'en' });
  reply(`\n◆━━━━━━✦MASERATI✦━━━━━━◆\n◇ _${author}_\n\nQuote: ${quote.body}\nTranslated Quote: ${translatedQuote}`);
});

zokou({ 'commandName': 'define', 'reaction': '🔍', 'category': 'Search' }, async (dest, zk, commandOptions) => {
  const { reply, arg } = commandOptions;
  if (!arg || arg.length === 0) return reply('Please provide a term to define.');
  
  const term = arg.join(' ');
  try {
    const { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${term}`);
    const definition = data.list[0].definition.replace(/\[/g, '').replace(/\]/g, '');
    const example = data.list[0].example.replace(/\[/g, '').replace(/\]/g, '');
    const translatedDefinition = await translate(definition, { 'to': 'en' });
    reply(`\n  Term: ${term}\n  Definition: ${translatedDefinition}\n  Original Definition: ${definition}\n  Example: ${example}`);
  } catch (error) {
    return reply('No results found for ' + term);
  }
});

zokou({ 'commandName': 'lyrics', 'reaction': '🎶', 'category': 'Fun' }, async (dest, zk, commandOptions) => {
  const { reply, arg } = commandOptions;
  try {
    if (!arg || arg.length === 0) return reply('Please provide a song name.');
    
    const songName = arg.join(' ');
    const song = await Client.songs.search(songName);
    const lyrics = await song[0].lyrics();
    await zk.sendMessage(dest, { 'text': lyrics });
  } catch (error) {
    console.error(error);
    return reply(`Could not find lyrics for ${songName}. Try searching for another song.`);
  }
});
  
