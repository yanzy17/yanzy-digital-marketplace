// =============================================================
// TEMPLATE KONTEN — Isi siap pakai, placeholder: {topik}, {audiens}, {produk}
// Setiap framework punya 5+ variasi template.
// =============================================================

export type Template = {
  tag: string; // label ditampilkan di UI
  text: string; // isi konten, bisa multi-line
};

type TemplateMap = Record<string, Template[]>;

// === THREADS TEMPLATES ===
export const THREADS_TEMPLATES: TemplateMap = {
  free: [
    { tag: "Free Flow", text: `Gue mau cerita soal {topik} yang mungkin banyak dari lu belum tau.\n\nJadi gini, kebanyakan orang tuh salah kaprah soal {topik}. Mereka pikir tinggal jalanin aja langsung berhasil.\n\nPadahal realitanya? Butuh proses. Butuh gagal dulu beberapa kali.\n\nTapi yang bikin beda antara yang berhasil dan engga: mereka gak berhenti pas gagal pertama.\n\nKalau lu lagi di fase itu sekarang — keep going. Lu lebih deket dari yang lu kira.` },
    { tag: "Free Flow", text: `Hot take: {topik} itu bukan soal bakat.\n\nIni soal siapa yang mau konsisten pas udah gak seru lagi.\n\nGue udah liat banyak orang yang "berbakat" tapi nyerah duluan. Dan yang biasa aja tapi tekun? Mereka yang sekarang di atas.\n\nJadi buat {audiens} yang merasa "gue gak punya bakat" — lu punya sesuatu yang lebih powerful: kemauan.` },
    { tag: "Free Flow", text: `Satu hal yang gue pelajari soal {topik}:\n\nLu gak harus tau semuanya sebelum mulai. Lu cuma butuh tau langkah pertama.\n\nSisanya? Lu bakal belajar di jalan. Trust the process.\n\nYang penting mulai dulu. Sempurnain belakangan.` },
  ],
  unpopular: [
    { tag: "Unpopular Opinion", text: `Unpopular opinion: {topik} itu overrated kalau lu gak paham fundamentalnya.\n\nBanyak yang ikut-ikutan tanpa ngerti "kenapa" di baliknya. Hasilnya? Cuma bertahan 2 minggu terus nyerah.\n\nYang perlu lu lakuin: pahami dulu KENAPA lu mau {topik}. Baru HOW-nya nyusul.\n\nSetuju atau lu salah satu yang ikut-ikutan? 👀` },
    { tag: "Unpopular Opinion", text: `Unpopular opinion: kebanyakan {audiens} gagal bukan karena kurang info.\n\nTapi karena KEBANYAKAN info. Overthinking. Nunggu timing sempurna yang gak pernah dateng.\n\nPadahal soal {topik}, yang lu butuhkan cuma: mulai, gagal, belajar, ulangi.\n\nItu doang. Seriusan.` },
    { tag: "Unpopular Opinion", text: `Gue tau ini bakal kontroversial tapi:\n\n{topik} yang mahal bukan jaminan bagus.\n\nGue udah coba yang murah dan yang mahal. Dan honestly? Yang menentukan hasilnya bukan harga — tapi KONSISTENSI lu.\n\nAgree or disagree?` },
  ],

  hardtruth: [
    { tag: "Hard Truth", text: `Hard truth soal {topik}:\n\nLu gak gagal karena kurang modal. Lu gagal karena kurang disiplin.\n\nGue tau ini nampar. Tapi buat {audiens}, ini yang perlu lu denger sekarang.\n\nModalnya udah ada: HP, internet, waktu luang. Yang belum ada: konsistensi.\n\nMulai hari ini. Bukan besok. Bukan Senin depan.` },
    { tag: "Hard Truth", text: `Hard truth: gak ada yang peduli soal {topik} lu kalau lu gak mulai dulu.\n\nLu bisa planning setahun, bikin strategi sempurna, baca 100 artikel.\n\nTapi kalau lu gak EKSEKUSI, lu bakal tetap di titik yang sama tahun depan.\n\nIni bukan motivasi. Ini fakta.` },
    { tag: "Hard Truth", text: `Kebenaran pahit soal {topik}:\n\nLu bukan gak bisa. Lu cuma gak mau keluar dari zona nyaman.\n\nDan itu fine — selama lu gak complain kenapa hidup lu gak berubah.\n\nBuat yang siap berubah: langkah pertamanya kecil. Tapi harus hari ini.` },
  ],
  pov: [
    { tag: "POV", text: `POV: lu {audiens} yang baru mulai {topik} dan semua orang bilang "itu susah".\n\nTapi lu tetep coba. Gagal. Coba lagi. Gagal lagi.\n\nSampe suatu hari hasilnya keliatan. Dan orang-orang yang dulu nyinyir tiba-tiba nanya "gimana caranya?"\n\nItu momen termanis. Dan lu bakal sampe sana.` },
    { tag: "POV", text: `POV: lu akhirnya serius soal {topik} setelah bertahun-tahun cuma wacana.\n\nBulan pertama: bingung, malu, gak pede.\nBulan ketiga: mulai ngerti polanya.\nBulan keenam: orang mulai notice.\n\nSemua perjalanan dimulai dari keputusan buat gak tunda lagi.` },
    { tag: "POV", text: `POV: lu buka HP jam 2 pagi, scrolling soal {topik}, dan tiba-tiba ngerasa "gue harus mulai sekarang".\n\nItu bukan kebetulan. Itu sinyal.\n\nJangan abaikan feeling itu. Itu versi terbaik lu yang lagi manggil.` },
  ],

  stopstart: [
    { tag: "STOP / START", text: `Buat {audiens} yang serius soal {topik}:\n\n❌ STOP:\n- Overthinking tanpa action\n- Bandingin progress lu sama orang lain\n- Nunggu "siap" padahal gak bakal siap\n\n✅ START:\n- Eksekusi walau jelek dulu\n- Dokumentasi proses lu\n- Konsisten minimal 30 hari tanpa excuse\n\nBookmark ini. Baca ulang tiap kali mau nyerah.` },
    { tag: "STOP / START", text: `STOP ngomong "nanti aja".\nSTART bilang "sekarang, walau gak sempurna".\n\nSOAL {topik}:\n\n❌ Stop: scrolling doang tanpa praktek\n✅ Start: 15 menit/hari fokus belajar + praktek\n\n❌ Stop: beli course tanpa diselesain\n✅ Start: habiskan 1 course dulu baru beli lagi\n\nSimple? Iya. Gampang? Belum tentu. Tapi worth it.` },
    { tag: "STOP / START", text: `{topik} edition:\n\nSTOP ❌\n• Cuma nonton tutorial tanpa praktek\n• Minta validasi orang sebelum mulai\n• Perfeksionis yang bikin lu stuck\n\nSTART ✅\n• Learning by doing, gagal = data\n• Share progress walau masih jelek\n• Bikin deadline sendiri & pegang itu\n\nTag temen lu yang butuh ini 👇` },
  ],
  economy: [
    { tag: "In This Economy", text: `In this economy, {topik} bukan lagi pilihan — ini kebutuhan.\n\nGaji UMR gak naik, harga semua naik. Lu mau nunggu sampe kapan?\n\nBuat {audiens}: sekarang waktunya mulai {topik}. Gak perlu modal gede. Gak perlu quit job.\n\nMulai dari yang lu punya sekarang. HP + konsisten = peluang.` },
    { tag: "In This Economy", text: `Di ekonomi kayak gini, {audiens} yang gak punya skill tambahan bakal makin kejepit.\n\nBukan nakut-nakutin. Ini realita.\n\nMakanya {topik} itu penting banget dipelajari SEKARANG. Bukan karena keren, tapi karena lu butuh plan B.\n\nPlan B yang bisa jadi plan A kalau lu serius.` },
    { tag: "In This Economy", text: `"Gaji gue cuma {topik}..." — stop.\n\nDi 2024-2025 ini, banyak orang yang gajinya "cuma segitu" tapi income-nya dobel dari side hustle.\n\nRahasianya? Mereka mulai belajar sesuatu yang orang lain males lakuin.\n\nLu mau jadi yang complain atau yang cari solusi?` },
  ],

  warga: [
    { tag: "Warga Threads", text: `Warga sini, gue mau ngomongin soal {topik} bentar.\n\nJadi kemarin ada yang DM nanya "gimana sih caranya mulai {topik}?" dan gue mikir — banyak ternyata yang masih bingung ya.\n\nSo here's the thing: lu gak perlu tau semuanya. Lu cuma perlu tau SATU langkah pertama.\n\nDan langkah pertamanya gampang: {topik} itu dimulai dari niat + konsistensi. Itu aja dulu.\n\nSiapa yang relate? 🙋` },
    { tag: "Warga Threads", text: `Gue perhatiin di timeline akhir-akhir ini banyak yang bahas {topik}.\n\nDan jujur, gue seneng. Karena dulu pas gue mulai, gue merasa sendirian banget.\n\nBuat {audiens} yang baru mulai: welcome. Lu gak sendirian. Dan community di sini supportive banget.\n\nDrop emoji 🔥 kalo lu juga lagi di journey ini!` },
    { tag: "Warga Threads", text: `Nanya serius ke warga sini:\n\nKalau soal {topik}, lu lebih sering stuck di bagian mana?\n\nA) Mulai aja udah susah\nB) Udah mulai tapi gak konsisten\nC) Konsisten tapi belum keliatan hasilnya\n\nGue penasaran. Jawab di comment, ntar gue kasih tips sesuai jawaban lu.` },
  ],
  permission: [
    { tag: "Permission Offer", text: `Izin ya:\n\nKamu boleh kok mulai {topik} meskipun belum punya pengalaman.\n\nKamu boleh gagal berkali-kali tanpa harus malu.\n\nKamu boleh jalan pelan-pelan sesuai kecepatan sendiri.\n\nGak ada yang bilang kamu harus sempurna dari awal. Yang penting: kamu mulai.\n\nIni izin resmi dari gue. Sekarang giliran lu yang kasih izin ke diri sendiri.` },
    { tag: "Permission Offer", text: `Buat {audiens}:\n\nKamu boleh istirahat tanpa merasa bersalah.\nKamu boleh bilang "gue belum siap" tanpa di-judge.\nKamu boleh explore {topik} tanpa harus langsung jago.\n\nProgress kecil tetap progress. Dan lu udah lebih maju dari yang gak pernah coba.\n\nThis is your sign. Keep going. 💛` },
    { tag: "Permission Offer", text: `Permission granted:\n\nLu boleh ganti haluan soal {topik}. Bukan berarti gagal — lu cuma nemu jalan yang lebih cocok.\n\nLu boleh mulai dari nol lagi. Di umur berapa pun.\n\nLu boleh celebrate small wins tanpa nunggu "berhasil besar".\n\nDunia gak butuh lu sempurna. Dunia butuh lu jadi real.` },
  ],

  realization: [
    { tag: "Random Realization", text: `Random realization jam 2 pagi:\n\n{topik} itu bukan soal siapa yang paling pinter. Ini soal siapa yang paling tahan banting.\n\nGue baru sadar, semua orang yang "berhasil" di {topik} punya satu kesamaan: mereka gak berhenti pas semua orang nyerah.\n\nItu aja. Gak ada secret formula. Cuma tekad doang.` },
    { tag: "Random Realization", text: `Baru nyadar:\n\nWaktu yang lu habiskan buat overthinking soal {topik}... itu waktu yang sama yang bisa lu pakai buat DOING.\n\n1 jam mikir "gimana ya" = 1 jam yang bisa dipakai buat coba & gagal.\n\nDan gagal 10x lebih berguna daripada planning sempurna tapi gak jalan.\n\nBrain dump: selesai. Sekarang eksekusi.` },
    { tag: "Random Realization", text: `Realisasi random hari ini:\n\nLu gak butuh motivasi buat mulai {topik}. Lu butuh KEBIASAAN.\n\nMotivasi itu dateng-pergi. Tapi kebiasaan? Itu yang jalan walau lu males.\n\nBikin {topik} jadi senatural minum kopi pagi. Kecil tapi tiap hari. Itu kuncinya.\n\nRelate gak sih? 🤔` },
  ],
  checkin: [
    { tag: "Warga Check-In", text: `Check-in sore, warga! 🙋\n\nYang lagi ngejalanin {topik}, lu udah sampe di fase mana nih?\n\n🌱 Baru mulai (0-1 bulan)\n🌿 Udah jalan tapi masih belajar (1-6 bulan)\n🌳 Udah ngerti flow-nya (6+ bulan)\n🌲 Udah cuan / lihat hasil\n\nDrop di komen ya! Gue mau tau seberapa banyak warga sini yang serius.` },
    { tag: "Warga Check-In", text: `Weekend check-in:\n\nSoal {topik} minggu ini, lu udah ngapain aja?\n\n✅ Belajar hal baru\n✅ Praktek / eksekusi\n✅ Gagal tapi belajar dari situ\n✅ Istirahat (valid juga!)\n\nBerapapun yang lu centang, lu udah ahead dari yang cuma scroll doang.\n\nCerita dong di komen 👇` },
    { tag: "Warga Check-In", text: `Quick poll buat {audiens}:\n\nHal tersulit soal {topik} menurut lu apa?\n\n1️⃣ Konsistensi\n2️⃣ Gak tau harus mulai dari mana\n3️⃣ Gak ada support system\n4️⃣ Takut gagal / di-judge\n\nJawab nomer-nya aja! Nanti gue bikin konten khusus buat jawaban terbanyak 💪` },
  ],

  yapping: [
    { tag: "Daily Yapping", text: `Hari ini gue mau yapping soal {topik} ya.\n\nJadi ceritanya, gue tuh awalnya gak ngerti sama sekali. Literally nol. Baca artikel, nonton YouTube, masih bingung.\n\nTerus gue pikir: "ya udah cobain aja langsung."\n\nDan ternyata? Emang harus gitu. Belajar sambil jalan. Gagal ya tinggal perbaiki.\n\n6 bulan kemudian? Udah lumayan lah. Bukan karena gue pinter — tapi karena gue gak berhenti.\n\nMoral of the story buat {audiens}: lu bakal ngerti setelah nyoba, bukan sebelum.` },
    { tag: "Daily Yapping", text: `Yapping session 🗣️\n\nGue lagi mikir soal {topik} dan nyadar satu hal:\n\nKita tuh sering banget nunda karena ngerasa "belum siap". Padahal kapan sih rasanya siap? Gak pernah.\n\nGue juga gitu dulu. Nunggu moment perfect yang gak dateng-dateng.\n\nAkhirnya mulai pas kondisi gak ideal — dan ternyata justru itu yang bikin berkembang.\n\nBuat yang lagi nunda: ini tanda lu harus mulai hari ini. Yes, HARI INI. 🫵` },
    { tag: "Daily Yapping", text: `Random yapping:\n\nKenapa sih {topik} itu susah di awal tapi makin lama makin gampang?\n\nJawabannya: karena otak lu perlu waktu buat bikin "jalur" baru. Kayak jalan setapak yang makin sering dilewati makin lebar.\n\nMinggu pertama: chaos.\nMinggu keempat: mulai ngerti pola.\nBulan ketiga: auto-pilot.\n\nSo buat {audiens}: fase susah itu SEMENTARA. Push through. 💪` },
  ],
};


