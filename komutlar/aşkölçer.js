const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  let yuzdelik1 = ["%1\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%2\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%3\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%4\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%5\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%6\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%7\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%8\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%9\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSiz olmazsınız gibi gözüküyor.", "%10\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%11\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%12\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%13\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%14\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%15\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%16\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%17\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%18\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%19\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSana çok ama çoook az bir şeyler hissediyor.", "%20\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%21\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%22\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%23\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%24\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%25\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%26\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%27\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%28\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%29\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%30\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%31\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%32\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%33\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%34\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%35\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%36\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%37\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%38\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%39\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nSende az biraz tip var ama, yok. Fazla bir şeyler hissetmiyor.", "%40\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%41\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%42\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%43\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%44\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%45\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%46\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%47\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%48\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%49\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nUğraşmaya devam et.", "%50\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!", "%51\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!", "%52\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!", "%53\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!", "%54\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!", "%55\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!","%56\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!","%57\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!","%58\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!","%59\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYolun yarısındasın! Hadi, devam et!","%60\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%61\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%62\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%63\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%64\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%65\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%66\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%67\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%68\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%69\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nSeni sevmek istiyor ama, ona yeterince ilgi vermiyorsun!","%70\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%71\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%72\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%73\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%74\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%75\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%76\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%77\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%78\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.", "%79\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nİkinizde birbirinizi seviyorsunuz ama, birbirinizi sevdiğinizi bilmiyorsunuz.","%80\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.", "%81\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.", "%82\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.", "%83\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.", "%84\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.", "%85\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.", "%86\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.", "%87\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.", "%88\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.","%89\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nİkiniz de birbirinizi seviyorsunuz. En kısa zamanda, sevgili olacaksınız.","%90\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%91\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%92\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%93\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%94\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%95\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%96\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%97\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%98\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%99\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nSiz ikiniz, tamamiyle uyumlu bir çiftsiniz! Küçük aşk kuşları sizi ^^","%100\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:","\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:\n\nSiz birbiriniz için yaratıldınız.","\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:\n\nSiz birbiriniz için yaratıldınız.","\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:\n\nSiz birbiriniz için yaratıldınız."]
    let yuzdelik2 = ["%1\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%2\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%3\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%4\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%5\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%6\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%7\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%8\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%9\n:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'ll never be a lover with this person.", "%10\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/She feels very little about you", "%11\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/She feels very little about you", "%12\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/She feels very little about you", "%13\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/She feels very little about you", "%14\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/She feels very little about you", "%15\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/SHe/She feels very little about you", "%16\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/SHe/She feels very little about you", "%17\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/She feels very little about you", "%18\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/She feels very little about you", "%19\n:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nHe/She feels very little about you", "%20\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%21\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%22\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%23\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%24\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%25\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%26\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%27\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%28\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%29\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%30\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%31\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%32\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%33\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%34\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%35\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%36\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%37\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%38\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%39\n:heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou\'re a little bit handsome but, He/She don\'t feels very about you", "%40\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%41\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%42\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%43\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%44\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%45\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%46\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%47\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%48\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%49\n:heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nGo on struggle!", "%50\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!", "%51\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!", "%52\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!", "%53\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!", "%54\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!", "%55\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!","%56\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!","%57\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!","%58\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!","%59\n:heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart:\n\nYou're in the middle of the road! Go on!","%60\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%61\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%62\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%63\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%64\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%65\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%66\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%67\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%68\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%69\n:heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart:\n\nHe wants to love you, but you don\'t give him enough attention!","%70\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%71\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%72\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%73\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%74\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%75\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%76\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%77\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%78\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.", "%79\n:heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart:\n\nYou both love each other, but you don't know that you love each other.","%80\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear", "%81\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear", "%82\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear", "%83\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear", "%84\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear", "%85\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear", "%86\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear", "%87\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear", "%88\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear","%89\n:heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart:\n\nYou both love each other. As soon as possible, you both will be dear","%90\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%91\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%92\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%93\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%94\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%95\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%96\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%97\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%98\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%99\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart:\n\nYou two, you're a perfectly compatible couple! Little love birds you ^^","%100\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:","\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:\n\nYou were created for each other.","\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:\n\nYou were created for each other.","\n:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:\n\nYou were created for each other."]
  if (db.has(`sunucuDili_${message.guild.id}`) === false)
    var yuzdelik = yuzdelik1
  if (db.has(`sunucuDili_${message.guild.id}`) === true)
    var yuzdelik = yuzdelik2
    let dilimi = Math.floor((Math.random() * yuzdelik.length));
    let mUser = message.mentions.users.first()
    let question = args.slice().join(", ");
    if (db.has(`sunucuDili_${message.guild.id}`) === false)
    var yazi2 = `${mUser} ile <@${message.author.id}>: `
  if (db.has(`sunucuDili_${message.guild.id}`) === true)
    var yazi2 = `${mUser} and <@${message.author.id}>: `
    if(!mUser) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('X Birini etiketlemelisin.').setColor('RED'));

    let embedz = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(yazi2 + yuzdelik[dilimi])

    message.channel.send(embedz)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'ölç'],
  permLevel: 0
};

exports.help = {
  name: 'aşk-ölçer',
  description: 'Etiketlediğin kişiye söversin',
  usage: 'aletim'
};