const toxicRegex = /puto|Puto|Puta|Vrga|Mrda|Mierda|mierda|pendejo|pendeja|Pendejo|Pendeja|verga|Verga| Pndj | pndj | pto | Pto | Pta | pta |hijueputa|Hijueputa|puta|rata| mrd |verga|vrga/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, decir la palabra (${isToxic}) está prohibido en este bot *${user.warn}/5* advertencia`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 5) {
       user.warn = 0
       await m.reply(`Hola *@${m.sender.split`@`[0]}*, superaste las 5 advertencias serás bloqueado y eliminado de este grupo`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
