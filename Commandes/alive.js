const { zokou } = require('../framework/zokou');
const { addOrUpdateDataInAlive, getDataFromAlive } = require('../bdd/alive');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou(
    {
        commandName: 'alive',
        category: 'General'
    }, async (dest, zk, commandOptions) => {

        const { ms, arg, reply, superUser } = commandOptions;

        const data = await getDataFromAlive();

        if (!arg || !arg[0] || arg.join('') === '') {

            if (data) {

                const { message, link } = data;

                let mode = "public";
                if (s.MODE !== "yes") {
                    mode = "private";
                }

                moment.tz.setDefault('Etc/GMT');

                // Create a date and time in GMT
                const time = moment().format('HH:mm:ss');
                const date = moment().format('DD/MM/YYYY');

                const aliveMsg = `
*Owner* : ${s.OWNER_NAME}
*Mode* : ${mode}
*Date* : ${date}
*Time* : ${time}

 ${message}

 *Masérati*`;

                if (link.match(/\.(mp4|gif)$/i)) {
                    try {
                        zk.sendMessage(dest, { video: { url: link }, caption: aliveMsg }, { quoted: ms });
                    } catch (e) {
                        console.log("🥵🥵 Menu error " + e);
                        reply("🥵🥵 Menu error " + e);
                    }
                }
                // Check for .jpeg or .png
                else if (link.match(/\.(jpeg|png|jpg)$/i)) {
                    try {
                        zk.sendMessage(dest, { image: { url: link }, caption: aliveMsg }, { quoted: ms });
                    } catch (e) {
                        console.log("🥵🥵 Menu error " + e);
                        reply("🥵🥵 Menu error " + e);
                    }
                } else {
                    reply(aliveMsg);
                }

            } else {
                if (!superUser) {
                    reply("There is no alive message for this bot"); 
                    return;
                }

                await reply("You haven't registered your alive message yet. To do so, type 'alive' followed by your message and your image or video link in this format: .alive message;link");
                reply("I am taking my time to explain; it’s up to you if you make a mistake.");
            }
        } else {

            if (!superUser) {
                reply("Only the owner has the right to modify the alive message"); 
                return;
            }

            const text = arg.join(' ').split(';')[0];
            const link = arg.join(' ').split(';')[1];

            await addOrUpdateDataInAlive(text, link);

            reply('Alive message successfully updated.');
        }
    });