// === INSTAGRAM TEMPLATES (Caption + hook + hashtag) ===
export const INSTAGRAM_TEMPLATES: TemplateMap = {
  free: [
    { tag: "IG Caption", text: `Stop scroll. Ini penting. 👇\n\nGue mau share soal {topik} yang udah ngubah cara gue mikir.\n\nDulu gue pikir ini cuma hype. Ternyata? Game changer.\n\nBuat {audiens}: save post ini, baca pelan-pelan, dan mulai dari poin pertama.\n\nKarena tau doang tanpa action = zonk.\n\n💬 Komen "MULAI" kalo lu siap take action!\n\n#${"{topik}".replace(/\s/g, "")} #tipsindo #growthmindset #motivasiindonesia #viralindo` },
    { tag: "IG Caption", text: `3 hal yang gue wish somebody told me soal {topik}:\n\n1. Lu gak harus sempurna dari awal\n2. Konsistensi > motivasi\n3. Orang yang judge lu bukan audiens lu\n\nIni bukan teori. Ini dari pengalaman.\n\nBuat {audiens}: simpan ini. Baca lagi tiap kali ragu.\n\n🔖 Save buat reminder!\n\n#tipssukses #mindsetshift #indonesia #fypindonesia` },
  ],
  unpopular: [
    { tag: "IG Unpopular", text: `Unpopular opinion yang mungkin bikin lu triggered:\n\n{topik} itu gak sesulit yang orang-orang bilang. Yang susah itu MULAINYA.\n\nBanyak yang overcomplicate karena takut gagal. Padahal gagal = data.\n\nSlide buat breakdown lengkapnya 👉\n\n💬 Setuju atau lu yang suka overcomplicate?\n\n#unpopularopinion #harshtruth #tipsindo #realtalk` },
  ],
  hardtruth: [
    { tag: "IG Hard Truth", text: `Hard truth yang lu butuhkan hari ini:\n\n{topik} gak akan berubah sendiri. LU yang harus berubah.\n\nStop blaming keadaan. Stop nunggu waktu tepat.\n\nWaktu terbaik mulai? Kemarin.\nWaktu kedua terbaik? SEKARANG.\n\nBuat {audiens}: ini bukan buat bikin lu down. Ini buat bangunin lu. 🔥\n\n#realtalk #hardtruth #growthmindset #motivasiindonesia` },
  ],
  pov: [
    { tag: "IG POV", text: `POV: Lu akhirnya serius soal {topik} dan mulai lihat hasilnya setelah 3 bulan konsisten.\n\nYang berubah bukan skillnya doang — tapi mindset lu.\n\nDulu: "Gue bisa gak ya?"\nSekarang: "Gue PASTI bisa, tinggal caranya aja."\n\nSwipe buat liat journey-nya 👉\n\n#povindo #journey #growthmindset #fypindonesia` },
  ],
  stopstart: [
    { tag: "IG STOP/START", text: `Soal {topik}:\n\n❌ STOP:\n• Scrolling tanpa action\n• Overthinking\n• Bandingin sama orang lain\n\n✅ START:\n• 15 menit/hari praktek\n• Dokumentasi progress\n• Celebrate small wins\n\nSave buat reminder! 📌\n\nTag temen yang butuh ini 👇\n\n#tips #productivity #stopstart #motivasi` },
  ],
  economy: [
    { tag: "IG Economy", text: `Di ekonomi 2025 kayak gini...\n\nLu masih mau cuma andalin satu sumber income? 🫠\n\n{topik} bisa jadi game changer buat {audiens}.\n\nGak perlu modal gede. Gak perlu quit job. Mulai dari HP.\n\nSlide buat step-by-step-nya 👉\n\n#sidehustle #inthiseconomy #passiveincome #tipsfinansial` },
  ],
  warga: [
    { tag: "IG Warga", text: `Buat warga IG yang lagi struggle soal {topik}:\n\nLu gak sendirian. Banyak yang lagi di fase yang sama.\n\nYang bedain orang yang berhasil: mereka gak berhenti walau struggle.\n\nKomen 🙋 kalo lu juga lagi di journey ini — let's support each other!\n\n#community #support #journey #indonesia` },
  ],
  permission: [
    { tag: "IG Permission", text: `This is your sign:\n\n✨ Lu boleh mulai {topik} tanpa izin siapapun\n✨ Lu boleh gagal dan itu bukan akhir dunia\n✨ Lu boleh jadi pemula di umur berapapun\n\nBuat {audiens}: berhenti nunggu. Mulai hari ini.\n\nDouble tap kalo lu setuju ❤️\n\n#permission #selflove #mulaidarisekarang #motivasi` },
  ],
  realization: [
    { tag: "IG Realization", text: `Random realization:\n\n{topik} itu sebenarnya gak sesulit yang gue bayangin. Yang bikin susah itu overthinking-nya.\n\nBegitu mulai? Ternyata bisa aja.\n\nBuat {audiens}: jangan bikin kepala lu musuh lu sendiri.\n\nSave ini buat pengingat 📌\n\n#realization #mindset #growth #tipsindonesia` },
  ],
  checkin: [
    { tag: "IG Check-In", text: `Check-in! 🙋‍♀️\n\nSoal {topik}, lu di fase mana sekarang?\n\n🌱 Baru mulai\n🌿 Lagi proses\n🌳 Udah lihat hasil\n\nKomen emoji-nya! Let's celebrate each other's progress 🎉\n\n#checkin #progress #community #growthtogether` },
  ],
  yapping: [
    { tag: "IG Yapping", text: `Mini yapping session:\n\nGue lagi deep dive soal {topik} dan sumpah, kenapa gak dari dulu?\n\nSalah satu insight paling gede: lu gak butuh tau semuanya buat mulai. Lu cuma butuh MULAI.\n\nBuat {audiens}: share ini ke story lu kalo relate! 🫶\n\n#yapping #thoughts #sharing #tipsindonesia` },
  ],
};


