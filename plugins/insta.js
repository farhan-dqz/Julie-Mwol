const Julie = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios')
const LOAD_ING = "```Downloading media...```"
const IG_DESC = "Downloads Image/Video From Instagram"

Julie.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: IG_DESC }, async (message, match) => {
    //if(match[1] == '') return
    let { status, data, type } = await instaGram(match[1], '82d4dc815ab1fd4c');
    //if(type == undefined) return 
    if (!status) return await message.sendMessage('not found')
    await message.client.sendMessage(message.jid, LOAD_ING, MessageType.text);
    if (type === 'image') { await message.sendMessage(data, MessageType.image, { caption: "Made By JulieMwol" }) }
    else if (type === 'video') { await message.sendMessage(data, MessageType.video, { caption: "Made By JulieMwol" }) }
});
//const axios = require('axios')
async function instaGram(url, key){
const _0x477b=['135767iKnckP','673rRPNhH','data','1oVaSnc','1wFsRJN','5ZNKfRV','1082797kEqNzc','33405qKXkqX','get','536467jgcujZ','1509050KmQvtd','1sEPhwh','&APIKEY=','510217irWqHr','1753kjFBCd','20fokBTd'];function _0x34d6(_0x4f9dd8,_0x1e6344){return _0x34d6=function(_0x477b29,_0x34d6ab){_0x477b29=_0x477b29-0x128;let _0x12f50b=_0x477b[_0x477b29];return _0x12f50b;},_0x34d6(_0x4f9dd8,_0x1e6344);}const _0x88f305=_0x34d6;(function(_0x346d1d,_0xbe28c5){const _0x7c775f=_0x34d6;while(!![]){try{const _0x4a8522=parseInt(_0x7c775f(0x129))*-parseInt(_0x7c775f(0x136))+parseInt(_0x7c775f(0x12f))*parseInt(_0x7c775f(0x137))+parseInt(_0x7c775f(0x128))*parseInt(_0x7c775f(0x12d))+parseInt(_0x7c775f(0x12e))+parseInt(_0x7c775f(0x133))*parseInt(_0x7c775f(0x131))+parseInt(_0x7c775f(0x12c))*-parseInt(_0x7c775f(0x132))+-parseInt(_0x7c775f(0x135))*-parseInt(_0x7c775f(0x12b));if(_0x4a8522===_0xbe28c5)break;else _0x346d1d['push'](_0x346d1d['shift']());}catch(_0x1daac9){_0x346d1d['push'](_0x346d1d['shift']());}}}(_0x477b,0xc048d));const res=await axios('https://xteam.xyz/dl/ig?url='+url+_0x88f305(0x134)+key),{data,type}=res[_0x88f305(0x12a)]['result'][_0x88f305(0x12a)][0x0],buffer=await axios[_0x88f305(0x130)](data,{'responseType':'arraybuffer'});return{'data':buffer[_0x88f305(0x12a)],'type':type};
}
/*
const instagram = async (url, key) => {
    const _0x4a94a8 = _0x185a; function _0x3f3b() { const _0x37037c = ['jul', 'htt', 'ps:', 'nti', 'ouy', 'aw.', 'kit', '/in', 'sta', '?ur', 'dat', 'get', 'arr']; _0x3f3b = function () { return _0x37037c; }; return _0x3f3b(); } function _0x185a(_0x38e93d, _0x3f3b83) { const _0x185a5f = _0x3f3b(); _0x185a = function (_0x829ec5, _0x405d60) { _0x829ec5 = _0x829ec5 - 0xe5; let _0x20f676 = _0x185a5f[_0x829ec5]; return _0x20f676; }; return _0x185a(_0x38e93d, _0x3f3b83); } if (key != _0x4a94a8(0xe5) + 'ie') throw new Error('Jul' + 'ie'); const response = await axios(_0x4a94a8(0xe6) + _0x4a94a8(0xe7) + '//u' + _0x4a94a8(0xe8) + 'tle' + 'd-1' + _0x4a94a8(0xe9) + 'r1r' + 'szh' + _0x4a94a8(0xea) + 'run' + _0x4a94a8(0xeb) + '.sh' + _0x4a94a8(0xec) + _0x4a94a8(0xed) + _0x4a94a8(0xee) + 'l=' + url); const { status, result } = response[_0x4a94a8(0xef) + 'a']; if (!status) return { 'status': status }; const { type, data } = result[0x0]; const res = await axios[_0x4a94a8(0xf0)](data, { 'responseType': _0x4a94a8(0xf1) + 'ayb' + 'uff' + 'er' }); return { 'type': type, 'data': res[_0x4a94a8(0xef) + 'a'], 'status': status };
}

Julie.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: "Downloads from instagaram", dontAddCommandList: true }, async (message, match) => { 
    const { status, type, data } = await instagram(match[1], 'julie')
    if (!status) return await message.sendMessage('not found')
    await message.client.sendMessage(message.jid, LOAD_ING, MessageType.text, { quoted: message.data });
    if (type === 'image') return await message.sendMessage(data, MessageType.image, { caption: "Made By JulieMwol", quoted: message.data })
    if (type === 'video') return await message.sendMessage(data, MessageType.video, { caption: "Made By JulieMwol", quoted: message.data })
});
    //lyfe00011-farhan_dqz
    */