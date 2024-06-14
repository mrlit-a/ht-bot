const { zokou } = require('../framework/zokou');
const {ajouterUtilisateurAvecWarnCount , getWarnCountByJID , resetWarnCountByJID} = require('../bdd/warn')
const s = require("../set")


zokou(
    {
        nomCom : 'warn',
        categorie : 'Group'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser,verifGroupe,verifAdmin , msgRepondu , auteurMsgRepondu} = commandeOptions;
if(!verifGroupe ) {repondre('komand sa se pou group baz') ; return};

if(verifAdmin || superUser) {
   if(!msgRepondu){repondre('kot moun wap aveti a ??'); return};
   
   if (!arg || !arg[0] || arg.join('') === '') {
    await ajouterUtilisateurAvecWarnCount(auteurMsgRepondu)
   let warn = await getWarnCountByJID(auteurMsgRepondu)
   let warnlimit = s.WARN_COUNT
   
   if( warn >= warnlimit ) { await repondre('itilizatè sa a rive nan limit avètisman , Se konsa, mwen pral choute li');
                zk.groupParticipantsUpdate(dest, [auteurMsgRepondu], "remove")
 } else { 

    var rest = warnlimit - warn ;
     repondre(`itilizatè sa a se avèti , rest before kick : ${rest} `)
   }
} else if ( arg[0] === 'reset') { await resetWarnCountByJID(auteurMsgRepondu) 

    repondre("mwen retire avetisman yo")} else ( repondre('kot moun wap retire avetisman an tape .warn ou .warn reset'))
   
}  else {
    repondre('ah ou pa adm kk')
}
 
   });