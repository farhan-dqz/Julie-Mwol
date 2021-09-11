/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

var dd = ''
var errmsg = ''
if (Config.LANG == 'EN') dd = 'Prints the inside of the file on the server.', errmsg = '*The file you are looking for is not available on the server!*'
if (Config.LANG == 'ML') dd = 'ഫയലിന്റെ ഉള്ളിൽ സെർവറിൽ പ്രിന്റുചെയ്യുന്നു', errmsg = '*നിങ്ങൾ തിരയുന്ന ഫയൽ സെർവറിൽ ലഭ്യമല്ല!*'

Asena.addCommand({pattern: 'print ?(.*)', fromMe: true, desc: dd}, (async (message, match) => {    
    exec('cat ' + match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,errmsg, MessageType.text)
        }
        await message.client.sendMessage(message.jid, `Root ~# ${match[1]} \n\n` + stdout, MessageType.text)
    });
}));
var bdesc = ''
var berr = ''
var need_way = ''
if (Config.LANG == 'EN') bdesc = 'Sends audio, video and photos inside the server.', berr = '*The file you are looking for is not available on the server!*', need_way = '*File Path Required!*'
if (Config.LANG == 'ML') bdesc = 'സെർവറിനുള്ളിൽ ഓഡിയോ, വീഡിയോ, ഫോട്ടോകൾ അയയ്ക്കുന്നു.', berr = '*നിങ്ങൾ തിരയുന്ന ഫയൽ സെർവറിൽ ലഭ്യമല്ല!*', need_way = '*ഫയൽ പാത്ത് ആവശ്യമാണ്!*'
let wk_q = Config.WORKTYPE == 'public' ? false : true
Asena.addCommand({pattern: 'bashmedia ?(.*)', fromMe: wk_q, desc: bdesc, usage: 'video.mp4 && media/gif/pic.mp4'}, (async (message, match) => {    
    var id = message.jid
    try {
        if (match[1].includes('jpg') || match[1].includes('tiff') || match[1].includes('raw') || match[1].includes('dng') || match[1].includes('png') || match[1].includes('jpeg')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/WhatsAsenaDuplicated/${match[1]}`), MessageType.image, {caption: 'Made by WhatsAsena' })
        }
        else if (match[1].includes('mp4') || match[1].includes('avi') || match[1].includes('webm') || match[1].includes('mkv') || match[1].includes('mpeg')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/WhatsAsenaDuplicated/${match[1]}`), MessageType.video, {caption: 'Made by WhatsAsena' });
        }
        else if (match[1].includes('mp3') || match[1].includes('waw') || match[1].includes('flac') || match[1].includes('weba') || match[1].includes('ogg') || match[1].includes('m4a')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/WhatsAsenaDuplicated/${match[1]}`), MessageType.audio);
        }
        else {
            await message.client.sendMessage(id,need_way, MessageType.text)
        }
    } catch (err) {
        await message.client.sendMessage(id,berr, MessageType.text)
    }
}));
let wk_ad = Config.WORKTYPE == 'public' ? false : true
var addsdesc = ''
var rep_add = ''
var suc_add = ''
if (Config.LANG == 'EN') addsdesc = 'Uploads image, audio or video to the server.', rep_add = '*Reply to Any Media Message!*', suc_add = '*Media Added to Server! ✅*'
if (Config.LANG == 'ML') addsdesc = 'ഇമേജ്, ഓഡിയോ അല്ലെങ്കിൽ വീഡിയോ സെർവറിലേക്ക് അപ്‌ലോഡുചെയ്യുന്നു.', rep_add = '*ഏതെങ്കിലും മീഡിയ സന്ദേശത്തിന് മറുപടി നൽകുക!*', suc_add = '*മീഡിയ സെർവറിൽ ചേർത്തു! ✅*'

Asena.addCommand({pattern: 'addserver$', fromMe: wk_ad, desc: addsdesc}, (async (message, match) => {    
    if (message.reply_message.image) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/server-image.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else if (message.reply_message.video) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
            
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/server-video.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else if (message.reply_message.audio) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
            
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/server-audio.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else { await message.client.sendMessage(message.jid,rep_add, MessageType.text)
    }
}));

Asena.addCommand({pattern: 'term1 ?(.*)', fromMe: true, desc: Lang.TERM_DESC}, (async (message, match) => {    
    var user = message.client.user.name
    var id = message.jid
    if (match[1] === '') return await message.client.sendMessage(id,Lang.GIVE_ME_CODE,MessageType.text);

    exec(match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(id,'```' + user + ':~# ' + match[1] + '\n' + err + '```',MessageType.text);
        }
        
        return await message.client.sendMessage(id,'```' + user + ':~# ' + match[1] + '\n' + stdout + '```',MessageType.text);
      });
}));
let wk = Config.WORKTYPE == 'public' ? false : true
var medinfo = ''
if (Config.LANG == 'EN') medinfo = 'Shows the technical information of the replied video.'
if (Config.LANG == 'ML') medinfo = 'മറുപടി നൽകിയ വീഡിയോയുടെ സാങ്കേതിക വിവരങ്ങൾ കാണിക്കുന്നു.'