// === TWITTER/X TEMPLATES (Thread pendek, max 280 char per tweet) ===
export const TWITTER_TEMPLATES: TemplateMap = {
  free: [
    { tag: "X Thread", text: `1/ Soal {topik}, ini yang jarang orang bahas:\n\n2/ Lu gak butuh talent. Lu butuh KONSISTENSI. Titik.\n\n3/ Gue mulai dari NOL. Literally gak tau apa-apa.\n\n4/ Yang bikin gue bertahan: gak bandingin diri sama orang lain.\n\n5/ Buat {audiens}: mulai aja dulu. Sisanya figure out di jalan.\n\n6/ RT kalau relate. Bookmark kalau butuh reminder. 🔥` },
    { tag: "X Thread", text: `1/ {topik} itu kayak gym.\n\n2/ Minggu pertama: sakit semua, gak keliatan hasilnya.\n\n3/ Bulan pertama: mulai biasa, mulai enjoy.\n\n4/ 6 bulan: orang lain mulai notice.\n\n5/ 1 tahun: lu gak percaya seberapa jauh lu udah sampai.\n\n6/ Poinnya? Jangan judge progress lu di minggu pertama. 💪` },
  ],
  unpopular: [
    { tag: "X Unpopular", text: `Unpopular opinion:\n\n{topik} itu overrated KALAU lu cuma ikut-ikutan tanpa ngerti why-nya.\n\nTapi begitu lu paham fundamentalnya? Jadi superpowerful.\n\nProblemnya bukan topiknya. Problemnya: orang males mikir deep.` },
  ],
  hardtruth: [
    { tag: "X Hard Truth", text: `Hard truth:\n\nSoal {topik}, 90% orang bakal nyerah sebelum 3 bulan.\n\nBukan karena susah. Tapi karena gak sabar lihat hasil.\n\nBuat {audiens}: kalau lu masih di sini setelah 3 bulan, lu udah top 10%. Keep going.` },
  ],
  pov: [
    { tag: "X POV", text: `POV: lu {audiens} yang udah capek overthinking soal {topik} dan akhirnya decide "ya udah, mulai aja".\n\nBest decision ever.\n\nKarena ternyata doing > planning.` },
  ],
  stopstart: [
    { tag: "X STOP/START", text: `Soal {topik}:\n\n❌ STOP nunggu ready\n✅ START walau jelek\n\n❌ STOP consume doang\n✅ START produce/execute\n\n❌ STOP bandingin\n✅ START fokus journey sendiri\n\nBookmark this. 📌` },
  ],
  economy: [
    { tag: "X Economy", text: `In this economy:\n\n- Gaji gak naik\n- Harga semua naik\n- Satu job gak cukup\n\nSolusi buat {audiens}? Belajar {topik}.\n\nBukan magic. Tapi kalau konsisten 6 bulan? Bisa jadi plan B yang legit.` },
  ],
  warga: [
    { tag: "X Warga", text: `Nanya ke timeline:\n\nYang lagi belajar {topik}, udah sampe mana?\n\nReply cerita progress lu — gue baca semua. Let's support each other 🙌` },
  ],
  permission: [
    { tag: "X Permission", text: `Permission slip:\n\n✅ Lu boleh mulai {topik} tanpa pengalaman\n✅ Lu boleh gagal tanpa malu\n✅ Lu boleh jalan pelan tanpa di-rush\n\nBuat {audiens}: ini izin resmi. Sekarang go. 🚀` },
  ],
  realization: [
    { tag: "X Realization", text: `Random realization:\n\n{topik} itu sebenarnya simple. Yang bikin complicated: overthinking kita sendiri.\n\nStep 1: mulai\nStep 2: gagal\nStep 3: belajar\nStep 4: repeat\n\nItu aja formulanya.` },
  ],
  checkin: [
    { tag: "X Check-In", text: `Quick poll buat {audiens}:\n\nSoal {topik}, lu di fase mana?\n\n🌱 Baru mulai\n🌿 Lagi proses\n🌳 Udah keliatan hasil\n\nReply! Gue penasaran.` },
  ],
  yapping: [
    { tag: "X Yapping", text: `1/ Mini yapping thread soal {topik}:\n\n2/ Gue baru nyadar kita sering overcomplicating sesuatu yang sebenarnya simple.\n\n3/ Yang lu butuhkan: mulai, konsisten, sabar.\n\n4/ Bukan sexy. Tapi works.\n\n5/ Buat {audiens}: less thinking, more doing. Trust me on this.` },
  ],
};


