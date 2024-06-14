"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "wagroup", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join 𝙃𝘼𝙄𝙏𝙄𝙀𝙉 𝙈𝘿 WhatsApp Testing Group\n\n';
    let d = 'https://chat.whatsapp.com/LZojfM2mEFL9ibw9r7Yn0K';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/67d426894e4b5004c8814.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

zokou({ nomCom: "channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join 𝙃𝘼𝙄𝙏𝙄𝙀𝙉 𝙈𝘿 WhatsApp Channel\n\n';
    let d = 'https://whatsapp.com/channel/0029VaKBCh58V0trY4tQfv3o';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/67d426894e4b5004c8814.jpg';
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
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://wallpapercave.com/uwp/uwp3842939.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
