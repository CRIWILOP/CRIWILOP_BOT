async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '*—◉ 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝚂𝚄𝙱𝙱𝙾𝚃𝚂 (𝚂𝙴𝚁𝙱𝙾𝚃/𝙹𝙰𝙳𝙸𝙱𝙾𝚃) 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 🤖️*\n\n*◉ 𝙿𝚄𝙴𝙳𝙴𝚂 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁𝙻𝙾𝚂 𝙿𝙰𝚁𝙰 𝙿𝙴𝙳𝙸𝚁 𝚀𝚄𝙴 𝚂𝙴 𝚄𝙽𝙰𝙽 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙴 𝚁𝙴𝚂𝙿𝙴𝚃𝚄𝙾𝚂𝙾!!*\n\n*◉ 𝚂𝙸 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙰𝙿𝙰𝚁𝙴𝙲𝙴 𝙴𝙽 𝙱𝙻𝙰𝙽𝙲𝙾 𝚂𝙸𝙶𝙽𝙸𝙵𝙸𝙲𝙰 𝚀𝚄𝙴 𝙽𝙾 𝙷𝙰𝚈 𝚂𝚄𝙱𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂*\n\n*[❗] 𝚃𝙷𝙴 𝚂𝙷𝙰𝙳𝙾𝚆 𝙱𝚁𝙾𝙺𝙴𝚁𝚂 - 𝚃𝙴𝙰𝙼 𝚂𝙴 𝙳𝙴𝚂𝙻𝙸𝙽𝙳𝙰 𝙳𝙴 𝚃𝙾𝙳𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙰𝙱𝙸𝙻𝙸𝙳𝙰𝙳 𝙾 𝚂𝚄𝙲𝙴𝚂𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙳𝙾 𝙲𝙾𝙽 𝚁𝙴𝚂𝙿𝙴𝙲𝚃𝙾 𝙰𝙻 𝙱𝙾𝚃 𝙾 𝚂𝚄𝙱𝙱𝙾𝚃𝚂*')
await m.reply(users.map(v => '👉🏻 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})`).join('\n'))}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