// === FACEBOOK TEMPLATES (Storytelling panjang & emosional) ===
export const FACEBOOK_TEMPLATES: TemplateMap = {
  free: [
    { tag: "FB Story", text: `Gue mau cerita sesuatu soal {topik}.\n\nDulu, gue orangnya skeptis banget. Setiap kali ada yang bilang "{topik} bisa ngubah hidup lu", gue cuma ketawa.\n\n"Lebay," pikir gue.\n\nTapi karena suatu hal, gue iseng nyoba. Tanpa ekspektasi. Tanpa target muluk-muluk.\n\nYang terjadi setelah 3 bulan?\n\nGue gak jadi sultan mendadak. Tapi ada yang lebih valuable: MINDSET gue berubah total.\n\nGue jadi lebih disiplin. Lebih percaya sama proses. Dan yang paling penting — gue berhenti nunggu "waktu yang tepat".\n\nBuat {audiens} yang lagi ragu: lu gak akan pernah merasa siap. Mulai aja. Hasilnya ngikut.\n\nKalau cerita ini relatable, share ke temen yang butuh dorongan. Siapa tau ini jadi titik balik mereka. 💪` },
    { tag: "FB Story", text: `Cerita pendek soal {topik}:\n\nSetahun lalu gue masih bingung banget. Gak tau mau mulai dari mana. Ngerasa tertinggal dari orang lain.\n\nTapi gue bikin 1 keputusan kecil: commit 30 menit sehari buat {topik}. Gak kurang, gak lebih.\n\nHasilnya? Pelan tapi pasti, semuanya mulai berubah.\n\nBukan karena gue pinter. Bukan karena gue beruntung. Tapi karena gue KONSISTEN.\n\nKalau gue bisa, {audiens} juga bisa. Percaya deh.\n\nLike post ini kalau lu siap mulai hari ini. 🙌` },
  ],
  hardtruth: [
    { tag: "FB Hard Truth", text: `Ini mungkin gak enak didenger, tapi perlu:\n\n{topik} gak akan berhasil kalau lu cuma setengah-setengah.\n\nGue pernah di posisi itu. "Mau sih, tapi..." — dan "tapi" itu yang bikin gue stuck bertahun-tahun.\n\nSampe akhirnya gue sadar: yang nahan gue bukan keadaan. Tapi DIRI GUE SENDIRI.\n\nBuat {audiens}: kalau lu serius mau perubahan, lu harus siap uncomfortable. Growth itu gak nyaman. Tapi worth it.\n\nShare kalau lu setuju. Mungkin ada temen lu yang butuh wake up call ini juga.` },
  ],
  pov: [
    { tag: "FB POV", text: `Coba bayangin ini:\n\nLu di 1 tahun dari sekarang. Udah konsisten soal {topik}.\n\nLu buka HP dan liat progress lu — dari nol, sekarang udah keliatan hasilnya.\n\nOrang-orang yang dulu nanya "ngapain sih?" sekarang nanya "gimana caranya?"\n\nItu bisa jadi realita lu. KALAU lu mulai hari ini.\n\nBuat {audiens}: future you bakal berterima kasih sama present you yang decide buat gak tunda lagi.\n\nKomen "GUE MULAI" biar gue doain. Serius! 🤲` },
  ],
  economy: [
    { tag: "FB Economy", text: `Mari kita jujur-jujuran:\n\nDi ekonomi 2025 kayak gini, ngandelin satu income aja udah gak cukup.\n\nGue ngerasain sendiri. Gaji naik dikit, tapi harga segala naik lebih cepet.\n\nMakanya gue mulai serius soal {topik}. Bukan buat jadi kaya mendadak — tapi buat punya SAFETY NET.\n\nDan {audiens} yang lagi ngalamin hal sama: lu gak sendirian.\n\nAyo mulai bareng. Step pertama: keputusan. Step kedua: konsistensi.\n\nSharing is caring — share post ini ke temen yang butuh plan B. 💡` },
  ],
  permission: [
    { tag: "FB Permission", text: `Ini buat {audiens} yang butuh denger:\n\nKamu BOLEH mulai {topik} meski belum sempurna.\nKamu BOLEH gagal tanpa harus malu.\nKamu BOLEH ambil pace sendiri tanpa bandingin sama orang lain.\n\nKadang yang kita butuhkan bukan strategi baru. Tapi IZIN dari diri sendiri buat memulai.\n\nIni gue kasih izin: MULAI. Sekarang. Apa adanya.\n\nLike kalau kamu siap terima izin ini. ❤️` },
  ],
  yapping: [
    { tag: "FB Yapping", text: `Random thoughts malem ini:\n\nKenapa sih {topik} itu selalu terlihat susah dari luar, tapi begitu dijalanin malah seru?\n\nGue rasa karena kita terlalu banyak mikir sebelum mulai. Kita bikin skenario gagal di kepala yang belum tentu kejadian.\n\nPadahal realitanya? Begitu mulai, lu bakal ketemu orang-orang yang supportive. Lu bakal belajar hal yang gak pernah lu sangka. Dan lu bakal surprise sama diri sendiri.\n\nBuat {audiens}: less overthinking, more doing.\n\nSiapa yang relate? 🙋‍♂️` },
  ],
  stopstart: [
    { tag: "FB STOP/START", text: `Dear {audiens},\n\nKalau soal {topik}, ini saran jujur dari gue:\n\nSTOP ❌\n• Nunggu motivasi dateng — itu gak reliable\n• Bandingin chapter 1 lu sama chapter 20 orang lain\n• Beli course/buku baru tanpa selesaiin yang lama\n\nSTART ✅\n• Eksekusi walau 10 menit/hari\n• Tulis progress lu, sekecil apapun\n• Cari 1-2 orang accountability partner\n\nSimple kan? Yang susah: MELAKUKAN-nya.\n\nTapi justru itu yang bedain lu sama yang lain.\n\nShare ke temen yang butuh reminder ini! 🫡` },
  ],
  unpopular: [
    { tag: "FB Unpopular", text: `Mungkin ini pendapat yang gak populer:\n\nMenurut gue, {topik} itu sebenarnya GAMPANG. Yang susah itu menghadapi diri sendiri.\n\nKita sendiri yang bikin alasan. Kita sendiri yang bikin takut. Kita sendiri yang nunda.\n\nPadahal kalau dipecah jadi langkah kecil? Bisa aja.\n\nBuat {audiens}: masalahnya bukan di topiknya. Masalahnya di mindset lu.\n\nFix mindset dulu. Sisanya nyusul.\n\nSetuju? Atau ada pendapat lain? Diskusi di komen yuk.` },
  ],
  warga: [
    { tag: "FB Warga", text: `Halo warga Facebook! 👋\n\nGue mau ngobrol santai soal {topik}.\n\nAkhir-akhir ini makin banyak yang nanya ke gue soal ini, jadi gue pikir mending share di sini sekalian.\n\nIntinya: {topik} itu bukan rocket science. Yang bikin beda antara yang berhasil dan engga cuma 1 hal: KONSISTENSI.\n\nGak glamor. Gak sexy. Tapi works.\n\nBuat {audiens}: mulai dari yang paling kecil, tapi TIAP HARI.\n\nSiapa yang lagi di journey ini juga? Let's connect! 🤝` },
  ],
  realization: [
    { tag: "FB Realization", text: `Gue baru aja nyadar sesuatu soal {topik}:\n\nKita tuh bukan gak mampu. Kita cuma gak BIASA.\n\nSemua orang yang keliatan jago sekarang, dulu juga pernah di posisi yang sama. Bingung, takut, gak pede.\n\nBedanya? Mereka tetap jalan walau gak nyaman.\n\nBuat {audiens}: kegelisahan lu itu tanda lu siap bertumbuh. Jangan lari dari itu. Embrace it.\n\nRealisasi ini ngubah cara gue approach semuanya. Semoga bermanfaat buat kalian juga. 🙏` },
  ],
  checkin: [
    { tag: "FB Check-In", text: `Weekend check-in! 📋\n\nBuat {audiens} yang lagi berjuang soal {topik}:\n\nMinggu ini lu udah ngapain aja?\n\n🟢 Belajar hal baru\n🟢 Praktek / eksekusi\n🟢 Gagal tapi belajar dari situ\n🟢 Istirahat & recharge\n\nSemua valid. Yang penting lu masih di track.\n\nCerita di komen ya! Gue baca semua. Let's support each other 💪` },
  ],
};


