const { zokou } = require("../framework/zokou");
var mumaker = require("mumaker");
zokou({ nomCom: "hacker",
    categorie: "Logo", reaction: "👨🏿‍💻" }, async (origineMessage, zk, commandeOptions) => {
    const { prefixe, arg, ms, repondre } = commandeOptions;
    if (!arg || arg == "") {
        repondre("*__Exemple : * " + prefixe + "hacker Thomas");
        return;
    }
    try {
        let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
        let anu = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", arg); //
        //
       // let res = Object.values(anu)[3];
        // console.log("&€"+res);
      //  let lien = "https://e1.yotools.net" + res;
        repondre("*  traitement en cour ... *");
        await zk.sendMessage(origineMessage, { image: { url:anu.image}, caption: "* \t Logo by 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢*" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});
zokou({ nomCom: "dragonball", categorie: "Logo", reaction: "🐉" }, async (dest, zk, commandeOptions) => {
    let { arg, repondre, prefixe, ms } = commandeOptions;
    try {
        const noArgMsg = `*_EXEMPLE *:  ${prefixe}dragonball Thomas`;
        //  if(arg=='') {await zok.sendMessage(dest,{text:noArgMsg},{quoted:infoMessage}); return;}
        if (arg == '' || !arg) {
            repondre(noArgMsg);
            return;
        }
        var lienMaker = "https://ephoto360.com/tao-hieu-ung-chu-phong-cach-dragon-ball-truc-tuyen-1000.html";
        var lienMaker2 = "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html";
      
       
        const imgInfo = await mumaker.ephoto(lienMaker2, arg.join(' '));
       
        await zk.sendMessage(dest, { text: " *\t Traitement en cours ...*" }, { quoted: ms });
       // var idImg = Object.values(imgInfo)[3];
       
        await zk.sendMessage(dest, { image: { url: imgInfo.image }, caption: "* \t Logo by 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢*" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});
////////////////////////////
zokou({ nomCom: "naruto", categorie: "Logo", reaction: "⛩" }, async (dest, zk, commandeOptions) => {
    let { ms, arg, repondre, prefixe } = commandeOptions;
    try {
        if (!arg || arg == '') {
            repondre("*_Exemple : * " + prefixe + "naruto Thomas");
            return;
        }
        var nar = "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html";
        //let img= await //mumaker.textpro('https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html',arg);
        repondre("*traitement en cours...*");
        var radio2 = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6";
        var img = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", arg.join(' '));
        
        await zk.sendMessage(dest, { image: { url: img.image }, caption: "\t\t *𝐋𝐨𝐠𝐨 𝐁𝐲 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢*" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});
//didong
/*zokou({ nomCom: "didong", categorie: "Logo", reaction: "📱" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, arg, prefixe } = commandeOptions;
    
    var titre = "\t logo by Hacking-Md";
    try {
      var lien = "https://ephoto360.com/tao-anh-che-vui-tu-choi-cuoc-goi-voi-ten-cua-ban-930.html";
        if (!arg || arg == "") {
           repondre(`*exemple :* ${prefixe}didong Zokou`)
            return ;
        }
      console.log(typeof arg[0])
        var maker = mumaker.ephoto(lien, "arg");
        var lienImg = Object.values(maker)[1];
        await zk.sendMessage(dest, { image: { url: lienImg }, caption: titre });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});
*/


zokou({ nomCom: "didong", categorie: "Logo", reaction: "📱" }, async (dest, zk, commandeOptions) => {
    let { arg, repondre, prefixe, ms } = commandeOptions;
   try {
     var titre = "\t* logo by Hacking-Md*";
      var lien = "https://ephoto360.com/tao-anh-che-vui-tu-choi-cuoc-goi-voi-ten-cua-ban-930.html";
        if (!arg || arg == "") {
           repondre(`*exemple :* ${prefixe}didong Zokou`)
            return ;
        }
     
        var maker =await mumaker.ephoto(lien,arg.join(' '));
    
        
     repondre(' Traitement en cours ...')
       await zk.sendMessage(dest, { image: { url: maker.image}, caption: titre });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
    }
);


zokou({nomCom : "wall",categorie : "Logo",reaction : "👍"} , async (dest,zk,commandeOptions) =>{

  const {arg,repondre,ms,prefixe} = commandeOptions;
  if(!arg[0]) { repondre( `Voici comment utiliser la commande:\n ${prefixe}wall 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢` ); return ;}
   let text = arg.join(" ")
   mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", text)
.then((data) =>{
 zk.sendMessage(dest,{image : { url : data.image},caption : 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐭𝐢'},{quoted:ms})
}) 
.catch(console.log)
})
;
zokou({nomCom: "summer", categorie: "Logo", reaction: "🌞"}, async (dest, zk, commandeOptions) => {
  const { arg, repondre, ms, prefixe } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}summer Mon_Texte`);
    return;
  }
  
  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch(console.error);
});

zokou({nomCom: "neonlight", categorie: "Logo", reaction: "💡"}, async (dest, zk, commandeOptions) => {
  const { arg, repondre, ms, prefixe } = commandeOptions;
  /*if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}neonlight Mon_Texte`);
    return;
  }*/
  if(!arg ||arg=="")
  {
      repondre(`Voici comment utiliser la commande:\n ${prefixe}neonlight Mon_Texte`);
    return;
  }
  
  const text = arg.join(" ");
  try{
    
    let maker=await mumaker.textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html",arg)
    //repondre(stringify(maker))
    /*.then((data) => {*/
     zk.sendMessage(dest, { image: { url: maker.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    
    /*.catch(console.error);*/

  
}catch(e){repondre("🥵🥵 "+e)}

});

zokou({nomCom: "greenneon", categorie: "Logo", reaction: "🟢"}, async (dest, zk, commandeOptions) => {
  const { arg, repondre, ms, prefixe } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}greenneon Mon_Texte`);
    return;
  }
  
  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/green-neon-text-effect-874.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐮' }, { quoted: ms });
    })
    .catch(console.error);
});

zokou({nomCom: "glitch", categorie: "Logo", reaction: "🎛️"}, async (dest, zk, commandeOptions) => {
  const { arg, repondre, ms, prefixe } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}glitch Mon_Texte`);
    return;
  }
  
  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch(console.error);
});

zokou({nomCom: "devil", categorie: "Logo", reaction: "😈"}, async (dest, zk, commandeOptions) => {
  const { arg, repondre, ms, prefixe } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}devil Mon_Texte`);
    return;
  }
  
  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",arg)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch(console.error);
});
////////////////////
zokou(
  {nomCom:"boom",categorie:
    "Logo",reaction:"💥"},async(dest,zk,commandeOptions)=>{

    let {ms,repondre,prefixe,arg}=commandeOptions;

        if(!arg||arg=="")
        {
   
          repondre(`  Exemple :* ${prefixe}boom 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢`)
          return ;
        }
       try{
              var radio2 = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6";
         let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
var lien="https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html";
        console.log(arg)
         var img =await mumaker.ephoto(lien,arg)

        //var idImg = Object.values(img)[3];
       // var lienImage = "https://e1.yotools.net/" + idImg; 

  /* let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
         var v="https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html";
         var c="https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html"
        let anu = await mumaker.ephoto4(v, arg, radio);      
         let res = Object.values(anu)[3];*/
        // console.log("&€"+res);
       // let lien = "https://e1.yotools.net" + res;
         

repondre("  Traitement en cour ...")
         await zk.sendMessage(dest,{image:{url:img.image},caption:"\t *𝐋𝐨𝐠𝐨 𝐛𝐲 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢*"})
         
        // await zk.sendMessage(dest,{image:{url:lienImage},caption:"\t *Logo by Hacking-Md*"})
         


       }catch(e){repondre("🥵🥵 "+e)}
    
    }
)
//water
zokou({nomCom:"water",categorie:"Logo",reation:"💦"},async(dest,zk,commandeOptions)=>{

  
var {ms,repondre,arg,prefixe}=commandeOptions;
  if(!arg||arg=="")
  {
    repondre(`${prefixe}water 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢`)
    return;
  }
  try{
    var lien ="https://en.ephoto360.com/create-water-effect-text-online-295.html";
    var img =await mumaker.ephoto(lien,arg);
    repondre(" traitement en cour ...")
    await zk.sendMessage(dest,{image:{url:img.image},caption:"  *Logo by 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢*"})
  }catch(e){repondre(`🥵🥵 ${e}`)}

});

zokou({ nomCom: "snow", categorie: "Logo", reaction: "❄️" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}Snow Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-beautiful-3d-snow-text-effect-online-1101.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

zokou({ nomCom: "transformer", categorie: "Logo", reaction: "🤖" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}Transformer Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

zokou({ nomCom: "thunder", categorie: "Logo", reaction: "⚡" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}Thunder Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

zokou({ nomCom: "harrypotter", categorie: "Logo", reaction: "🧙‍♂️" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}HarryPotter Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

zokou({ nomCom: "cat", categorie: "Logo", reaction: "🪟" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}FoggyWindow Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

                                                                         

zokou({ nomCom: "whitegold", categorie: "Logo", reaction: "💫" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}WhiteGold Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

zokou({ nomCom: "lightglow", categorie: "Logo", reaction: "🌟" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}LightGlow Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

zokou({ nomCom: "thor", categorie: "Logo", reaction: "🔨" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}Thor Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});

zokou({ nomCom: "neon", categorie: "Logo", reaction: "💡" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}Neon Mon_Texte`);
    return;
  }

  const text = arg.join(" ");
  mumaker.textpro("https://textpro.me/neon-text-effect-online-879.html", text)
    .then((data) => {
      zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo fait par 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢' }, { quoted: ms });
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
});



zokou({nomCom:"purple",categorie:"Logo",reaction:"🧳"},async(dest,zk,commandeOptions)=>{
  var {ms,repondre,prefixe,arg}=commandeOptions;
  
    try{
      if(!arg||arg=="")
  {
    repondre(prefixe+"purple zokou");return;}
      const lien="https://en.ephoto360.com/purple-text-effect-online-100.html"
      var img = await mumaker.ephoto(lien,arg);
      repondre(" Traitement en cour ...")
      await zk.sendMessage(dest,{image:{url:img.image},caption:"      *Logo by 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢*"});
    }catch(e){repondre(e)}
  
})

zokou({nomCom:"gold",categorie:"Logo",reaction:"🧚🏿‍♀️"},async(dest,zk,commandeOptions)=>{


  let {ms,arg,prefixe,repondre}=commandeOptions;
  try{
      if(!arg||arg=="")
      {
        repondre(prefixe+"gold 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢");return;
      }

    var lien="https://en.ephoto360.com/modern-gold-4-213.html";

    var img = await mumaker.ephoto(lien,arg);
   repondre("Traitement en cour ...")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *Logo by 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢*"},{quoted:ms})
  }catch(e){repondre(e)}
})


zokou({nomCom:"arena",categorie:"Logo",reaction:"🥵"},async(dest,zk,commandeOptions)=>{


  let {ms,arg,prefixe,repondre}=commandeOptions;
  try{
      if(!arg||arg=="")
      {
        repondre(prefixe+"arena 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢");return;
      }

    var lien="https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html";

    var img = await mumaker.ephoto(lien,arg.join(' '));
   repondre("Traitement en cour ...")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *Logo by Hacking-Md*"},{quoted:ms})
  }catch(e){repondre(e)}
})

zokou({nomCom:"incandescent",categorie:"Logo",reaction:"😋"},async(dest,zk,commandeOptions)=>{


  let {ms,arg,prefixe,repondre}=commandeOptions;
  try{
      if(!arg||arg=="")
      {
        repondre(prefixe+"incandescent 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢");return;
      }

    var lien="https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html";

    var img = await mumaker.ephoto(lien,arg.join(' '));
   repondre("Traitement en cour ...")
    await zk.sendMessage(dest,{image:{url:img.image},caption:" *Logo by Hacking-Md*"},{quoted:ms})
  }catch(e){repondre(e)}
})