Asena.addCommand({pattern: 'details$', fromMe: wk, desc: medinfo}, (async (message, match) => {    
    var id = message.jid
    if (message.reply_message.video) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage           
        });
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/vid.mp4')
        exec('ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json /root/WhatsAsenaDuplicated/vid.mp4', async (err, st, stderr) => {
            if (err) {
                return await message.client.sendMessage(id,'*Error:* \n\n' + err,MessageType.text);
            }
            var stdout = JSON.parse(st)
            let
                vsize = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Video Boyutu:* ' : '*Video Size:* '
                vlength = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Uzunluğu:* ' : '\n*Video Length:* '
                second = Config.LANG == 'TR' || Config.LANG == 'AZ' ? ' Saniye' : ' Second'
                vrvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Çözünürlük Değeri:* ' : '\n*Video Resolution Value:* '
                vpvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Pixel Değerleri:* ' : '\n*Video Pixel Value:* '
                vpformat = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Pixel Formatı:* ' : '\n*Video Pixel Format:* '
                vcprofile = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Kodek Profili:* ' : '\n*Video Codec Profile:* '
                vctag = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Kodek Tagı:* ' : '\n*Video Codec Tag:* '
                srvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Örnek En-Boy Oranı:* ' : '\n*Example Aspect Ratio:* '
                vrvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*İzlenebilir En-Boy Oranı:* ' : '\n*Viewable Aspect Ratio:* '
                vfps = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video FPS Değeri:* ' : '\n*Video FPS Value:* '
                vavgfps = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Ortalama FPS Değeri:* ' : '\n*Video Average FPS Value:* '
                sctip = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kodek Türü:* ' : '\n*Audio Codec Type:* '
                sctag = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kodek Tagı:* ' : '\n*Audio Codec Tag:* '
                shzvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses KHz Oranı:* ' : '\n*Audio KHz Rate:* '
                schannel = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kanalları:* ' : '\n*Audio Channels:* '
                schome = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kanalı Yerleşimi:* ' : '\n*Audio Channel Layout:* '
            var msgi = vsize + stdout.format.size / 1000000 + 'MB' + vlength + stdout.streams[0].duration + second + vrvalue + stdout.streams[0].width + 'p' + vpvalue + stdout.streams[0].width + 'x' + stdout.streams[0].height + vpformat + stdout.streams[0].pix_fmt + vcprofile + stdout.streams[0].codec_name + vctag + stdout.streams[0].codec_tag_string + srvalue + stdout.streams[0].sample_aspect_ratio + vrvalue + stdout.streams[0].display_aspect_ratio + vfps + stdout.streams[0].r_frame_rate.split('/')[0] + vavgfps + stdout.streams[0].avg_frame_rate.split('/')[0] + sctip + stdout.streams[1].codec_name + sctag + stdout.streams[1].codec_tag_string + shzvalue + stdout.streams[1].sample_rate + schannel + stdout.streams[1].channels + schome + stdout.streams[1].channel_layout            
            return await message.client.sendMessage(id,msgi,MessageType.text);
        });
    } else { return await message.client.sendMessage(id,SLang.MP4TOAUDİO_NEEDREPLY, MessageType.text)
    }
}));
var sucmsg = ''
var pmmm = ''
var psmm = ''
if (Config.LANG == 'EN') sucmsg = '*Message Sent Successfully ✅*', pmmm = 'Sends a private message to the replied person.', psmm = 'Sends a private voice message to the respondent.'
if (Config.LANG == 'ML') sucmsg = '*സന്ദേശം വിജയകരമായി അയച്ചു ✅*', pmmm = 'മറുപടി നൽകിയ വ്യക്തിക്ക് ഒരു സ്വകാര്യ സന്ദേശം അയയ്ക്കുന്നു.', psmm = 'പ്രതികരിക്കുന്നയാൾക്ക് ഒരു സ്വകാര്യ ശബ്ദ സന്ദേശം അയയ്ക്കുന്നു.'

Asena.addCommand({pattern: 'pmsend ?(.*)', fromMe: false, desc: pmmm, onlyGroup: true }, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,NLang.NEED_REPLY, MessageType.text);
    if (message.reply_message && match[1] == '') return await message.client.sendMessage(message.jid, NLang.NEED_WORDS, MessageType.text);
    const uspm = message.reply_message.jid
    await message.client.sendMessage(uspm, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, sucmsg, MessageType.text);
}));