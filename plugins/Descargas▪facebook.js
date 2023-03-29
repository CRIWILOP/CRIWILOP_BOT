import fg from 'api-dylux'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*_📌️ Uso del comando_*\n *${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/=`
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, addescargas, null, script, m)
    let res = await fg.igdl(args[0])
    for (let result of res.url_list) {
    conn.sendFile(m.chat, result, 'igdl.mp4', ``, m)}}
 handler.help = ['facebook'].map(v => v + ' *<url>*') 
 handler.tags = ['downloader'] 
 handler.command = /^((facebook|fb)(downloder|dl)?)$/i 
handler.register = true
  
 export default handler