// === TIKTOK TEMPLATES (Script video: hook + body + CTA) ===
export const TIKTOK_TEMPLATES: TemplateMap = {
  free: [
    { tag: "TikTok Script", text: `🎬 [HOOK 0-3 detik]\n"Stop scroll. Gue mau share sesuatu soal {topik} yang jarang orang tau."\n\n📝 [BODY 3-25 detik]\n"Jadi gini, kebanyakan {audiens} tuh salah kaprah. Mereka pikir {topik} itu harus ribet.\n\nPadahal kuncinya cuma 3: mulai, konsisten, dan sabar.\n\nGue udah buktiin sendiri — dari nol sampe sekarang hasilnya keliatan."\n\n🎯 [CTA 25-30 detik]\n"Follow buat tips {topik} lainnya. Cek bio gue buat info lengkap!"\n\n📌 Caption: {topik} gak sesulit yang lu pikir fr fr 🔥\n#fyp #tipsindo #{topik} #viral` },
  ],
  unpopular: [
    { tag: "TikTok Unpopular", text: `🎬 [HOOK 0-3 detik]\n"Unpopular opinion: {topik} itu OVERRATED kalau lu gak ngerti fundamentalnya."\n\n📝 [BODY 3-25 detik]\n"Banyak yang ikut-ikutan tanpa tau kenapa. Hasilnya? Nyerah dalam 2 minggu.\n\nYang lu butuh bukan {topik} yang fancy. Tapi yang SIMPLE dan lu bisa konsisten."\n\n🎯 [CTA 25-30 detik]\n"Setuju? Comment pendapat lu. Follow buat hot takes lainnya!"\n\n📌 Caption: ini fakta btw 😤\n#unpopularopinion #fyp #viral #{topik}` },
  ],
  hardtruth: [
    { tag: "TikTok Hard Truth", text: `🎬 [HOOK 0-3 detik]\n"Hard truth: {topik} lu gagal bukan karena susah. Tapi karena lu gak disiplin."\n\n📝 [BODY 3-25 detik]\n"Gue tau ini nampar. Tapi buat {audiens}, ini yang perlu lu denger.\n\nModalnya udah ada: HP, internet, waktu. Yang kurang: eksekusi.\n\n90% orang nyerah di bulan pertama. Be the 10%."\n\n🎯 [CTA 25-30 detik]\n"Share ke temen yang butuh wake up call. Follow buat reality check lainnya!"\n\n📌 Caption: maaf kalo nampar tapi ini fakta 💀\n#hardtruth #fyp #realtalk #{topik}` },
  ],

  pov: [
    { tag: "TikTok POV", text: `🎬 [HOOK 0-3 detik]\n"POV: lu {audiens} yang akhirnya serius soal {topik}"\n\n📝 [BODY 3-25 detik]\n*Tunjukin transisi before-after*\n\n"Bulan 1: bingung, malu, gak pede.\nBulan 3: mulai ngerti.\nBulan 6: orang mulai notice."\n\n🎯 [CTA 25-30 detik]\n"Lu di bulan ke berapa? Comment! Follow buat POV lainnya."\n\n📌 Caption: yang sabar pasti sampai 🫶\n#pov #fyp #{topik} #motivasi` },
  ],
  stopstart: [
    { tag: "TikTok STOP/START", text: `🎬 [HOOK 0-3 detik]\n"Buat {audiens}, STOP lakuin ini soal {topik}!"\n\n📝 [BODY 3-25 detik]\n*On-screen text muncul satu-satu:*\n\n❌ STOP overthinking\n❌ STOP bandingin sama orang\n❌ STOP nunggu perfect\n\n✅ START eksekusi\n✅ START 15 menit/hari\n✅ START dokumentasi\n\n🎯 [CTA 25-30 detik]\n"Save video ini buat reminder! Follow buat tips lainnya."\n\n📌 Caption: bookmark dulu deh 📌\n#tips #fyp #{topik} #stopstart` },
  ],
  economy: [
    { tag: "TikTok Economy", text: `🎬 [HOOK 0-3 detik]\n"In this economy, lu masih mau cuma andalin gaji doang?"\n\n📝 [BODY 3-25 detik]\n"Gaji gak naik. Harga naik semua. Satu job gak cukup.\n\n{topik} bisa jadi plan B buat {audiens}.\n\nGak perlu modal gede. Cuma HP + konsistensi."\n\n🎯 [CTA 25-30 detik]\n"Cek bio buat detail lengkapnya. Follow buat tips lainnya!"\n\n📌 Caption: real talk buat 2025 💰\n#inthiseconomy #fyp #sidehustle #{topik}` },
  ],
  warga: [
    { tag: "TikTok Warga", text: `🎬 [HOOK 0-3 detik]\n"Warga TikTok! Gue mau nanya nih soal {topik}."\n\n📝 [BODY 3-20 detik]\n"Yang lagi belajar {topik}, lu di fase mana?\n\nComment: 🌱 baru mulai, 🌿 lagi proses, 🌳 udah lihat hasil"\n\n🎯 [CTA 20-30 detik]\n"Let's support each other! Follow + share ke temen yang senasib 🫶"\n\n📌 Caption: drop emoji lu! 👇\n#fyp #{topik} #community #tiktokindonesia` },
  ],
  permission: [
    { tag: "TikTok Permission", text: `🎬 [HOOK 0-3 detik]\n"Ini izin resmi dari gue buat {audiens}:"\n\n📝 [BODY 3-25 detik]\n*Text on screen:*\n\n✨ Boleh mulai {topik} tanpa pengalaman\n✨ Boleh gagal tanpa malu\n✨ Boleh jalan pelan\n✨ Boleh celebrate small wins\n\n🎯 [CTA 25-30 detik]\n"Tag orang yang butuh izin ini. Follow buat positivity lainnya!"\n\n📌 Caption: kamu boleh kok 🫶\n#fyp #permission #motivasi #{topik}` },
  ],
  realization: [
    { tag: "TikTok Realization", text: `🎬 [HOOK 0-3 detik]\n"Jam 2 pagi random realization soal {topik}..."\n\n📝 [BODY 3-20 detik]\n"Yang bikin orang berhasil itu bukan talent. Bukan luck.\n\nTapi siapa yang paling TAHAN BANTING.\n\nAll the successful people punya 1 kesamaan: they didn't quit."\n\n🎯 [CTA 20-30 detik]\n"Duet video ini sama realization lu! Follow buat more content 🧠"\n\n📌 Caption: fr fr gue baru nyadar 🤯\n#realization #fyp #{topik} #deepthoughts` },
  ],
  checkin: [
    { tag: "TikTok Check-In", text: `🎬 [HOOK 0-3 detik]\n"Quick check-in buat yang lagi journey {topik}!"\n\n📝 [BODY 3-20 detik]\n"Comment pake emoji:\n\n🌱 = baru mulai\n🌿 = lagi proses\n🌳 = udah lihat hasil\n🔥 = udah cuan"\n\n🎯 [CTA 20-30 detik]\n"Gue baca semua comment! Follow buat support system."\n\n📌 Caption: lu di mana? 👇\n#checkin #fyp #{topik} #tiktokindonesia` },
  ],
  yapping: [
    { tag: "TikTok Yapping", text: `🎬 [HOOK 0-3 detik]\n"Gue mau yapping bentar soal {topik} ya..."\n\n📝 [BODY 3-25 detik]\n"Jadi ceritanya, gue awalnya NOL. Gak ngerti apa-apa.\n\nTapi gue decide: cobain aja 30 hari.\n\nHasilnya? Gak langsung jago, tapi gue PAHAM. Dan itu udah cukup buat terus jalan.\n\nBuat {audiens}: lu bakal ngerti SETELAH nyoba, bukan sebelum."\n\n🎯 [CTA 25-30 detik]\n"Stitc video ini sama cerita lu! Follow buat yapping lainnya 🗣️"\n\n📌 Caption: daily yapping 🗣️✨\n#yapping #fyp #{topik} #storytime` },
  ],
};


// === HELPER: get templates by platform ===
export function getTemplatesByPlatform(platformId: string): TemplateMap {
  switch (platformId) {
    case "threads": return THREADS_TEMPLATES;
    case "instagram": return INSTAGRAM_TEMPLATES;
    case "twitter": return TWITTER_TEMPLATES;
    case "facebook": return FACEBOOK_TEMPLATES;
    case "tiktok": return TIKTOK_TEMPLATES;
    default: return THREADS_TEMPLATES;
  }
}
