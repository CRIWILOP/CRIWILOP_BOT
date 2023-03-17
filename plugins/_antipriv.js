/*᭥🍁᭢━━━━◜🍀❥៚⍣𝘾𝙍𝙄𝙒𝙄𝙇𝙊𝙋_𝘽𝙊𝙏࿐⛦🍀◞━━━━᭥🍁᭢
 ┃❏ Created By https://github.com/CRIWILOP 
 ┃❏ ⍣ᴄʀɪᴡɪʟᴏᴘ࿐
 ╰─────────────────────╯*/

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner) {
       await m.reply(`Hola *@${m.sender.split`@`[0]}*, está prohibido hablar al privado del bot serás bloqueado.`, false, { mentions: [m.sender] })
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
