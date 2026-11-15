const levels=[
 {title:"Pengukuran",short:"Pengukuran",page:3,icon:"▤",source:"Daftar isi buku: hlm. 3",description:"Besaran fisika, alat ukur, dan ketelitian pengukuran."},
 {title:"Gerak Lurus",short:"Gerak lurus",page:6,icon:"↗",source:"Daftar isi buku: hlm. 6",description:"GLB, GLBB, gerak jatuh bebas, dan gerak vertikal ke atas."},
 {title:"Gerak Lengkung",short:"Gerak lengkung",page:8,icon:"⌁",source:"Daftar isi buku: hlm. 8"},
 {title:"Hubungan Gaya dan Gerak (Hukum Newton)",short:"Hukum Newton",page:11,icon:"⟷",source:"Daftar isi buku: hlm. 11",description:"Hukum I, II, dan III Newton; gaya gesek, gravitasi, dan gerak mobil pada tikungan jalan."},
 {title:"Momentum dan Impuls",short:"Momentum",page:14,icon:"↔",source:"Daftar isi buku: hlm. 14",description:"Impuls, momentum, kekekalan momentum, dan jenis-jenis tumbukan."},
 {title:"Dinamika Rotasi dan Keseimbangan Benda Tegar",short:"Rotasi",page:15,icon:"⟳",source:"Daftar isi buku: hlm. 15",description:"Momen gaya, momen inersia, dan Hukum II Newton untuk rotasi."},
 {title:"Fluida",short:"Fluida",page:18,icon:"≈",source:"Daftar isi buku: hlm. 18",description:"Tekanan hidrostatik, Pascal, Archimedes, Bernoulli, Venturi, dan gaya angkat pesawat."},
 {title:"Gelombang Bunyi",short:"Gelombang bunyi",page:21,icon:"∿",source:"Daftar isi buku: hlm. 21",description:"Besaran gelombang bunyi, efek Doppler, intensitas, dawai, dan pipa organa."},
 {title:"Gelombang Cahaya",short:"Cahaya",page:25,icon:"✧",source:"Daftar isi buku: hlm. 25",description:"Spektrum elektromagnetik, interferensi, difraksi, polarisasi, cermin, lensa, dan alat optik."},
 {title:"Kalor dan Perpindahannya",short:"Kalor",page:31,icon:"♨",source:"Daftar isi buku: hlm. 31",description:"Kalor jenis, perubahan wujud, pemuaian, Asas Black, dan perpindahan kalor."},
 {title:"Pemanasan Global",short:"Pemanasan global",page:34,icon:"☼",source:"Daftar isi buku: hlm. 34",description:"Efek rumah kaca, penyebab dan dampak pemanasan global, serta upaya penanggulangan."},
 {title:"Gas Ideal",short:"Gas ideal",page:37,icon:"◌",source:"Daftar isi buku: hlm. 37",description:"Persamaan gas ideal, hukum gas, teori kinetik, energi dalam, dan kelajuan partikel."},
 {title:"Termodinamika",short:"Termodinamika",page:40,icon:"⚙",source:"Daftar isi buku: hlm. 40",description:"Proses isobarik, isothermal, isokhorik, adiabatik, Hukum I–II, dan efisiensi mesin kalor."},
 {title:"Listrik Statis",short:"Listrik statis",page:44,icon:"ϟ",source:"Daftar isi buku: hlm. 44",description:"Muatan listrik, Hukum Coulomb, medan dan potensial listrik, serta kapasitor."},
 {title:"Rangkaian Arus Searah",short:"Arus searah",page:48,icon:"⌁",source:"Daftar isi buku: hlm. 48",description:"Hukum Ohm, rangkaian campuran seri-paralel, Hukum Kirchhoff, serta perhitungan energi dan daya listrik sesuai batasan resmi TKA."},
 {title:"Paket Pendalaman",short:"Paket pendalaman",page:52,icon:"▣",source:"Daftar isi buku: hlm. 52",type:"paket"},
 {title:"Paket Intensif",short:"Paket intensif",page:56,icon:"▣",source:"Daftar isi buku: hlm. 56",type:"paket"},
 {title:"Paket Simulasi 1",short:"Simulasi 1",page:61,icon:"◈",source:"Daftar isi buku: hlm. 61",type:"paket"},
 {title:"Paket Simulasi 2",short:"Simulasi 2",page:66,icon:"◈",source:"Daftar isi buku: hlm. 66",type:"paket"},
 {title:"Paket Prediksi 1",short:"Prediksi 1",page:71,icon:"◇",source:"Daftar isi buku: hlm. 71",type:"paket"},
 {title:"Paket Prediksi 2",short:"Prediksi 2",page:76,icon:"◇",source:"Daftar isi buku: hlm. 76",type:"paket"}
];
const lessonData={
 0:{
  title:"Pengukuran",
  lead:"Ringkasan materi berdasarkan bagian “Kompetensi dan Materi Inti”, topik Pengukuran pada buku (hlm. 3).",
  source:"Sumber: foto buku yang diunggah, bagian Pengukuran, hlm. 3. Parafrasa materi; bukan salinan penuh halaman.",
  content:`<p><b>Pengukuran</b> adalah kegiatan membandingkan besaran fisika suatu objek dengan satuan yang sesuai. Pengukuran memerlukan alat ukur, dan alat yang berbeda memiliki batas ukur serta ketelitian yang berbeda.</p>
  <h3>Alat ukur yang dibahas di buku</h3>
  <div class="source-table"><div class="source-row"><b>Mistar atau penggaris</b><span>Alat ukur panjang yang umum digunakan; skala terkecil 1 mm.</span></div><div class="source-row"><b>Jangka sorong</b><span>Untuk pengukuran panjang/diameter; bagian buku menyebut ketelitian 0,1 mm atau 0,01 cm.</span></div><div class="source-row"><b>Mikrometer sekrup</b><span>Alat ukur panjang yang lebih presisi, hingga 0,01 mm; digunakan untuk benda kecil seperti kawat atau kabel.</span></div><div class="source-row"><b>Neraca Ohaus tiga lengan</b><span>Memiliki lengan berskala ratusan gram, puluhan gram, dan satuan gram; materi buku menyebut ketelitian hingga 0,1 gram.</span></div></div>
  <h3>Strategi ketika mengerjakan soal pengukuran</h3><ul><li>Kenali alat ukur yang ditunjukkan pada gambar.</li><li>Perhatikan satuan dan ketelitian alat sebelum membaca skala.</li><li>Bandingkan hasil pembacaan pada gambar dengan angka yang ditulis di tabel.</li><li>Jika pengukuran berulang menghasilkan angka yang berbeda, periksa pembacaan tiap hasil terlebih dahulu; jangan langsung menyimpulkan bahwa semuanya benar atau langsung dirata-ratakan.</li></ul>
  <div class="formula-card">Ingat: 1 mm = 0,1 cm</div>
  <p class="source-inline">Rujukan di buku: Pengukuran, hlm. 3. Contoh pengukuran berulang berlanjut pada halaman berikutnya. Soal asli akan ditampilkan setelah gambar dan angka tabel pada halaman sumber selesai diverifikasi.</p>`,
  quiz:{label:"KUIS PEMAHAMAN · PENGUKURAN",text:"Menurut materi buku, alat ukur yang memiliki ketelitian hingga 0,01 mm dan digunakan untuk mengukur benda kecil seperti kawat atau kabel adalah ...",context:"Ini kuis pemahaman yang disusun dari materi buku, bukan soal asli TKA. Pilih satu jawaban.",choices:["Mistar atau penggaris","Jangka sorong","Mikrometer sekrup","Neraca Ohaus tiga lengan"],answer:2,hints:["Cari alat ukur panjang yang paling presisi di antara alat-alat yang dibahas pada materi.","Mistar memiliki skala terkecil 1 mm; jangka sorong disebut memiliki ketelitian 0,1 mm atau 0,01 cm.","Materi mengaitkan ketelitian sampai 0,01 mm dengan alat yang cocok mengukur diameter kawat atau kabel kecil."]}
 },
 1:{
  title:"Gerak Lurus",
  lead:"Ringkasan berdasarkan bagian “Kompetensi dan Materi Inti”, topik Gerak Lurus pada buku (hlm. 6).",
  source:"Sumber: foto buku yang diunggah, bagian Gerak Lurus, hlm. 6. Rumus dan istilah mengikuti tabel pada foto; ringkasan ini dipersingkat untuk belajar.",
  content:`<p><b>Gerak lurus</b> adalah gerak benda dengan lintasan berupa garis lurus tanpa perubahan arah. Di dalam buku, rumus dikelompokkan menurut jenis geraknya.</p>
  <h3>1. Gerak Lurus Beraturan (GLB)</h3><p>Pada GLB, percepatan nol dan kecepatan konstan.</p><div class="formula-card">a = 0 &nbsp; · &nbsp; v konstan<br>s = v t</div>
  <h3>2. Gerak Lurus Berubah Beraturan (GLBB)</h3><p>Pada GLBB, percepatan konstan. Percepatan positif menunjukkan gerak dipercepat, sedangkan percepatan negatif menunjukkan gerak diperlambat sesuai pengelompokan pada tabel buku.</p><div class="formula-card">vₜ = v₀ + at<br>s = v₀t + ½ at²<br>vₜ² = v₀² + 2as</div>
  <h3>3. Gerak jatuh bebas</h3><p>Tabel buku menggunakan kecepatan awal nol (v₀ = 0) untuk gerak jatuh bebas.</p><div class="formula-card">vₜ = gt<br>h = ½ gt²<br>vₜ = √(2gh)<br>t = √(2h/g)</div>
  <h3>4. Gerak vertikal ke atas</h3><p>Di titik tertinggi, kecepatan sesaat bernilai nol.</p><div class="formula-card">vₜ = v₀ − gt<br>h = v₀t − ½ gt²<br>vₜ² = v₀² − 2gh<br>t maks = v₀/g</div>
  <h3>Langkah memilih rumus</h3><ul><li>Identifikasi jenis geraknya terlebih dahulu: GLB, GLBB, jatuh bebas, atau gerak vertikal ke atas.</li><li>Catat besaran yang diketahui dan yang ditanyakan beserta satuannya.</li><li>Pilih rumus dari kelompok gerak yang tepat; jangan mencampur rumus hanya karena variabelnya tampak mirip.</li><li>Untuk soal grafik, perhatikan sumbu, satuan, dan apakah garisnya konstan, naik, turun, atau melengkung.</li></ul>
  <p class="source-inline">Rujukan di buku: Gerak Lurus, hlm. 6. Soal dan grafik latihan pada halaman ini akan dipetakan terpisah dari ringkasan materi.</p>`,
  quiz:{label:"KUIS PEMAHAMAN · GERAK LURUS",text:"Menurut tabel materi buku, manakah ciri Gerak Lurus Beraturan (GLB)?",context:"Ini kuis pemahaman dari isi materi, bukan soal asli buku.",choices:["Percepatan nol dan kecepatan konstan","Percepatan selalu konstan dan tidak nol","Kecepatan awal selalu nol","Kecepatan selalu bertambah"],answer:0,hints:["Pilih kelompok gerak yang pada tabel bukunya dibedakan dari GLBB.","Perhatikan dua butir yang tercantum pada baris GLB.","Bandingkan dengan GLBB yang memiliki percepatan konstan."]}
 },
 2:{
  title:"Gerak Lengkung",
  lead:"Ringkasan materi berdasarkan tabel “Gerak Lengkung” pada foto buku halaman 8–9.",
  source:"Sumber: foto buku yang diunggah, topik Gerak Lengkung, hlm. 8–9. Rumus di bawah diringkas dari tabel pada foto; latihan contoh tidak disalin sebagai soal demo.",
  content:`<p>Bagian buku ini membahas <b>gerak parabola</b> dan <b>gerak melingkar beraturan</b>. Untuk gerak parabola, gerak pada sumbu horizontal dan vertikal dianalisis terpisah, sedangkan waktu gerak menjadi penghubung keduanya.</p>
  <h3>A. Gerak parabola</h3>
  <p>Komponen kecepatan awal diuraikan berdasarkan sudut elevasi α.</p>
  <div class="formula-card">vₓ = v₀ cos α<br>vᵧ = v₀ sin α − gt<br>x = v₀ cos α · t<br>y = v₀ sin α · t − ½gt²</div>
  <p>Kelajuan sesaat merupakan gabungan komponen kecepatan pada kedua sumbu, sedangkan arah kecepatan dapat ditentukan dari perbandingan kedua komponen.</p>
  <div class="formula-card">v = √(vₓ² + vᵧ²)<br>tan θ = vᵧ/vₓ</div>
  <p>Pada titik tertinggi, komponen kecepatan vertikal sama dengan nol. Buku merangkum hubungan tinggi maksimum, waktu ke titik tertinggi, waktu hingga titik terjauh, dan jangkauan sebagai berikut.</p>
  <div class="formula-card">h maks = v₀² sin² α / (2g)<br>t puncak = v₀ sin α / g<br>t total = 2v₀ sin α / g<br>jangkauan = v₀² sin 2α / g</div>
  <h3>B. Gerak melingkar beraturan</h3>
  <p>Pahami perbedaan antara periode T (waktu untuk satu putaran) dan frekuensi f (jumlah putaran per satuan waktu), lalu hubungkan dengan kecepatan linear dan kecepatan sudut.</p>
  <div class="formula-card">T = 1/f<br>v = 2πr/T = 2πrf<br>ω = 2π/T = 2πf<br>aₛ = v²/r = ω²r<br>Fₛ = mv²/r = mω²r</div>
  <h3>Hubungan dua roda</h3>
  <div class="source-table"><div class="source-row"><b>Seporos</b><span>Arah putar sama dan kecepatan sudut kedua roda sama.</span></div><div class="source-row"><b>Bersinggungan</b><span>Arah putar berlawanan; kelajuan linear pada titik singgung sama.</span></div><div class="source-row"><b>Dengan sabuk/rantai</b><span>Arah putar sama dan kelajuan linear pada keliling roda sama, jika sabuk tidak selip.</span></div></div>
  <h3>Strategi memilih persamaan</h3><ul><li>Jika lintasan melengkung akibat kecepatan awal membentuk sudut, pisahkan sumbu x dan y.</li><li>Untuk waktu di titik tertinggi, gunakan syarat komponen vertikal kecepatan nol.</li><li>Untuk dua roda, tentukan dahulu apakah keduanya seporos, bersinggungan, atau dihubungkan sabuk/rantai.</li><li>Gerak melingkar memerlukan jari-jari dan kecepatan sudut/linear yang konsisten satuannya.</li></ul>
  <p class="source-inline">Rujukan buku: Gerak Lengkung, hlm. 8–9. Ringkasan berdasarkan tabel rumus dan hubungan roda pada foto. Kuis adalah latihan pemahaman baru, bukan soal asli buku.</p>`,
  quiz:{label:"KUIS PEMAHAMAN · GERAK LENGKUNG",text:"Dua roda dihubungkan dengan sabuk yang tidak selip. Hubungan kelajuan linear pada keliling kedua roda adalah ...",context:"Kuis pemahaman berdasarkan bagian “Hubungan Roda-Roda” pada buku, hlm. 9; bukan soal asli TKA.",choices:["Kelajuan linear roda A selalu lebih besar.","Kelajuan linear kedua roda sama.","Kecepatan sudut kedua roda selalu sama.","Kedua roda berputar berlawanan arah."],answer:1,hints:["Lihat baris hubungan roda dengan sabuk atau rantai di tabel pada materi.","Sabuk membawa titik pada keliling kedua roda dengan kecepatan linear yang sama jika tidak terjadi selip.","Jangan menyamakan kelajuan linear dengan kecepatan sudut; keduanya berbeda besaran."]}
 },
 3:{
  title:"Hubungan Gaya dan Gerak (Hukum Newton)",
  lead:"Ringkasan materi dari halaman 11 buku dan lanjutan yang terlihat pada halaman 12–13.",
  source:"Sumber: foto buku yang diunggah, bab “Hubungan Gaya dan Gerak (Hukum Newton)”, hlm. 11–13. Rumus diringkas mengikuti isi tabel; detail gambar yang belum terbaca tidak direkonstruksi sebagai fakta.",
  content:`<p>Bab ini menghubungkan gaya yang bekerja pada benda dengan keadaan gerak benda. Tentukan lebih dahulu resultan gaya dan arah positif yang dipilih, kemudian terapkan hukum Newton yang sesuai.</p>
  <h3>1. Hukum I Newton</h3>
  <p>Jika resultan gaya pada suatu benda nol, benda mempertahankan keadaan diam atau bergerak lurus beraturan. Buku juga menyebutnya hukum kelembaman.</p>
  <div class="formula-card">ΣF = 0</div>
  <h3>2. Hukum II Newton</h3>
  <p>Percepatan benda bergantung pada resultan gaya dan massa benda. Untuk gerak pada sumbu yang dipilih, jumlahkan semua gaya dengan tanda sesuai arahnya.</p>
  <div class="formula-card">ΣF = ma</div>
  <p>Jika gaya membentuk sudut α terhadap arah gerak, gunakan komponen gaya pada arah tersebut. Bentuk yang ditampilkan buku untuk komponen sejajar adalah:</p>
  <div class="formula-card">F cos α = ma</div>
  <h3>3. Hukum III Newton</h3>
  <p>Gaya interaksi muncul berpasangan pada dua benda berbeda. Besarnya sama, arahnya berlawanan, dan gaya-gaya tersebut tidak saling menghilangkan pada satu benda yang sama.</p>
  <div class="formula-card">F<sub>AB</sub> = −F<sub>BA</sub></div>
  <h3>4. Gaya gesek</h3>
  <p>Gaya gesek bekerja sejajar permukaan kontak dan melawan kecenderungan atau arah gerak relatif. Bedakan koefisien gesek statis dan kinetis serta gunakan gaya normal yang sesuai.</p>
  <div class="formula-card">fₛ ≤ μₛ N<br>fₖ = μₖ N</div>
  <h3>5. Gaya gravitasi</h3>
  <p>Gaya gravitasi antara dua massa berbanding lurus dengan hasil kali massa dan berbanding terbalik dengan kuadrat jaraknya. Percepatan gravitasi akibat massa M mengikuti rumus pada halaman buku.</p>
  <div class="formula-card">F<sub>G</sub> = G m₁m₂/r²<br>g = GM/r²</div>
  <h3>6. Gerak mobil di tikungan</h3>
  <p>Buku membedakan tikungan yang miring dan licin dari jalan datar yang kasar. Tentukan kondisi lintasan sebelum memilih rumus kelajuan maksimum.</p>
  <div class="formula-card">Tikungan miring dan licin:<br>v maks = √(r g tan θ)<br><br>Jalan datar dan kasar:<br>v maks = √(μₛ g r)</div>
  <h3>Strategi pengerjaan</h3>
  <ul><li>Gambar diagram benda bebas dan tandai semua gaya yang bekerja pada benda.</li><li>Pilih sumbu sejajar dan tegak lurus bidang jika bendanya berada pada bidang miring.</li><li>Tulis persamaan resultan gaya untuk setiap benda secara terpisah.</li><li>Untuk sistem katrol, perhatikan hubungan percepatan akibat tali yang sama; jangan otomatis menganggap semua percepatan sama.</li><li>Periksa satuan, arah gaya gesek, dan apakah benda diam, bergerak dengan kecepatan konstan, atau mengalami percepatan.</li></ul>
  <p class="source-inline">Rujukan buku: “Hubungan Gaya dan Gerak (Hukum Newton)”, hlm. 11–13. Materi ini berupa ringkasan; latihan dari halaman 12–13 tersedia terpisah pada fitur Try Out & Drilling.</p>`,
  quiz:{label:"KUIS PEMAHAMAN · HUKUM NEWTON",text:"Sebuah benda bergerak lurus beraturan. Menurut hukum Newton, resultan gaya pada benda tersebut adalah ...",context:"Kuis pemahaman berdasarkan uraian Hukum I Newton di halaman 11; bukan soal asli buku.",choices:["Sama dengan berat benda","Sama dengan gaya normal","Nol","Selalu searah kecepatan","Selalu berlawanan arah kecepatan"],answer:2,hints:["Gerak lurus beraturan berarti kecepatan tidak berubah.","Gunakan Hukum I Newton pada bagian materi, lalu ingat apa yang terjadi ketika benda mempertahankan geraknya.","Tanyakan apakah ada resultan gaya yang diperlukan untuk menjaga kecepatan tetap."]}
 },
  4:{
   title:"Momentum dan Impuls",
   lead:"Ringkasan dari halaman 14–15 buku: impuls, momentum, kekekalan momentum, dan jenis tumbukan.",
   source:"Sumber: foto buku yang diunggah, bab Momentum dan Impuls, hlm. 14–15. Rumus diringkas dari kotak rumus buku; contoh soal asli tersedia terpisah pada Try Out & Drilling.",
   content:`<p>Momentum menggambarkan gerak benda berdasarkan massa dan kecepatannya. Impuls berkaitan dengan gaya yang bekerja selama selang waktu dan sama dengan perubahan momentum.</p>
   <h3>1. Impuls</h3><div class="formula-card">I = F Δt</div><p>Untuk gaya konstan, impuls adalah hasil kali gaya dan lama gaya bekerja. Satuan impuls adalah N·s.</p>
   <h3>2. Momentum</h3><div class="formula-card">p = mv</div><p>Momentum merupakan besaran vektor. Karena itu arah kecepatan harus dituliskan dengan tanda positif atau negatif sesuai arah acuan.</p>
   <h3>3. Hubungan impuls dan momentum</h3><div class="formula-card">I = Δp = p₁ − p₀<br>I = m(v₁ − v₀)</div><p>Jika perubahan momentumnya sama, memperbesar selang waktu tumbukan akan memperkecil gaya rata-rata. Inilah prinsip yang dijelaskan pada contoh penjaga gawang saat menangkap bola: tangan ditarik ke belakang untuk memperpanjang waktu kontak.</p>
   <h3>4. Hukum kekekalan momentum</h3><div class="formula-card">p₁ + p₂ = p₁′ + p₂′<br>m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′</div><p>Untuk sistem yang resultan gaya luarnya dapat diabaikan selama tumbukan, jumlah momentum sebelum dan sesudah tumbukan tetap sama.</p>
   <h3>5. Jenis-jenis tumbukan</h3><div class="source-table"><div class="source-row"><b>Lenting sempurna</b><span>Koefisien restitusi e = 1.</span></div><div class="source-row"><b>Tidak lenting sama sekali</b><span>Koefisien restitusi e = 0; kedua benda memiliki kecepatan akhir yang sama.</span></div><div class="source-row"><b>Lenting sebagian</b><span>Koefisien restitusi berada di antara 0 dan 1.</span></div></div>
   <p>Koefisien restitusi menghubungkan kecepatan relatif setelah dan sebelum tumbukan; perhatikan tanda arah pada setiap kecepatan.</p>
   <div class="formula-card">e = −(v₁′ − v₂′)/(v₁ − v₂)</div>
   <h3>Strategi soal tumbukan</h3><ul><li>Tentukan arah positif dan tulis tanda setiap kecepatan.</li><li>Catat massa serta kecepatan sebelum dan/atau sesudah tumbukan.</li><li>Gunakan kekekalan momentum untuk sistem tertutup selama tumbukan.</li><li>Jika dua benda bergerak bersama sesudah tumbukan, kecepatan akhirnya sama.</li><li>Jangan menjumlahkan kelajuan tanpa tanda arah, dan jangan menyamakan momentum dengan energi kinetik.</li></ul>
   <p class="source-inline">Rujukan buku: Momentum dan Impuls, hlm. 14–15. Kuis adalah latihan pemahaman, bukan salinan soal TKA dari buku.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · MOMENTUM",text:"Penjaga gawang menangkap bola yang bergerak cepat dengan menarik tangannya sedikit ke belakang. Tujuan utama tindakan itu adalah ...",context:"Berdasarkan contoh pada halaman 14; ini kuis pemahaman, bukan soal asli buku.",choices:["Memperbesar momentum bola","Memperpanjang waktu tumbukan sehingga gaya rata-rata lebih kecil","Memperbesar kecepatan bola","Menghilangkan kekekalan momentum","Memperkecil massa bola"],answer:1,hints:["Gunakan hubungan impuls dengan perubahan momentum dan selang waktu.","Perubahan momentum ditentukan oleh keadaan bola sebelum dan sesudah ditangkap.","Jika perubahan momentum sama tetapi waktu tumbukan diperbesar, bagaimana gaya rata-ratanya berubah?"]}
  },
  5:{
   title:"Dinamika Rotasi dan Keseimbangan Benda Tegar",
   lead:"Ringkasan dari halaman 15–17 buku: momen gaya, momen inersia, dan dinamika rotasi.",
   source:"Sumber: foto buku yang diunggah, topik Dinamika Rotasi dan Keseimbangan Benda Tegar, hlm. 15–17.",
   content:`<p>Dinamika rotasi membahas pengaruh momen gaya terhadap gerak putar benda tegar. Besaran sudut berperan seperti besaran linear dalam Hukum II Newton.</p>
   <h3>1. Momen gaya atau torsi (τ)</h3><p>Momen gaya adalah hasil kali gaya dengan lengan momen, yaitu jarak tegak lurus dari poros ke garis kerja gaya.</p><div class="formula-card">τ = F ℓ</div><p>Jika gaya membentuk sudut terhadap lengan, gunakan komponen yang tegak lurus lengan gaya. Satuan torsi adalah N·m.</p>
   <h3>2. Momen inersia</h3><p>Momen inersia menunjukkan kecenderungan benda mempertahankan keadaan rotasinya. Besarnya dipengaruhi massa dan jarak massa dari poros.</p><div class="formula-card">I = Σ mr²</div><p>Untuk benda tegar, buku menuliskan bentuk umum:</p><div class="formula-card">I = k m r²</div><p>Nilai k bergantung pada bentuk benda dan letak sumbu rotasi. Karena itu, gunakan rumus bentuk benda yang sesuai, bukan sekadar massa total.</p>
   <h3>3. Hukum II Newton untuk rotasi</h3><div class="formula-card">Στ = I α</div><p>Resultan torsi menyebabkan percepatan sudut α. Pilih arah rotasi positif dengan konsisten, lalu jumlahkan semua torsi berdasarkan arah putarannya.</p>
   <h3>4. Menghubungkan rotasi dan gerak menggelinding</h3><p>Pada benda menggelinding tanpa slip, gerak pusat massa berhubungan dengan gerak putar melalui hubungan antara kelajuan linear, jari-jari, dan kecepatan sudut. Waktu tempuh benda pada bidang miring juga dipengaruhi distribusi massa melalui momen inersia.</p><div class="formula-card">v = ωr<br>a = αr  <span style="font-size:11px">(menggelinding tanpa slip)</span></div>
   <h3>Strategi soal</h3><ul><li>Tentukan sumbu atau poros rotasi sebelum menghitung momen inersia.</li><li>Ukur jarak setiap massa ke poros, bukan hanya koordinatnya dari titik asal.</li><li>Hitung torsi tiap gaya dengan lengan momen tegak lurusnya.</li><li>Untuk benda menggelinding, bedakan kelajuan linear pusat massa dan kecepatan sudut.</li><li>Untuk sistem katrol dengan massa katrol, sertakan torsi dan momen inersia katrol jika model pada soal memintanya.</li></ul>
   <p class="source-inline">Rujukan buku: Dinamika Rotasi dan Keseimbangan Benda Tegar, hlm. 15–17. Formula mengikuti kotak materi yang terbaca pada foto.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · DINAMIKA ROTASI",text:"Untuk suatu benda tegar, besaran yang menyatakan kecenderungan benda mempertahankan keadaan rotasinya adalah ...",context:"Berdasarkan materi momen inersia halaman 15; bukan soal asli buku.",choices:["Impuls","Momen inersia","Tekanan","Momentum linear","Daya"],answer:1,hints:["Lihat bagian “Momen Inersia” pada materi.","Rumus dalam buku menggunakan jumlah m r² terhadap poros.","Pilih besaran yang nilainya bergantung pada massa dan jaraknya dari sumbu rotasi."]}
  },
  6:{
   title:"Fluida",
   lead:"Ringkasan dari halaman 18–20 buku: fluida statis, prinsip Pascal, Archimedes, dan Bernoulli.",
   source:"Sumber: foto buku yang diunggah, bab Fluida, hlm. 18–20. Rumus disarikan dari kotak materi yang terbaca; rincian diagram yang tak terbaca tidak ditambahkan.",
   content:`<p>Fluida mencakup zat cair dan gas. Materi dibagi menjadi fluida statis (fluida diam) dan fluida dinamis (fluida mengalir).</p>
   <h3>A. Fluida statis</h3>
   <h3>1. Tekanan hidrostatik</h3><p>Tekanan akibat kedalaman fluida meningkat seiring kedalaman, massa jenis fluida, dan percepatan gravitasi.</p><div class="formula-card">P = ρgh</div>
   <h3>2. Hukum Pascal</h3><p>Tekanan yang diberikan pada fluida dalam ruang tertutup diteruskan sama besar ke segala arah. Untuk dua pengisap hidrolik:</p><div class="formula-card">F₁/A₁ = F₂/A₂<br>F₂ = (A₂/A₁) F₁</div>
   <h3>3. Hukum Archimedes</h3><p>Benda yang tercelup di dalam fluida mengalami gaya ke atas sebesar berat fluida yang dipindahkan.</p><div class="formula-card">Fₐ = ρfluida g Vtercelup</div><p>Bandingkan massa jenis rata-rata benda dan fluida untuk menentukan apakah benda mengapung, melayang, atau tenggelam.</p>
   <h3>B. Fluida dinamis</h3>
   <h3>4. Asas Bernoulli</h3><p>Sepanjang garis arus pada aliran ideal, jumlah tekanan, energi potensial per satuan volume, dan energi kinetik per satuan volume bernilai konstan.</p><div class="formula-card">P₁ + ρgh₁ + ½ρv₁² = P₂ + ρgh₂ + ½ρv₂²</div>
   <h3>5. Gaya angkat pesawat terbang</h3><p>Perbedaan kecepatan aliran udara di atas dan bawah sayap menghasilkan perbedaan tekanan dan gaya angkat.</p><div class="formula-card">F₁ − F₂ = ½ρ(v₂² − v₁²)A</div><p>Pada persamaan ini, v₁ dan v₂ mengikuti posisi aliran yang diberi label pada soal. Selalu periksa apakah label menunjukkan bagian atas atau bawah sayap.</p>
   <h3>6. Venturi dan pipa Pitot</h3><p>Venturimeter memanfaatkan beda tekanan pada dua penampang untuk menentukan laju aliran. Pipa Pitot menggunakan beda tekanan untuk mengukur kelajuan fluida. Gunakan luas penampang dan tinggi kolom fluida sebagaimana ditunjukkan pada diagram soal.</p>
   <h3>Strategi mengerjakan soal fluida</h3><ul><li>Identifikasi apakah soal fluida statis atau mengalir.</li><li>Untuk tekanan hidrostatik, ukur kedalaman dari permukaan fluida, bukan dari dasar wadah.</li><li>Untuk prinsip Pascal, gunakan tekanan yang sama dan satuan luas yang seragam.</li><li>Untuk gaya Archimedes, volume pada rumus adalah volume fluida yang dipindahkan/volume benda yang tercelup.</li><li>Untuk Bernoulli, pastikan label penampang, ketinggian, kecepatan, dan tekanan tidak tertukar.</li></ul>
   <p class="source-inline">Rujukan buku: Fluida, hlm. 18–20. Materi ini merangkum kotak rumus dan penjelasan pada foto yang diunggah.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · FLUIDA",text:"Tekanan hidrostatik di dalam fluida diam ditentukan oleh ...",context:"Berdasarkan rumus halaman 18; ini kuis pemahaman, bukan soal asli buku.",choices:["Massa benda saja","Kedalaman, massa jenis fluida, dan percepatan gravitasi","Luas permukaan wadah saja","Kecepatan aliran dan luas penampang","Bentuk dasar wadah saja"],answer:1,hints:["Lihat persamaan P = ρgh di materi.","Identifikasi arti simbol ρ, g, dan h.","Pilih opsi yang menyebut tiga besaran pada persamaan tersebut."]}
  },
  7:{
   title:"Gelombang Bunyi",
   lead:"Ringkasan dari halaman 21–24 buku: besaran gelombang, efek Doppler, intensitas bunyi, dawai, pipa organa, dan penerapan ultrasonografi.",
   source:"Sumber: foto buku yang diunggah, bab Gelombang Bunyi, hlm. 21–24. Rumus diringkas dari kotak dan contoh yang terbaca pada foto.",
   content:`<p>Gelombang bunyi merupakan gelombang mekanik yang memerlukan medium. Di buku, materi meliputi besaran gelombang, efek Doppler, intensitas bunyi, sumber bunyi pada dawai, dan resonansi kolom udara pipa organa.</p>
   <h3>1. Periode, frekuensi, panjang gelombang, dan cepat rambat</h3><div class="formula-card">T = t/n = 1/f<br>f = n/t = 1/T<br>v = λf = λ/T</div><p>Periode adalah waktu yang diperlukan untuk satu gelombang, frekuensi adalah banyaknya gelombang per sekon, sedangkan λ adalah panjang gelombang.</p>
   <h3>2. Efek Doppler</h3><p>Frekuensi yang didengar berubah saat sumber bunyi dan pendengar bergerak relatif. Untuk sumber yang mendekati pendengar diam, frekuensi terdengar lebih tinggi; saat sumber menjauh, frekuensi terdengar lebih rendah.</p><div class="formula-card">fₚ = (v ± vₚ)/(v ∓ vₛ) · fₛ</div><p>Gunakan tanda sesuai arah gerak sumber dan pendengar: pendekatan menaikkan frekuensi teramati dan gerak menjauh menurunkannya. Buku juga mencatat pengaruh arah angin melalui vₐ; jika angin diberikan, masukkan ke kecepatan rambat efektif sesuai konvensi di soal.</p>
   <h3>3. Intensitas dan taraf intensitas bunyi</h3><div class="formula-card">I = P/A = E/(At)<br>TI = 10 log₁₀(I/I₀)<br>(TI)ₙ = TI + 10 log₁₀ n</div><p>I adalah intensitas, P daya gelombang, A luas bidang, E energi bunyi, dan I₀ intensitas ambang pendengaran. Untuk n sumber identik, gunakan penambahan taraf intensitas logaritmik seperti pada kotak buku.</p>
   <h3>4. Sumber bunyi dawai</h3><p>Frekuensi dawai dipengaruhi tegangan, panjang, dan massa per satuan panjang.</p><div class="formula-card">v = √(F/μ)<br>fₙ = nv/(2ℓ)</div><p>Di sini F adalah gaya tegangan dawai, μ massa per satuan panjang, ℓ panjang dawai, dan n menunjukkan harmonik.</p>
   <h3>5. Pipa organa terbuka</h3><div class="formula-card">ℓₙ = (n+1)λₙ/2<br>λₙ = 2ℓ/(n+1)<br>fₙ = (n+1)v/(2ℓ)<br>f₀:f₁:f₂:… = 1:2:3:…</div>
   <h3>6. Pipa organa tertutup</h3><p>Salah satu ujung kolom udara berada dalam posisi tertutup. Harmonik yang muncul adalah harmonik ganjil.</p><div class="formula-card">ℓₙ = (2n+1)λₙ/4<br>λₙ = 4ℓ/(2n+1)<br>fₙ = (2n+1)v/(4ℓ)<br>f₀:f₁:f₂:… = 1:3:5:…</div>
   <h3>7. Penerapan ultrasonografi (USG)</h3><p>Menurut artikel pada halaman 24, proses pembentukan citra USG melibatkan tiga tahap: pemancaran gelombang ultrasonik ke jaringan tubuh, penerimaan gelombang pantul oleh transduser, dan interpretasi sinyal. Sebagian gelombang dipantulkan dengan besar yang berbeda oleh jaringan tubuh; pantulan diterima kembali oleh transduser, diubah menjadi sinyal listrik, lalu diproses komputer menjadi gambar.</p><p>Sifat gelombang yang dimanfaatkan pada penerapan ini adalah pemantulan.</p>
   <h3>8. Taraf intensitas bunyi dan jarak</h3><p>Contoh buku halaman 24 membandingkan taraf intensitas bunyi pada dua jarak dari sumber. Untuk sumber yang sama, intensitas berbanding terbalik dengan kuadrat jarak.</p><div class="formula-card">I₁/I₂ = (r₂/r₁)²<br>TI₂ = TI₁ − 10 log₁₀(I₁/I₂)</div><p>Karena taraf intensitas menggunakan logaritma, perubahan jarak tidak boleh diperlakukan sebagai pengurangan desibel yang linear tanpa menghitung rasio intensitas.</p>
   <h3>9. Resonansi kolom udara</h3><p>Pada contoh tabung resonansi di halaman 24, garpu tala berfrekuensi 400 Hz digunakan pada tabung sepanjang 80 cm. Tinggi air saat bunyi keras pertama tercatat 62 cm, sedangkan resonansi berikutnya pada 17 cm dari dasar. Buku menghitung panjang kolom udara sebagai ℓ₁ = 18 cm dan ℓ₂ = 63 cm; selisih dua resonansi berurutan adalah setengah panjang gelombang.</p><div class="formula-card">ℓ₂ − ℓ₁ = ½λ<br>v = λf</div><p>Ikuti pengukuran panjang kolom udara yang ditunjukkan gambar dan gunakan selisih panjang untuk mendapatkan panjang gelombang.</p>
   <h3>Strategi pengerjaan</h3><ul><li>Ubah semua besaran ke satuan yang konsisten sebelum substitusi.</li><li>Efek Doppler: tentukan siapa yang bergerak dan apakah mereka saling mendekat atau menjauh.</li><li>Taraf intensitas memakai logaritma; jangan menjumlahkan desibel secara langsung.</li><li>Identifikasi pipa terbuka atau tertutup sebelum memilih rumus harmonik.</li><li>Untuk dawai, tentukan terlebih dahulu massa per satuan panjang μ.</li></ul>
   <p class="source-inline">Rujukan buku: Gelombang Bunyi, hlm. 21–24. Rumus dan contoh ringkas mengikuti bagian materi yang terbaca pada foto; latihan contoh dimasukkan terpisah sebagai drilling.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · GELOMBANG BUNYI",text:"Pada efek Doppler, jika sumber bunyi mendekati pendengar yang diam, frekuensi yang terdengar dibandingkan frekuensi sumber akan ...",context:"Berdasarkan uraian efek Doppler pada halaman 22–23; bukan soal asli buku.",choices:["Lebih rendah","Tetap sama untuk semua kecepatan","Lebih tinggi","Menjadi nol","Tidak dapat dibandingkan"],answer:2,hints:["Perhatikan jarak antarfront gelombang di depan sumber yang bergerak.","Gelombang di depan sumber yang mendekati pendengar menjadi lebih rapat.","Frekuensi yang lebih tinggi berarti jumlah gelombang yang diterima setiap sekon meningkat."]}
  },
  8:{
   title:"Gelombang Cahaya",
   lead:"Ringkasan dari halaman 25–30 buku: spektrum elektromagnetik, interferensi, difraksi, polarisasi, cermin, lensa, alat optik, dan pembiasan.",
   source:"Sumber: foto buku yang diunggah, bab Gelombang Cahaya, hlm. 25–30. Rumus diringkas dari kotak materi yang terbaca; detail gambar yang tidak jelas tidak direkonstruksi.",
   content:`<p>Materi Gelombang Cahaya membahas gelombang elektromagnetik, sifat gelombang cahaya, dan penerapannya pada cermin, lensa, serta alat optik. Susunan berikut mengikuti urutan topik pada halaman 25–29 buku.</p>
   <h3>1. Spektrum gelombang elektromagnetik</h3>
   <p>Urutan spektrum dari frekuensi lebih rendah ke lebih tinggi adalah gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, dan sinar gamma. Semakin tinggi frekuensi, semakin pendek panjang gelombangnya.</p>
   <div class="source-table"><div class="source-row"><b>Radio dan televisi</b><span>Komunikasi jarak jauh dan radio komersial.</span></div><div class="source-row"><b>Gelombang mikro</b><span>Radar dan microwave oven.</span></div><div class="source-row"><b>Inframerah</b><span>Pemotretan permukaan bumi dan pencitraan termal.</span></div><div class="source-row"><b>Cahaya tampak</b><span>Mendukung penglihatan manusia; panjang gelombang pada tabel buku sekitar 4 × 10⁻⁷ sampai 7 × 10⁻⁷ m.</span></div><div class="source-row"><b>Ultraviolet</b><span>Digunakan pada beberapa aplikasi medis/sterilisasi; paparan perlu dikendalikan karena dapat merusak jaringan.</span></div><div class="source-row"><b>Sinar-X</b><span>Pencitraan struktur tulang dan bagian dalam tubuh.</span></div><div class="source-row"><b>Sinar gamma</b><span>Terapi radiasi untuk kanker dan sterilisasi alat kedokteran.</span></div></div>
   <h3>2. Persamaan gelombang elektromagnetik</h3>
   <div class="formula-card">c = λ f<br>c = 3 × 10⁸ m/s</div>
   <p>c adalah cepat rambat gelombang elektromagnetik di vakum, λ panjang gelombang, dan f frekuensi. Jika frekuensi bertambah, panjang gelombang berkurang untuk nilai c yang sama.</p>
   <h3>3. Interferensi cahaya pada celah ganda</h3>
   <p>Interferensi muncul karena superposisi dua gelombang cahaya. Pola terang terjadi saat beda lintasan memenuhi kondisi maksimum, sedangkan pola gelap muncul pada kondisi minimum.</p>
   <div class="formula-card">Terang (maksimum): d sin θ = mλ<br>Gelap (minimum): d sin θ = (m + ½)λ<br><br>Untuk sudut kecil: sin θ ≈ p/ℓ</div>
   <p>d adalah jarak antara dua celah, ℓ jarak celah ke layar, p jarak pita dari terang pusat, dan m orde pola sesuai konvensi pada soal. Gunakan satuan panjang yang sama untuk d, p, ℓ, dan λ.</p>
   <h3>4. Difraksi cahaya</h3>
   <p>Difraksi adalah penyebaran cahaya ketika melewati celah sempit atau susunan celah. Buku membedakan pola difraksi celah tunggal dan difraksi pada celah majemuk/kisi.</p>
   <div class="formula-card">Celah tunggal — pita gelap:<br>d sin θ ≈ mλ<br><br>Kisi — pita terang:<br>d sin θ = mλ<br>N = 1/d</div>
   <p>Pada kisi, N adalah kerapatan garis dan d jarak antarcelah. Untuk pita terang, nilai m menunjukkan orde maksimum. Periksa apakah soal menyebut pita gelap atau pita terang sebelum memilih rumus.</p>
   <h3>5. Polarisasi</h3>
   <p>Polarisasi membatasi arah getar gelombang cahaya. Pada materi ini, intensitas setelah cahaya melewati polarizer dan analyzer mengikuti hukum Malus.</p>
   <div class="formula-card">I = I₀ cos² θ</div>
   <p>I₀ adalah intensitas sebelum analyzer, I intensitas setelah melewati analyzer, dan θ sudut antara sumbu polarizer dan analyzer.</p>
   <h3>6. Cermin</h3>
   <div class="formula-card">1/f = 1/s + 1/s′<br>M = h′/h = |s′/s|</div>
   <p>s adalah jarak benda, s′ jarak bayangan, f jarak fokus, h tinggi benda, dan h′ tinggi bayangan. Ikuti perjanjian tanda pada buku: untuk cermin cekung, R dan f positif; bayangan nyata memiliki s′ positif sedangkan bayangan maya pada cermin cekung memiliki s′ negatif. Untuk cermin cembung, R dan f negatif dan bayangan maya bernilai s′ negatif.</p>
   <h3>7. Lensa</h3>
   <div class="formula-card">1/f = 1/s + 1/s′<br>M = |s′/s| = |h′/h|</div>
   <p>Persamaan jarak fokus berlaku untuk lensa cembung maupun cekung dengan perjanjian tanda. Pada materi buku, benda nyata di depan lensa memiliki s positif, sedangkan benda maya di belakang lensa memiliki s negatif. Periksa sifat bayangan dan jenis lensa sebelum menentukan tanda fokus serta jarak bayangan.</p>
   <h3>8. Alat optik: mikroskop dan teleskop</h3>
   <p>Pembesaran mikroskop merupakan hasil kali pembesaran objektif dan okuler. Untuk mata tidak berakomodasi, buku menggunakan pembesaran okuler yang terkait dengan titik dekat mata dan fokus okuler.</p>
   <div class="formula-card">M mikroskop = M objektif × M okuler<br>M okuler (tidak berakomodasi) = sₙ/fok</div>
   <p>Pada teleskop, pembesaran sudut untuk mata tidak berakomodasi bergantung pada perbandingan fokus objektif dan okuler.</p>
   <div class="formula-card">M teleskop = f objektif/f okuler</div>
   <h3>9. Pembiasan cahaya dan kedalaman semu</h3>
   <p>Pada halaman 30, contoh pemanah menunjukkan bahwa posisi ikan yang terlihat dari udara tidak sama dengan posisi sebenarnya di dalam air. Sinar dari ikan berubah arah ketika melewati batas air–udara, sehingga pengamat perlu memperhitungkan pembiasan saat memperkirakan posisi ikan.</p>
   <div class="formula-card">n₁ sin θ₁ = n₂ sin θ₂<br>n = c/v</div>
   <p>θ diukur terhadap garis normal. Untuk contoh air dan udara, buku menggunakan indeks bias air 4/3 dan indeks bias udara 1. Pemanah membidik lebih rendah dari posisi ikan yang tampak agar anak panah mengarah ke posisi sebenarnya. Semakin besar sudut pengamatan terhadap garis normal, semakin besar perbedaan posisi tampak dan posisi sebenarnya sebagaimana dibahas pada contoh.</p>
   <h3>Strategi memilih rumus</h3>
   <ul><li>Identifikasi apakah soal membahas spektrum elektromagnetik, interferensi, difraksi, atau pembentukan bayangan.</li><li>Untuk interferensi/difraksi, tulis apa yang diketahui: d, ℓ, p, λ, dan orde m.</li><li>Jangan tertukar antara pita terang dan pita gelap.</li><li>Untuk cermin/lensa, tulis tanda s, s′, dan f sesuai konvensi pada buku.</li><li>Untuk pembiasan, ukur sudut terhadap garis normal, bukan terhadap permukaan.</li><li>Untuk mikroskop dan teleskop, bedakan panjang fokus objektif dan okuler.</li></ul>
   <p class="source-inline">Rujukan buku: Gelombang Cahaya, hlm. 25–30. Ini ringkasan formula dan contoh penerapan dari foto sumber, bukan transkripsi penuh semua contoh soal.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · GELOMBANG CAHAYA",text:"Sebuah gelombang elektromagnetik merambat di vakum. Jika frekuensinya meningkat, bagaimana panjang gelombangnya menurut persamaan pada materi?",context:"Berdasarkan persamaan c = λf pada halaman 26; ini kuis pemahaman, bukan soal asli buku.",choices:["Panjang gelombang ikut meningkat","Panjang gelombang berkurang","Panjang gelombang tetap selalu sama","Gelombang berhenti merambat","Panjang gelombang menjadi nol untuk semua frekuensi"],answer:1,hints:["Gunakan c = λf dan ingat bahwa cepat rambat c konstan di vakum.","Susun ulang persamaan menjadi λ = c/f.","Bandingkan perubahan λ saat f menjadi lebih besar tetapi c tetap."]}
  },
  9:{
   title:"Kalor dan Perpindahannya",
   lead:"Ringkasan berdasarkan halaman 31–33 buku: kalor jenis, kalor laten, pemuaian, Asas Black, dan perpindahan kalor.",
   source:"Sumber: foto buku yang diunggah, bab Kalor dan Perpindahannya, hlm. 31–33. Rumus diambil dari kotak materi yang terbaca. Contoh soal lengkap dimasukkan terpisah ke Drilling per Bab.",
   content:`<p>Bab ini membahas bagaimana kalor memengaruhi suhu, perubahan wujud, ukuran benda, dan perpindahan energi termal antara benda.</p>
   <h3>1. Kalor untuk perubahan suhu</h3>
   <p>Kalor yang diperlukan untuk menaikkan atau menurunkan suhu zat sebanding dengan massa, kalor jenis, dan perubahan suhu.</p>
   <div class="formula-card">Q = mc ΔT<br>c = Q/(m ΔT)</div>
   <p>Q adalah kalor (J atau kal), m massa (kg atau g), c kalor jenis, dan ΔT = T akhir − T awal. Gunakan satuan yang konsisten: jika c dalam J/(kg·°C), massa harus kg dan Q dalam joule.</p>
   <h3>2. Kalor laten dan perubahan wujud</h3>
   <p>Ketika zat berubah wujud, kalor dapat diserap atau dilepas tanpa menaikkan atau menurunkan suhu selama proses perubahan wujud berlangsung.</p>
   <div class="formula-card">Q = mL</div>
   <p>L adalah kalor laten per satuan massa. Untuk es, pisahkan kalor untuk menaikkan suhu es ke titik lebur dari kalor untuk meleburkannya; jangan langsung menggunakan Q = mcΔT untuk seluruh proses.</p>
   <h3>3. Pemuaian zat padat</h3>
   <p>Pemanasan dapat meningkatkan panjang, luas, dan volume benda padat.</p>
   <div class="formula-card">Δℓ = αℓ₀ ΔT<br>ℓ = ℓ₀(1 + αΔT)</div>
   <p>α adalah koefisien muai panjang. Pemuaian luas menggunakan koefisien β, dan untuk bahan isotropik β ≈ 2α.</p>
   <div class="formula-card">ΔA = βA₀ ΔT<br>A = A₀(1 + βΔT)<br>β ≈ 2α</div>
   <p>Pemuaian volume memakai koefisien γ, dan untuk bahan isotropik γ ≈ 3α.</p>
   <div class="formula-card">ΔV = γV₀ ΔT<br>V = V₀(1 + γΔT)<br>γ ≈ 3α</div>
   <p>Contoh pada halaman 32: saat cincin logam dipanaskan, lubang pada cincin ikut membesar. Karena itu, bola yang sebelumnya tidak dapat melewati cincin dapat menjadi bisa melewatinya jika cincin dipanaskan.</p>
   <h3>4. Pemuaian zat cair</h3>
   <p>Pada zat cair, perubahan ukuran yang dipelajari pada buku adalah pemuaian volume.</p>
   <div class="formula-card">V = V₀(1 + γΔT)</div>
   <h3>5. Asas Black dan kalorimeter</h3>
   <p>Dalam sistem terisolasi, besar kalor yang dilepas benda bersuhu lebih tinggi sama dengan kalor yang diterima benda bersuhu lebih rendah.</p>
   <div class="formula-card">Q lepas = Q terima<br>Q = mcΔT = CΔT</div>
   <p>C adalah kapasitas kalor. Untuk campuran es dan air, periksa setiap tahap: memanaskan es hingga 0°C, meleburkan es, kemudian memanaskan air lelehan bila masih ada kalor tersisa. Jangan menganggap semua es pasti mencair sebelum perhitungan dilakukan.</p>
   <h3>6. Kurva pemanasan atau pendinginan</h3>
   <ul><li>Pada bagian miring kurva, suhu berubah dan gunakan Q = mcΔT.</li><li>Pada bagian mendatar, zat mengalami perubahan wujud pada suhu tetap dan gunakan Q = mL.</li><li>Jumlahkan kalor setiap tahap sesuai arah proses—diserap atau dilepas.</li></ul>
   <h3>7. Perpindahan kalor</h3>
   <div class="source-table"><div class="source-row"><b>Konduksi (hantaran)</b><span>Kalor berpindah melalui bahan tanpa perpindahan makroskopis zat.</span></div><div class="source-row"><b>Konveksi (aliran)</b><span>Kalor berpindah bersama gerakan fluida.</span></div><div class="source-row"><b>Radiasi (pancaran)</b><span>Energi termal dipancarkan sebagai gelombang elektromagnetik.</span></div></div>
   <div class="formula-card">Konduksi: H = Q/t = kA ΔT/ℓ<br>Konveksi: H = Q/t = hA ΔT<br>Radiasi: H = Q/t = εσAT⁴</div>
   <p>H adalah laju perpindahan kalor, A luas permukaan, ℓ ketebalan bahan, k konduktivitas termal, h koefisien konveksi, ε emisivitas, dan σ konstanta Stefan–Boltzmann. Rumus radiasi pada soal dapat menggunakan suhu mutlak (kelvin) dan perbedaan radiasi bersih jika lingkungan ikut diperhitungkan.</p>
   <h3>Strategi mengerjakan soal kalor</h3>
   <ul><li>Tulis urutan proses: perubahan suhu, perubahan wujud, lalu perubahan suhu berikutnya jika ada.</li><li>Pastikan satuan kalor jenis, massa, kalor laten, dan Q seragam.</li><li>Pada Asas Black, samakan kalor yang dilepas dengan kalor yang diterima.</li><li>Pada pemuaian, gunakan koefisien yang sesuai untuk panjang, luas, atau volume.</li><li>Untuk perpindahan kalor, tentukan mekanismenya sebelum memilih rumus laju perpindahan.</li></ul>
   <p class="source-inline">Rujukan buku: Kalor dan Perpindahannya, hlm. 31–33. Ringkasan mengikuti rumus dan contoh yang terlihat pada foto. Bagian tabel/diagram yang belum terbaca sempurna tidak direkonstruksi sebagai angka pasti.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · KALOR",text:"Sebuah benda dipanaskan sehingga suhunya berubah tanpa mengalami perubahan wujud. Rumus kalor yang sesuai adalah ...",context:"Kuis pemahaman berdasarkan halaman 31; bukan salinan soal asli buku.",choices:["Q = mL","Q = mcΔT","Q = FΔt","Q = ρgh","Q = ½mv²"],answer:1,hints:["Bedakan kalor untuk perubahan suhu dan kalor laten untuk perubahan wujud.","Periksa bagian pertama materi, “Kalor untuk perubahan suhu”.","Pilih persamaan yang melibatkan massa, kalor jenis, dan perubahan suhu."]}
  },
  10:{
   title:"Pemanasan Global",
   lead:"Ringkasan berdasarkan halaman 34–37 buku: gejala, penyebab, dampak, dan penanggulangan pemanasan global.",
   source:"Sumber: foto buku yang diunggah, bab Pemanasan Global, hlm. 34–37. Uraian diringkas dari teks bacaan dan kunci pembahasan yang terbaca.",
   content:`<p><b>Pemanasan global</b> dijelaskan dalam buku sebagai peningkatan suhu rata-rata atmosfer dan permukaan Bumi. Materi menghubungkan fenomena ini dengan efek rumah kaca, perubahan iklim, dampak terhadap ekosistem, dan upaya penanggulangannya.</p>
   <h3>1. Efek rumah kaca</h3><p>Efek rumah kaca merupakan proses alami yang menahan sebagian panas di atmosfer sehingga suhu Bumi mendukung kehidupan. Buku menyebut gas rumah kaca seperti uap air, karbon dioksida (CO₂), ozon, NOₓ, dan CFC. Peningkatan konsentrasi gas-gas tersebut akibat aktivitas manusia dapat memperkuat efek rumah kaca secara berlebihan.</p>
   <h3>2. Penyebab pemanasan global</h3><ul><li>Penggunaan kendaraan berbahan bakar fosil dan pembakaran bahan bakar fosil.</li><li>Aktivitas industri serta pembakaran limbah.</li><li>Penebangan hutan tanpa reboisasi dan deforestasi.</li><li>Penggunaan bahan pendingin yang mengandung CFC, sebagaimana dicantumkan dalam materi buku.</li></ul>
   <p>Hutan berperan menyerap CO₂. Pengurangan tutupan hutan dan pembakaran bahan bakar fosil dapat meningkatkan konsentrasi gas rumah kaca di atmosfer.</p>
   <h3>3. Gejala dan dampak</h3><p>Contoh gejala dan dampak yang tercantum pada halaman 34–37 meliputi peningkatan suhu rata-rata Bumi, mencairnya es kutub dan kenaikan permukaan laut, perubahan pola cuaca atau iklim ekstrem, gangguan pertanian dan pangan, kebakaran hutan, gangguan ekosistem, serta peningkatan risiko penyakit yang berkaitan dengan perubahan iklim.</p>
   <h3>4. Penanggulangan</h3><ul><li>Reboisasi dan penghijauan untuk meningkatkan penyerapan CO₂.</li><li>Melestarikan hutan dan mencegah deforestasi; buku menyinggung REDD (Reducing Emissions from Deforestation and Forest Degradation).</li><li>Mengurangi penggunaan kendaraan pribadi dan memilih transportasi umum atau transportasi yang lebih ramah lingkungan.</li><li>Mengurangi penggunaan bahan bakar fosil dan beralih ke energi alternatif yang tidak menghasilkan gas rumah kaca dalam jumlah besar.</li><li>Mengurangi produksi limbah dan penggunaan CFC sesuai konteks yang dijelaskan buku.</li></ul>
   <h3>Strategi menjawab soal berbasis bacaan</h3><ul><li>Pisahkan efek rumah kaca alami dari peningkatan efek rumah kaca akibat aktivitas manusia.</li><li>Bedakan penyebab, dampak, dan upaya mitigasi.</li><li>Periksa setiap pernyataan Benar/Salah terhadap keterangan bacaan; jangan menganggap semua efek rumah kaca selalu negatif.</li><li>Pada soal pilihan ganda kompleks, pilih semua pernyataan yang didukung teks dan hindari menambah sebab yang tidak dibahas pada sumber.</li></ul>
   <p class="source-inline">Rujukan buku: Pemanasan Global, hlm. 34–37. Ini ringkasan dari teks dan contoh pada foto, bukan salinan penuh seluruh bacaan.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · PEMANASAN GLOBAL",text:"Berdasarkan bacaan buku, mengapa pelestarian hutan dapat membantu mengurangi dampak pemanasan global?",context:"Kuis pemahaman dari bacaan halaman 34–36, bukan soal asli yang disalin utuh.",choices:["Karena pohon menyerap karbon dioksida sehingga membantu menurunkan konsentrasinya di atmosfer.","Karena semua gas rumah kaca hanya dihasilkan oleh hutan.","Karena pemanasan global selalu disebabkan oleh hujan.","Karena penebangan hutan meningkatkan penyerapan CO₂.","Karena pohon menghentikan semua radiasi Matahari agar tidak mencapai Bumi."],answer:0,hints:["Cari hubungan antara tumbuhan, fotosintesis, dan CO₂ pada pembahasan halaman 34.","Buku mengaitkan penanaman pohon dan penghijauan dengan penyerapan CO₂.","Pilih alasan yang menyebut penurunan konsentrasi gas rumah kaca, bukan klaim mutlak."]}
  },
  11:{
   title:"Gas Ideal",
   lead:"Ringkasan berdasarkan halaman 37–39 buku: persamaan gas ideal, hukum-hukum gas, teori kinetik, energi dalam, dan kecepatan partikel.",
   source:"Sumber: foto buku yang diunggah, bab Gas Ideal, hlm. 37–39. Rumus mengikuti kotak materi pada foto yang terbaca.",
   content:`<p>Gas ideal adalah model gas yang menganggap partikel bergerak acak, ukuran/volume tiap partikel diabaikan, tidak ada gaya tarik-menarik antarmolekul, dan tumbukan antarpartikel maupun dengan dinding wadah bersifat lenting sempurna.</p>
   <h3>1. Persamaan gas ideal</h3><div class="formula-card">PV = nRT<br>PV = NkT</div><p>P adalah tekanan, V volume, n jumlah mol, R tetapan gas umum, N jumlah partikel, k tetapan Boltzmann, dan T suhu mutlak dalam kelvin.</p>
   <h3>2. Hukum Boyle (isotermal)</h3><p>Jika suhu dan jumlah gas tetap, tekanan berbanding terbalik dengan volume.</p><div class="formula-card">PV = konstan<br>P₁V₁ = P₂V₂</div>
   <h3>3. Hukum Charles</h3><p>Jika tekanan tetap, volume sebanding dengan suhu mutlak.</p><div class="formula-card">V/T = konstan<br>V₁/T₁ = V₂/T₂</div>
   <h3>4. Hukum Gay-Lussac</h3><p>Jika volume tetap, tekanan sebanding dengan suhu mutlak.</p><div class="formula-card">P/T = konstan<br>P₁/T₁ = P₂/T₂</div>
   <p>Untuk perbandingan keadaan gas dengan jumlah mol tetap, gunakan suhu dalam kelvin, bukan derajat Celsius. Bentuk umum yang menghubungkan P, V, dan T adalah P ∝ T/V.</p>
   <h3>5. Teori kinetik dan energi kinetik gas</h3><div class="formula-card">Eₖ = 3/2 NkT<br>Eₖ = 3/2 nRT</div><p>Dalam model pada buku, energi kinetik rata-rata/total partikel berkaitan dengan suhu mutlak. Untuk gas ideal, energi dalam bergantung pada energi kinetik partikel dan derajat kebebasan yang digunakan pada modelnya.</p>
   <h3>6. Energi dalam berdasarkan jenis gas</h3><div class="source-table"><div class="source-row"><b>Gas monoatomik</b><span>U = 3/2 NkT untuk derajat kebebasan f = 3.</span></div><div class="source-row"><b>Gas diatomik, suhu rendah</b><span>Pada pendekatan buku, f = 3 sehingga U = 3/2 NkT.</span></div><div class="source-row"><b>Gas diatomik, suhu sedang</b><span>Pada pendekatan buku, f = 5 sehingga U = 5/2 NkT.</span></div><div class="source-row"><b>Gas diatomik, suhu tinggi</b><span>Pada pendekatan buku, f = 7 sehingga U = 7/2 NkT.</span></div></div>
   <h3>7. Kelajuan efektif partikel gas</h3><div class="formula-card">vₑf = √(3kT/m)<br>vₑf = √(3RT/Mᵣ)</div><p>m adalah massa satu partikel dan Mᵣ massa molar sesuai satuan pada perhitungan. Pastikan massa partikel dan massa molar tidak tertukar.</p>
   <h3>Strategi soal gas ideal</h3><ul><li>Ubah suhu ke kelvin terlebih dahulu.</li><li>Identifikasi besaran yang tetap: suhu, tekanan, volume, atau jumlah mol.</li><li>Untuk perubahan keadaan, tulis persamaan awal dan akhir sebelum menyederhanakan rasio.</li><li>Gunakan persamaan PV = nRT untuk mencari P, V, n, atau T yang belum diketahui.</li><li>Untuk jumlah partikel, gunakan N = nNₐ; untuk kecepatan partikel, gunakan massa yang sesuai dengan rumus yang dipakai.</li></ul>
   <p class="source-inline">Rujukan buku: Gas Ideal, hlm. 37–39. Gas ideal adalah model teori seperti yang dijelaskan dalam sumber; ringkasan ini tidak menggantikan seluruh contoh dan tabel pada buku.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · GAS IDEAL",text:"Sejumlah gas ideal berada pada volume tetap. Jika suhu mutlaknya meningkat, bagaimana hubungan tekanan gas menurut hukum pada buku?",context:"Kuis pemahaman dari materi Hukum Gay-Lussac, bukan soal asli buku.",choices:["Tekanan berbanding lurus dengan suhu mutlak.","Tekanan berbanding terbalik dengan suhu mutlak.","Tekanan selalu tetap meskipun suhu berubah.","Tekanan hanya bergantung pada massa wadah.","Tekanan menjadi nol jika suhu meningkat."],answer:0,hints:["Perhatikan syarat volumenya tetap.","Lihat persamaan P/T = konstan pada bagian Hukum Gay-Lussac.","Bandingkan P₁/T₁ dengan P₂/T₂ menggunakan suhu dalam kelvin."]}
  },
  12:{
   title:"Termodinamika",
   lead:"Ringkasan berdasarkan halaman 40–43 buku: proses-proses gas, usaha pada diagram P–V, Hukum I dan II, serta mesin kalor.",
   source:"Sumber: foto buku yang diunggah, bab Termodinamika, hlm. 40–43. Konvensi usaha mengikuti rumus kotak pada foto buku.",
   content:`<p>Termodinamika membahas perubahan keadaan sistem akibat perpindahan dan transformasi energi. Perubahan sifat gas ditentukan oleh keadaan awal dan akhir serta proses yang dilalui.</p>
   <h3>1. Proses isobarik</h3><p>Tekanan tetap. Usaha gas ditentukan oleh tekanan dikalikan perubahan volume, dan pada diagram P–V usaha sama dengan luas daerah di bawah lintasan proses.</p><div class="formula-card">W = P(V₂ − V₁)</div><p>Pada ekspansi, gas melakukan usaha positif menurut konvensi pada buku. Pada pemampatan, usaha dari luar pada sistem memiliki tanda yang berlawanan.</p>
   <h3>2. Proses isotermal</h3><p>Suhu gas tetap. Untuk gas ideal, berlaku Hukum Boyle, sehingga tekanan dikali volume konstan. Energi dalam tidak berubah karena suhu tidak berubah.</p><div class="formula-card">P₁V₁ = P₂V₂<br>ΔU = 0<br>W = nRT ln(V₂/V₁)</div>
   <h3>3. Proses isokhorik</h3><p>Volume tetap sehingga tidak ada perubahan volume dan usaha yang dilakukan gas sama dengan nol.</p><div class="formula-card">V₁ = V₂<br>W = 0</div>
   <h3>4. Proses adiabatik</h3><p>Tidak ada kalor yang masuk ke maupun keluar dari sistem. Pada model ideal di buku, proses ini dapat terjadi jika sistem terisolasi secara termal atau proses terjadi sangat cepat.</p><div class="formula-card">Q = 0<br>W = (P₁V₁ − P₂V₂)/(γ − 1)</div><p>γ adalah rasio kapasitas kalor, γ = Cₚ/Cᵥ. Pada diagram P–V, kurva adiabatik digambarkan lebih curam daripada isotermal untuk keadaan pembanding yang sama.</p>
   <h3>5. Hukum I Termodinamika</h3><div class="formula-card">Q − W = ΔU<br>Q = ΔU + W</div><p>Q adalah kalor yang diterima sistem, W usaha yang dilakukan sistem, dan ΔU perubahan energi dalam. Selalu periksa konvensi tanda usaha yang digunakan soal.</p>
   <h3>6. Hukum II Termodinamika</h3><p>Buku menegaskan bahwa tidak mungkin membuat mesin yang seluruh kalor masuknya diubah menjadi usaha. Mesin kalor bekerja dengan menerima kalor dari reservoir bersuhu tinggi, melakukan usaha, lalu melepaskan sebagian kalor ke reservoir bersuhu rendah.</p>
   <h3>7. Mesin Carnot dan efisiensi</h3><div class="formula-card">W = Q₁(1 − T₂/T₁)<br>W = Q₁ − Q₂<br>η = W/Q₁ × 100%<br>η = (1 − T₂/T₁) × 100%</div><p>T₁ adalah suhu reservoir panas dan T₂ suhu reservoir dingin; kedua suhu harus dalam kelvin. Efisiensi meningkat jika perbandingan T₂/T₁ menurun.</p>
   <h3>8. Usaha dari diagram P–V</h3><p>Usaha gas sama dengan luas daerah di bawah kurva P–V. Untuk lintasan yang membentuk segitiga, luas dapat dihitung menggunakan setengah hasil kali perubahan volume dan perubahan tekanan. Untuk lintasan tertutup, usaha bersih mengikuti luas daerah yang dilingkupi lintasan dengan tanda sesuai arah siklus.</p>
   <div class="formula-card">W = luas daerah pada diagram P–V</div>
   <h3>Strategi soal</h3><ul><li>Identifikasi prosesnya dari besaran yang tetap sebelum memilih rumus.</li><li>Untuk usaha, periksa apakah volume bertambah, tetap, atau berkurang.</li><li>Untuk proses isotermal gas ideal, gunakan ΔU = 0.</li><li>Untuk proses adiabatik, gunakan Q = 0.</li><li>Untuk efisiensi mesin Carnot, konversikan suhu ke kelvin dan jangan menukar reservoir panas/dingin.</li></ul>
   <p class="source-inline">Rujukan buku: Termodinamika, hlm. 40–43. Rumus dan penjelasan diringkas dari foto sumber; grafik P–V dalam soal digital perlu dibaca sesuai deskripsi yang tercantum.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · TERMODINAMIKA",text:"Pada proses isotermal gas ideal, suhu sistem tetap. Menurut materi buku, perubahan energi dalam gas ideal adalah ...",context:"Kuis pemahaman berdasarkan halaman 41; bukan salinan soal asli buku.",choices:["Selalu positif","Selalu negatif","Nol","Sama dengan tekanan","Sama dengan volume"],answer:2,hints:["Energi dalam gas ideal pada materi ini bergantung pada suhu.","Pada proses isotermal, suhu tidak berubah.","Gunakan hubungan ΔU = 0 yang tercantum di kotak materi isotermal."]}
  },
  13:{
   title:"Listrik Statis",
   lead:"Ringkasan berdasarkan halaman 44–47 buku: muatan listrik, Hukum Coulomb, medan, potensial, energi potensial, dan kapasitor.",
   source:"Sumber: foto buku yang diunggah, bab Listrik Statis, hlm. 44–47. Rumus diringkas dari kotak materi yang tampak pada foto.",
   content:`<p>Listrik statis muncul karena ketidakseimbangan muatan listrik pada benda. Benda dapat mengalami kelebihan muatan positif atau negatif. Contoh dalam buku meliputi rambut yang berdiri, penggaris yang menarik kertas kecil setelah digosok, dan elektroskop.</p>
   <h3>1. Hukum Coulomb</h3><p>Besar gaya elektrostatik antara dua muatan titik sebanding dengan hasil kali besar muatan dan berbanding terbalik dengan kuadrat jaraknya.</p><div class="formula-card">F = k |q₁q₂|/r²<br>k = 9 × 10⁹ N·m²/C²</div><p>Muatan sejenis saling tolak-menolak, sedangkan muatan berlainan jenis saling tarik-menarik. Untuk banyak muatan, gunakan prinsip superposisi dan tentukan arah gaya dari setiap muatan secara terpisah.</p>
   <h3>2. Kuat medan listrik</h3><div class="formula-card">E = F/q<br>E = k|Q|/r²</div><p>Medan listrik adalah daerah di sekitar muatan yang masih dipengaruhi gaya listrik. Arah medan didefinisikan sebagai arah gaya pada muatan uji positif.</p>
   <h3>3. Potensial listrik dan energi potensial</h3><div class="formula-card">V = kQ/r<br>Eₚ = kq₁q₂/r</div><p>Potensial listrik merupakan energi potensial per satuan muatan uji. Perhatikan tanda muatan saat membahas energi potensial; persamaan untuk besar potensial atau besar gaya tidak selalu membawa tanda yang sama dengan pernyataan arah.</p>
   <h3>4. Kapasitor keping sejajar</h3><div class="formula-card">C = q/V<br>C = ε₀A/d<br>E = q/(ε₀A)<br>V = Ed = qd/(ε₀A)<br>Φ = EA cos θ = Σq/ε₀</div><p>C adalah kapasitansi, q muatan, V beda potensial, A luas keping, d jarak antarkeping, ε₀ permitivitas ruang hampa, dan Φ fluks listrik. Rumus medan serta fluks digunakan dengan asumsi geometri dan kondisi medan yang sesuai seperti pada ilustrasi buku.</p>
   <h3>5. Susunan kapasitor</h3><div class="source-table"><div class="source-row"><b>Seri</b><span>Muatan sama; beda potensial total merupakan jumlah beda potensial setiap kapasitor. 1/Cₛ = 1/C₁ + 1/C₂ + …</span></div><div class="source-row"><b>Paralel</b><span>Beda potensial sama; kapasitansi total adalah jumlah kapasitansi. Cₚ = C₁ + C₂ + …</span></div></div>
   <h3>6. Energi yang tersimpan dalam kapasitor</h3><div class="formula-card">W = ½ CV²</div>
   <h3>7. Elektroskop dan aplikasi elektrostatik</h3><p>Daun elektroskop membuka lebih lebar ketika muatan sejenis menambah gaya tolak di antara daun. Jika didekati benda bermuatan berbeda jenis, daun dapat merapat. Pada contoh mesin fotokopi di halaman 47, toner bermuatan dipindahkan menggunakan medan listrik; gaya pada muatan dapat diperkirakan melalui F = qE dan medan seragam E = V/d.</p>
   <h3>Strategi soal listrik statis</h3><ul><li>Ubah μC ke C dan cm/mm ke meter sebelum memasukkan ke rumus Coulomb.</li><li>Tentukan arah gaya setiap pasangan muatan sebelum menjumlahkan resultannya.</li><li>Bedakan medan E, potensial V, dan energi potensial Eₚ.</li><li>Untuk kapasitor, identifikasi susunan seri atau paralel sebelum mencari kapasitansi total.</li><li>Untuk fotokopi, gunakan medan listrik dari beda potensial dan jarak antarpelat, lalu hitung gaya pada toner dari besar muatannya.</li></ul>
   <p class="source-inline">Rujukan buku: Listrik Statis, hlm. 44–47. Bagian persamaan dan contoh yang terbaca telah diringkas; beberapa gambar latihan masih menggunakan deskripsi teks.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · LISTRIK STATIS",text:"Dua kapasitor identik dihubungkan paralel. Hubungan kapasitansi total menurut materi buku adalah ...",context:"Kuis pemahaman dari materi susunan kapasitor halaman 45; bukan salinan soal asli buku.",choices:["Kapasitansi total lebih kecil daripada setiap kapasitor.","Kapasitansi total sama dengan setengah satu kapasitor.","Kapasitansi total adalah jumlah kapasitansi keduanya.","Muatan kedua kapasitor harus selalu berbeda.","Beda potensial pada masing-masing kapasitor berbeda."],answer:2,hints:["Lihat kotak susunan kapasitor paralel.","Pada susunan paralel, beda potensial setiap kapasitor sama.","Gunakan Cₚ = C₁ + C₂ dan terapkan pada dua kapasitor identik."]}
  },
  14:{
   title:"Rangkaian Arus Searah",
   lead:"Ringkasan berdasarkan halaman 48–51 buku: Hukum Ohm, arus listrik, rangkaian seri/paralel, Hukum Kirchhoff, energi dan daya listrik.",
   source:"Sumber: foto buku yang diunggah, bab Rangkaian Arus Searah, hlm. 48–51. Pembatasan resmi Pusmendik: arus searah pada rangkaian campuran seri-paralel hingga perhitungan daya.",
   content:`<p>Rangkaian arus searah (DC) menganalisis hubungan antara arus, tegangan, dan hambatan dalam rangkaian. Untuk persiapan TKA, fokus pada rangkaian seri, paralel, campuran, Hukum Ohm, Hukum Kirchhoff, dan daya listrik.</p>
   <h3>1. Hukum Ohm</h3><div class="formula-card">I = ΔV/R<br>V = IR</div><p>Arus I sebanding dengan beda potensial V dan berbanding terbalik dengan hambatan R untuk penghantar ohmik pada kondisi tetap.</p>
   <h3>2. Arus listrik</h3><div class="formula-card">I = q/t</div><p>Arus adalah banyaknya muatan yang melintasi penampang konduktor per satuan waktu.</p>
   <h3>3. Hambatan seri</h3><div class="formula-card">Rₛ = R₁ + R₂ + R₃ + …<br>I = I₁ = I₂ = I₃<br>V = V₁ + V₂ + V₃</div><p>Arus pada semua resistor seri sama, sedangkan tegangan terbagi di antara resistor.</p>
   <h3>4. Hambatan paralel</h3><div class="formula-card">1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃ + …<br>V = V₁ = V₂ = V₃<br>I = I₁ + I₂ + I₃</div><p>Tegangan setiap cabang paralel sama, sedangkan arus total merupakan jumlah arus cabang. Untuk dua resistor paralel, Rₚ = R₁R₂/(R₁ + R₂).</p>
   <h3>5. Hukum I Kirchhoff</h3><div class="formula-card">ΣI masuk = ΣI keluar</div><p>Pada titik percabangan, jumlah arus yang masuk sama dengan jumlah arus yang keluar.</p>
   <h3>6. Hukum II Kirchhoff</h3><div class="formula-card">Σε + ΣIR = 0</div><p>Dalam loop tertutup, jumlah aljabar gaya gerak listrik dan penurunan tegangan sama dengan nol. Tetapkan arah loop, lalu gunakan tanda positif/negatif secara konsisten berdasarkan arah melintasi sumber dan resistor.</p>
   <h3>7. Energi dan daya listrik</h3><div class="formula-card">W = VIt<br>W = I²Rt<br>W = (V²/R)t<br>P = W/t = VI = I²R = V²/R</div><p>Energi listrik adalah daya dikalikan waktu. Gunakan rumus daya yang sesuai dengan besaran yang diketahui.</p>
   <h3>Strategi soal rangkaian campuran</h3><ul><li>Gambar ulang susunan rangkaian dan tandai titik simpul yang sama sebelum menyederhanakan.</li><li>Reduksi bagian seri atau paralel bertahap; jangan langsung menjumlahkan semua resistor dalam rangkaian campuran.</li><li>Setelah hambatan pengganti diperoleh, gunakan Hukum Ohm untuk arus total.</li><li>Gunakan aturan arus/tegangan Kirchhoff untuk menemukan nilai pada cabang atau titik tertentu.</li><li>Untuk lampu, bandingkan perubahan hambatan dan arus sebelum menyimpulkan daya. Daya dapat dihitung dengan P = I²R atau P = V²/R sesuai kondisi rangkaian.</li></ul>
   <p class="source-inline">Rujukan buku: Rangkaian Arus Searah, hlm. 48–51. Sesuai laman Pusmendik, ruang lingkup rangkaian DC dibatasi pada rangkaian campuran seri-paralel dan perhitungan daya.</p>`,
   quiz:{label:"KUIS PEMAHAMAN · RANGKAIAN DC",text:"Sebuah rangkaian memiliki resistor 6 Ω dan 3 Ω yang dipasang paralel. Gabungan itu diseri dengan resistor 4 Ω dan dihubungkan ke baterai ideal 12 V. Berapa arus total rangkaian?",context:"Soal prediksi latihan untuk Hukum Ohm dan rangkaian campuran; bukan soal buku atau soal resmi.",choices:["1 A","2 A","3 A","4 A","6 A"],answer:1,hints:["Cari hambatan pengganti resistor 6 Ω dan 3 Ω yang paralel.","Tambahkan hasilnya dengan resistor 4 Ω yang tersusun seri.","Gunakan I = V/R pada hambatan total rangkaian."]}
  }
};
const STORE="ruangFisikaJourney_v3";
const defaultState={unlocked:0,passed:[],read:[],active:0,attempts:0};
function loadState(){try{return {...defaultState,...JSON.parse(localStorage.getItem(STORE)||"{}")};}catch(e){return {...defaultState};}}
let state=loadState(),selected=0,answerSelected=null,hintIndex=0,attempted=false;
const $=id=>document.getElementById(id);
function save(){localStorage.setItem(STORE,JSON.stringify(state));renderProgress();}
function isUnlocked(i){return true;}
function hasLesson(i){return !!lessonData[i];}
function isPlayable(i){return isUnlocked(i)&&hasLesson(i);}
function statusText(i){if(state.passed.includes(i))return "LULUS";if(!hasLesson(i))return "MATERI DISIAPKAN";if(isUnlocked(i))return i===0?"BERIKUTNYA":"TERSEDIA";return "TERKUNCI";}
function renderMap(){
 const map=$("journeyMap");map.style.height=Math.max(850,levels.length*112+115)+"px";map.style.minHeight=map.style.height;
 $("levelNodes").innerHTML=levels.map((l,i)=>{const ready=hasLesson(i),done=state.passed.includes(i),pending=!ready;return `<button class="level-node node-${i} ${pending?"pending":""} ${i===selected?"active":""}" style="top:${34+i*112}px;left:${i%2===0?"31%":"68%"}" data-level="${i}" aria-label="${l.title}">
 <span class="node-platform"><span>${done?"✓":pending?"◌":l.icon}</span></span><span class="node-title">${String(i+1).padStart(2,"0")} · ${l.title}</span><span class="node-state">${done?"SELESAI":pending?"MATERI DISIAPKAN":i===selected?"DIPILIH":"TERSEDIA"}</span></button>`;}).join("");
 document.querySelectorAll(".level-node").forEach(b=>b.addEventListener("click",()=>{const i=Number(b.dataset.level);if(!isUnlocked(i))return;selected=i;renderMap();renderPreview();}));
 renderPreview();
}
function renderPreview(){
 const l=levels[selected],locked=!isUnlocked(selected),ready=hasLesson(selected),done=state.passed.includes(selected);
 $("previewNumber").textContent="LEVEL "+String(selected+1).padStart(2,"0");
 $("previewStatus").textContent=locked?"TERKUNCI":done?"SELESAI":ready?"TERSEDIA":"MATERI DISIAPKAN";
 $("previewTitle").textContent=l.title;
 $("previewDescription").textContent=l.description||"Topik ini tercantum pada daftar isi buku. Materi lengkapnya sedang dipetakan dari halaman sumber agar tidak ada rumus atau soal yang dikarang.";
 $("previewLessons").textContent=ready?"1":"Menunggu";
 $("previewQuiz").textContent=ready?"1 kuis":"Menunggu";
 $("previewBook").textContent=ready?"Dipetakan awal":"Menunggu";
 $("sourceStatus").textContent=ready?lessonData[selected].source+" Kuis yang tersedia adalah kuis pemahaman yang disusun dari materi, bukan soal asli buku.":"Daftar isi buku menunjukkan topik ini mulai di halaman "+l.page+". Materi dan latihan asli masih perlu diverifikasi dari foto halaman tersebut.";
 $("openLevel").disabled=locked;
 $("openLevel").innerHTML=(locked?"Selesaikan level sebelumnya":ready?(done?"Ulangi materi":"Mulai materi"):"Lihat status materi")+" <span>→</span>";
}
function stopSpeech(){if("speechSynthesis" in window)window.speechSynthesis.cancel();$("pauseAudio").disabled=true;$("stopAudio").disabled=true;}
function openLevel(){
 if(!isUnlocked(selected))return;
 state.active=selected;save();
 if(levels[selected].type==="paket"){openPackageFromLevel(selected-15);return;}if(hasLesson(selected)){renderLesson();showView("lessonView");}else{renderPendingLevel();showView("lessonView");}
}
function renderLesson(){
 stopSpeech();const l=levels[selected],d=lessonData[selected];
 $("lessonEyebrow").textContent="LEVEL "+String(selected+1).padStart(2,"0")+" · MATERI · HLM. "+l.page;
 $("lessonTitle").textContent=d.title;$("lessonLead").textContent=d.lead;$("lessonContent").innerHTML=d.content;
 $("toQuiz").disabled=false;$("toQuiz").textContent="Lanjut ke kuis →";
 $("markRead").textContent=state.read.includes(selected)?"Sudah dibaca ✓":"Tandai sudah dibaca ✓";
 $("readAloud").disabled=false;$("pauseAudio").disabled=true;$("stopAudio").disabled=true;$("pauseAudio").textContent="Jeda";
 $("audioStatus").textContent=("speechSynthesis" in window)?"Materi bersumber dari foto buku. Tekan “Dengarkan materi” untuk pembaca suara browser.":"Pembaca suara tidak didukung browser ini; materi tetap dapat dibaca.";
 document.querySelectorAll(".rail-step").forEach((el,i)=>el.classList.toggle("current",i===0));
 document.querySelectorAll(".rail-step")[2].querySelector("small").textContent="Lihat latihan asli saat dipetakan";
}
function renderPendingLevel(){
 stopSpeech();const l=levels[selected];
 $("lessonEyebrow").textContent="LEVEL "+String(selected+1).padStart(2,"0")+" · PEMETAAN SUMBER";
 $("lessonTitle").textContent=l.title;$("lessonLead").textContent="Topik ditemukan pada daftar isi, tetapi isi halamannya belum selesai diverifikasi.";
 $("lessonContent").innerHTML=`<div class="source-warning"><strong>Materi belum dipublikasikan</strong><p>Topik ini tercatat di daftar isi buku pada halaman ${l.page}. Materi, rumus, contoh, dan soal akan ditambahkan setelah foto halamannya diperiksa. Saya tidak akan mengarang isi seolah-olah berasal dari buku.</p></div><h3>Urutan yang akan tersedia</h3><ul><li>Materi dan rumus sesuai halaman sumber.</li><li>Fitur baca dan dengarkan.</li><li>Kuis pemahaman setelah materi.</li><li>Soal asli buku berdasarkan nomor soal dan halaman.</li><li>Petunjuk bertahap tanpa langsung membocorkan jawaban.</li></ul><p class="source-inline">${l.source}. Halaman materi belum ditranskripsikan.</p>`;
 $("toQuiz").disabled=true;$("toQuiz").textContent="Kuis belum tersedia";$("markRead").textContent="Materi belum tersedia";$("readAloud").disabled=true;$("pauseAudio").disabled=true;$("stopAudio").disabled=true;$("audioStatus").textContent="Belum ada materi terverifikasi untuk dibacakan.";
}
function showView(id){
 document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));$(id).classList.remove("hidden");
 document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",(id==="mapView"&&t.dataset.view==="map")||(id==="officialView"&&t.dataset.view==="kisi")||(id==="tryoutView"&&t.dataset.view==="tryout")||(id==="progressView"&&t.dataset.view==="progress")));
 window.scrollTo({top:0,behavior:"smooth"});
}
function renderQuiz(){
 const q=lessonData[selected].quiz;answerSelected=null;hintIndex=0;attempted=false;stopSpeech();
 $("quizTopic").textContent=q.label;$("quizCounter").textContent="KUIS PEMAHAMAN · 1 SOAL";
 $("quizProgressFill").style.width="0%";$("questionText").textContent=q.text;$("questionContext").textContent=q.context;
 $("choices").innerHTML=q.choices.map((c,i)=>`<button class="choice" data-choice="${i}"><span class="choice-mark">${String.fromCharCode(65+i)}</span><span>${c}</span></button>`).join("");
 document.querySelectorAll(".choice").forEach(b=>b.addEventListener("click",()=>{if(attempted)return;answerSelected=Number(b.dataset.choice);document.querySelectorAll(".choice").forEach(x=>x.classList.toggle("selected",x===b));$("quizFeedback").classList.add("hidden");}));
 $("quizFeedback").className="quiz-feedback hidden";$("hintBox").classList.add("hidden");$("hintButton").disabled=false;$("checkAnswer").disabled=false;$("checkAnswer").classList.remove("hidden");$("quizComplete").classList.add("hidden");$("choices").classList.remove("hidden");
 $("hintButton").textContent="Bingung? Beri tahu caranya";$("nextHint").textContent="Petunjuk berikutnya";$("nextHint").disabled=false;
}
function showHint(){if(attempted)return;const hints=lessonData[selected].quiz.hints;$("hintBox").classList.remove("hidden");$("hintText").textContent=hints[hintIndex];$("hintStep").textContent=(hintIndex+1)+"/"+hints.length;hintIndex=(hintIndex+1)%hints.length;$("nextHint").textContent=hintIndex===0?"Ulangi petunjuk":"Petunjuk berikutnya";}
function checkAnswer(){
 const q=lessonData[selected].quiz;
 if(answerSelected===null){$("quizFeedback").className="quiz-feedback";$("quizFeedback").textContent="Pilih jawaban terlebih dahulu. Kamu boleh membuka petunjuk bertahap jika bingung.";return;}
 if(answerSelected===q.answer){
  attempted=true;$("quizFeedback").className="quiz-feedback good";$("quizFeedback").textContent="Benar. Kuis pemahaman berhasil diselesaikan. Lihat catatan materi dan lanjutkan level berikutnya.";
  state.attempts++;if(!state.passed.includes(selected))state.passed.push(selected);state.unlocked=Math.max(state.unlocked,selected+1);save();$("quizProgressFill").style.width="100%";$("hintButton").disabled=true;$("checkAnswer").disabled=true;$("choices").classList.add("hidden");$("quizComplete").classList.remove("hidden");
  const next=levels[selected+1];$("quizComplete").querySelector("p").textContent=next&&hasLesson(selected+1)?"Kuis selesai. Level berikutnya, "+next.title+", sudah memiliki materi yang diringkas dari halaman sumber.":next?"Kuis selesai. Level selanjutnya di daftar isi adalah "+next.title+", tetapi materi dan soal aslinya belum ditranskripsikan dari halaman sumber.":"Kamu sudah menyelesaikan semua level yang terdaftar.";
  renderMap();
 }else{
  $("quizFeedback").className="quiz-feedback";$("quizFeedback").textContent="Belum tepat. Jawaban akhir tidak dibocorkan. Coba lagi dengan memeriksa bagian materi yang menjelaskan alat/konsep tersebut, atau gunakan petunjuk bertahap.";
  state.attempts++;save();
 }
}
function renderProgress(){
 const total=levels.length,completed=state.passed.length,percent=Math.round(completed/total*100);
 $("progressPercent").textContent=percent+"%";$("progressRing").style.setProperty("--progress",percent+"%");
 $("progressLabel").textContent=completed?"Teruskan langkahmu":"Mulai perjalananmu";$("progressSub").textContent=completed+" dari "+total+" level lulus kuis.";
 $("openedCount").textContent=levels.filter((l,i)=>isUnlocked(i)).length;$("passedCount").textContent=completed;$("readCount").textContent=state.read.length;
 $("progressList").innerHTML=levels.map((l,i)=>`<div class="progress-row ${state.passed.includes(i)?"completed":""}"><span class="row-number">${state.passed.includes(i)?"✓":String(i+1).padStart(2,"0")}</span><div><b>${l.title}</b><small>${state.passed.includes(i)?"Kuis pemahaman lulus":hasLesson(i)?(isUnlocked(i)?"Materi tersedia":"Menunggu level sebelumnya"):"Halaman sumber hlm. "+l.page+" · materi belum dipetakan"}</small></div><span class="row-status">${state.passed.includes(i)?"SELESAI":!isUnlocked(i)?"TERKUNCI":hasLesson(i)?"TERSEDIA":"DISIAPKAN"}</span></div>`).join("");
}
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>showView(t.dataset.view==="map"?"mapView":t.dataset.view==="kisi"?"officialView":t.dataset.view==="tryout"?"tryoutView":"progressView")));
$("progressToggle").addEventListener("click",()=>showView("progressView"));
$("openLevel").addEventListener("click",openLevel);
$("backToMap").addEventListener("click",()=>{stopSpeech();showView("mapView");renderMap();});
$("backToLesson").addEventListener("click",()=>showView(activeDrillPackageId?"tryoutView":"lessonView"));
$("toQuiz").addEventListener("click",()=>{if(!lessonData[selected])return;activeQuestion=null;activeDrillPackageId=null;renderQuiz();document.querySelectorAll(".rail-step").forEach((el,i)=>el.classList.toggle("current",i===1));showView("quizView");});
$("markRead").addEventListener("click",()=>{if(!hasLesson(selected))return;if(!state.read.includes(selected))state.read.push(selected);save();$("markRead").textContent="Sudah dibaca ✓";$("audioStatus").textContent="Materi ditandai sudah dibaca. Selanjutnya, coba kuis tanpa petunjuk terlebih dahulu.";});
$("readAloud").addEventListener("click",()=>{if(!hasLesson(selected))return;if(!("speechSynthesis" in window)){$("audioStatus").textContent="Browser ini belum mendukung pembaca teks. Kamu tetap dapat membaca materi.";return;}stopSpeech();const utterance=new SpeechSynthesisUtterance($("lessonContent").innerText);utterance.lang="id-ID";utterance.rate=.92;utterance.onstart=()=>{$("audioStatus").textContent="Sedang membacakan materi…";$("pauseAudio").disabled=false;$("stopAudio").disabled=false;};utterance.onend=()=>{$("audioStatus").textContent="Selesai membacakan materi.";$("pauseAudio").disabled=true;$("stopAudio").disabled=true;};utterance.onerror=()=>{$("audioStatus").textContent="Suara tidak dapat diputar pada perangkat ini.";$("pauseAudio").disabled=true;$("stopAudio").disabled=true;};window.speechSynthesis.speak(utterance);});
$("pauseAudio").addEventListener("click",()=>{if(!("speechSynthesis" in window))return;if(window.speechSynthesis.paused){window.speechSynthesis.resume();$("pauseAudio").textContent="Jeda";}else{window.speechSynthesis.pause();$("pauseAudio").textContent="Lanjutkan";}});
$("stopAudio").addEventListener("click",()=>{stopSpeech();$("audioStatus").textContent="Pembacaan dihentikan.";$("pauseAudio").textContent="Jeda";});
$("hintButton").addEventListener("click",showHint);$("nextHint").addEventListener("click",showHint);$("checkAnswer").addEventListener("click",checkAnswer);
$("continueAfterQuiz").addEventListener("click",()=>continueFromQuiz());
$("resetProgress").addEventListener("click",()=>{if(confirm("Atur ulang semua progres belajar pada browser ini?")){stopSpeech();state={...defaultState};selected=0;save();renderMap();renderProgress();showView("mapView");}});
renderMap();renderProgress();