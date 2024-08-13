"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐇𝐢 𝐓𝐡𝐢𝐬 𝐢𝐬 *𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢* \n\n ' + '𝐓𝐡𝐞 𝐥𝐚𝐬𝐭 𝐇𝐨𝐩𝐞 𝐛𝐨𝐭';
    let d = '𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐁𝐲 *𝐌𝐚𝐫𝐢𝐬𝐞𝐥*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/45c418795f7245d58b456.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *HACKING-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Thomas*'
      let varmess=z+d
      var img='https://telegra.ph/file/7113ddc85a26a69a7a437.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
