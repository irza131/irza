window.IRZA_LESSONS = [
  {
    id:"pengukuran", title:"Pengukuran dan Angka Penting", category:"Dasar", glyph:"▤", level:"FONDASI", duration:"15–20 menit",
    description:"Memahami besaran, satuan SI, alat ukur, notasi ilmiah, dan ketelitian hasil pengukuran.",
    intro:"Fisika dibangun dari pengamatan dan pengukuran. Sebelum menghitung suatu fenomena, pastikan besaran yang digunakan, satuannya, dan tingkat ketelitiannya dipahami.",
    concepts:[
      ["Besaran dan satuan","Besaran adalah sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan. Sistem SI menjadi acuan agar hasil pengukuran dapat dibandingkan."],
      ["Besaran pokok dan turunan","Panjang, massa, waktu, suhu, kuat arus, jumlah zat, dan intensitas cahaya merupakan besaran pokok. Kecepatan, gaya, energi, dan tekanan merupakan contoh besaran turunan."],
      ["Ketelitian pengukuran","Alat ukur memiliki skala terkecil dan batas ketelitian. Hasil pengukuran perlu ditulis dengan angka penting yang sesuai."],
      ["Notasi ilmiah","Bilangan sangat besar atau kecil dapat ditulis sebagai a × 10ⁿ dengan 1 ≤ |a| < 10 agar lebih ringkas."]
    ],
    formulas:[
      ["Kecepatan rata-rata","v = Δx / Δt","Perpindahan dibagi selang waktu."],
      ["Massa jenis","ρ = m / V","Massa per satuan volume."],
      ["Ketidakpastian analog","± ½ × skala terkecil","Aturan umum pembacaan alat ukur analog."]
    ],
    method:["Tentukan besaran yang sedang diukur.","Periksa satuan dan skala terkecil alat.","Catat angka sesuai ketelitian pengukuran.","Ubah satuan sebelum menggabungkan besaran yang berbeda."]
  },
  {
    id:"vektor", title:"Vektor dan Resultan", category:"Dasar", glyph:"↗", level:"FONDASI", duration:"15–20 menit",
    description:"Membedakan skalar dan vektor serta menentukan komponen dan resultan vektor.",
    intro:"Beberapa besaran cukup dijelaskan oleh nilai, sementara besaran lain juga membutuhkan arah. Perbedaan ini menentukan cara kita mengoperasikannya.",
    concepts:[
      ["Skalar dan vektor","Skalar hanya memiliki nilai, misalnya massa dan suhu. Vektor memiliki nilai serta arah, misalnya perpindahan, kecepatan, dan gaya."],
      ["Komponen vektor","Vektor dapat diuraikan ke sumbu x dan y. Untuk sudut θ terhadap sumbu x, komponen umumnya Ax = A cos θ dan Ay = A sin θ."],
      ["Penjumlahan vektor","Vektor searah dijumlahkan, sedangkan vektor berlawanan arah dikurangkan. Untuk vektor tegak lurus, gunakan teorema Pythagoras."],
      ["Arah resultan","Setelah besar resultan ditentukan, arah dapat dicari dari perbandingan komponen melalui fungsi trigonometri."]
    ],
    formulas:[
      ["Komponen horizontal","Ax = A cos θ","θ diukur dari sumbu x positif."],
      ["Komponen vertikal","Ay = A sin θ","Tanda komponen mengikuti arah sumbu."],
      ["Resultan tegak lurus","R = √(Ax² + Ay²)","Berlaku untuk dua komponen yang saling tegak lurus."]
    ],
    method:["Gambar arah setiap vektor pada sumbu koordinat.","Uraikan vektor miring menjadi komponen x dan y.","Jumlahkan komponen sejenis dengan memperhatikan tanda.","Hitung besar dan arah resultan."]
  },
  {
    id:"kinematika", title:"Kinematika Gerak", category:"Mekanika", glyph:"➜", level:"MEKANIKA", duration:"20–25 menit",
    description:"Menganalisis posisi, perpindahan, kecepatan, percepatan, GLB, dan GLBB.",
    intro:"Kinematika membahas bagaimana benda bergerak tanpa terlebih dahulu membahas penyebab geraknya. Kunci awalnya adalah membedakan jarak, perpindahan, kelajuan, dan kecepatan.",
    concepts:[
      ["Posisi dan perpindahan","Jarak adalah panjang lintasan yang ditempuh. Perpindahan adalah perubahan posisi dan memiliki arah."],
      ["Kecepatan dan percepatan","Kecepatan menyatakan perubahan posisi tiap waktu. Percepatan menyatakan perubahan kecepatan tiap waktu."],
      ["Gerak lurus beraturan","Pada GLB, kecepatan konstan dan percepatan nol. Grafik posisi terhadap waktu berupa garis lurus."],
      ["Gerak lurus berubah beraturan","Pada GLBB, percepatan konstan. Kecepatan berubah secara teratur terhadap waktu."]
    ],
    formulas:[
      ["Kecepatan rata-rata","v = Δx / Δt","Perpindahan per selang waktu."],
      ["Percepatan","a = Δv / Δt","Perubahan kecepatan per selang waktu."],
      ["GLBB","v = v₀ + at","Hubungan kecepatan dan waktu."],
      ["Posisi GLBB","s = v₀t + ½at²","Perpindahan jika posisi awal dijadikan acuan."]
    ],
    method:["Tuliskan posisi awal, kecepatan awal, percepatan, dan waktu yang diketahui.","Tentukan besaran yang ditanyakan.","Pilih persamaan yang memuat besaran diketahui dan target.","Periksa tanda arah serta satuan hasil."]
  },
  {
    id:"dinamika", title:"Dinamika dan Hukum Newton", category:"Mekanika", glyph:"⟶", level:"MEKANIKA", duration:"20–25 menit",
    description:"Menghubungkan gaya resultan dengan perubahan gerak melalui hukum Newton.",
    intro:"Dinamika menjelaskan penyebab perubahan gerak. Analisis yang baik dimulai dengan menggambar benda dan semua gaya yang bekerja padanya.",
    concepts:[
      ["Hukum I Newton","Jika resultan gaya nol, benda mempertahankan keadaan diam atau bergerak lurus beraturan."],
      ["Hukum II Newton","Percepatan searah dengan resultan gaya dan besarnya sebanding dengan gaya serta berbanding terbalik dengan massa."],
      ["Hukum III Newton","Gaya aksi dan reaksi sama besar, berlawanan arah, dan bekerja pada dua benda yang berbeda."],
      ["Diagram gaya","Gambarkan gaya berat, normal, tegangan, gesek, dan gaya luar sesuai kondisi benda. Jangan mencampur gaya yang bekerja pada benda berbeda."]
    ],
    formulas:[
      ["Hukum II Newton","ΣF = ma","Resultan gaya pada satu sumbu."],
      ["Berat benda","w = mg","g adalah percepatan gravitasi."],
      ["Gaya gesek kinetis","fₖ = μₖN","Model gaya gesek pada permukaan kering sederhana."]
    ],
    method:["Pilih benda yang dianalisis.","Gambar diagram benda bebas.","Tentukan sumbu dan uraikan gaya pada tiap sumbu.","Gunakan ΣF = ma secara terpisah untuk setiap sumbu."]
  },
  {
    id:"energi", title:"Usaha, Energi, dan Momentum", category:"Mekanika", glyph:"ϟ", level:"MEKANIKA", duration:"20–25 menit",
    description:"Memahami usaha, energi kinetik, energi potensial, kekekalan energi, impuls, dan momentum.",
    intro:"Konsep energi membantu menganalisis perubahan keadaan tanpa harus menelusuri seluruh gaya setiap saat. Momentum berguna ketika membahas interaksi dan tumbukan.",
    concepts:[
      ["Usaha","Usaha oleh gaya konstan berkaitan dengan komponen gaya yang searah perpindahan."],
      ["Energi mekanik","Energi mekanik adalah jumlah energi kinetik dan energi potensial. Pada sistem ideal tanpa gaya nonkonservatif, jumlahnya tetap."],
      ["Momentum dan impuls","Momentum bergantung pada massa dan kecepatan. Impuls merupakan perubahan momentum akibat gaya selama selang waktu."],
      ["Tumbukan","Momentum total sistem terisolasi kekal. Energi kinetik hanya kekal pada tumbukan lenting sempurna."]
    ],
    formulas:[
      ["Usaha","W = F s cos θ","θ adalah sudut antara gaya dan perpindahan."],
      ["Energi kinetik","Ek = ½mv²","Energi karena gerak."],
      ["Energi potensial gravitasi","Ep = mgh","Dekat permukaan Bumi dengan g dianggap konstan."],
      ["Momentum","p = mv","Arah momentum mengikuti arah kecepatan."]
    ],
    method:["Tentukan apakah soal membahas gaya-perpindahan, keadaan gerak, atau tumbukan.","Catat kondisi awal dan akhir.","Pilih teorema usaha-energi atau kekekalan momentum sesuai sistem.","Pastikan satuan energi dalam joule dan momentum dalam kg m/s."]
  },
  {
    id:"fluida", title:"Fluida Statis dan Dinamis", category:"Mekanika", glyph:"≈", level:"APLIKASI", duration:"20–25 menit",
    description:"Menganalisis tekanan, tekanan hidrostatis, gaya apung, kontinuitas, dan Bernoulli.",
    intro:"Fluida adalah zat yang dapat mengalir. Sifat fluida diam dan fluida bergerak dianalisis dengan hubungan tekanan, kedalaman, luas penampang, dan kecepatan aliran.",
    concepts:[
      ["Tekanan","Tekanan adalah gaya tegak lurus permukaan per luas bidang. Luas yang lebih kecil menghasilkan tekanan lebih besar untuk gaya yang sama."],
      ["Tekanan hidrostatis","Tekanan dalam fluida diam bertambah seiring kedalaman dan dipengaruhi massa jenis fluida serta gravitasi."],
      ["Prinsip Archimedes","Benda yang tercelup mengalami gaya apung sebesar berat fluida yang dipindahkan."],
      ["Fluida bergerak","Persamaan kontinuitas menghubungkan luas penampang dengan kecepatan aliran. Persamaan Bernoulli menghubungkan tekanan, kecepatan, dan ketinggian pada kondisi ideal."]
    ],
    formulas:[
      ["Tekanan","P = F / A","Gaya tegak lurus dibagi luas."],
      ["Hidrostatis","Pₕ = ρgh","Tekanan ukur pada kedalaman h."],
      ["Gaya apung","Fₐ = ρfluida g Vterdesak","Vterdesak adalah volume fluida yang dipindahkan."],
      ["Kontinuitas","A₁v₁ = A₂v₂","Untuk aliran tunak fluida tak termampatkan."]
    ],
    method:["Identifikasi apakah fluida diam atau mengalir.","Catat kedalaman, massa jenis, luas penampang, atau volume tercelup.","Pilih prinsip yang sesuai: tekanan, Archimedes, kontinuitas, atau Bernoulli.","Periksa apakah tekanan yang digunakan tekanan ukur atau tekanan mutlak."]
  },
  {
    id:"gelombang", title:"Gelombang, Bunyi, dan Cahaya", category:"Gelombang", glyph:"⌁", level:"GELOMBANG", duration:"20–25 menit",
    description:"Memahami besaran gelombang, rambatan bunyi, pemantulan, pembiasan, dan optika dasar.",
    intro:"Gelombang memindahkan energi tanpa memindahkan materi secara permanen. Besaran seperti frekuensi, periode, panjang gelombang, dan cepat rambat saling berhubungan.",
    concepts:[
      ["Besaran gelombang","Amplitudo berkaitan dengan simpangan maksimum. Periode adalah waktu satu getaran dan frekuensi adalah jumlah getaran per detik."],
      ["Cepat rambat gelombang","Cepat rambat ditentukan oleh frekuensi dan panjang gelombang. Ketika gelombang memasuki medium lain, frekuensinya tetap sementara panjang gelombang dapat berubah."],
      ["Bunyi","Bunyi merupakan gelombang mekanik yang memerlukan medium. Cepat rambatnya dipengaruhi sifat medium."],
      ["Cahaya","Cahaya dapat mengalami pemantulan dan pembiasan. Hukum Snellius menghubungkan sudut datang, sudut bias, dan indeks bias."]
    ],
    formulas:[
      ["Frekuensi dan periode","f = 1 / T","Frekuensi dalam hertz dan periode dalam sekon."],
      ["Cepat rambat gelombang","v = fλ","Frekuensi dikali panjang gelombang."],
      ["Hukum Snellius","n₁ sin θ₁ = n₂ sin θ₂","Sudut diukur terhadap garis normal."]
    ],
    method:["Tentukan jenis gelombang dan medium rambatnya.","Identifikasi frekuensi, periode, panjang gelombang, atau sudut.","Gunakan hubungan gelombang atau hukum optika yang sesuai.","Perhatikan satuan panjang dan sudut."]
  },
  {
    id:"termal", title:"Kalor dan Termodinamika", category:"Termal", glyph:"◉", level:"TERMAL", duration:"20–25 menit",
    description:"Menganalisis suhu, kalor, perubahan wujud, gas ideal, dan hukum termodinamika.",
    intro:"Suhu berkaitan dengan keadaan termal, sedangkan kalor adalah energi yang berpindah karena perbedaan suhu. Termodinamika mempelajari hubungan kalor, usaha, dan energi dalam.",
    concepts:[
      ["Kalor dan perubahan suhu","Jika tidak terjadi perubahan wujud, energi kalor dapat mengubah suhu benda. Massa dan kalor jenis menentukan banyak kalor yang diperlukan."],
      ["Perubahan wujud","Saat zat berubah wujud pada tekanan tetap, kalor dapat digunakan untuk perubahan fase tanpa menaikkan suhu."],
      ["Gas ideal","Keadaan gas ideal dihubungkan oleh tekanan, volume, jumlah mol, dan suhu mutlak."],
      ["Hukum I Termodinamika","Perubahan energi dalam terkait dengan kalor yang diterima sistem dan usaha yang dilakukan sistem. Gunakan konvensi tanda secara konsisten."]
    ],
    formulas:[
      ["Kalor","Q = mcΔT","Berlaku saat suhu berubah tanpa perubahan wujud."],
      ["Kalor laten","Q = mL","Energi untuk perubahan wujud."],
      ["Gas ideal","PV = nRT","T harus dinyatakan dalam kelvin."],
      ["Hukum I","ΔU = Q − W","W positif jika usaha dilakukan oleh sistem."]
    ],
    method:["Tentukan apakah proses berupa perubahan suhu, perubahan wujud, atau proses gas.","Ubah suhu ke kelvin jika menggunakan persamaan gas.","Tetapkan sistem dan konvensi tanda kalor-usaha.","Periksa satuan energi dan keadaan awal-akhir."]
  },
  {
    id:"listrik", title:"Listrik Statis dan Arus Searah", category:"Listrik", glyph:"ϟ", level:"KELISTRIKAN", duration:"20–25 menit",
    description:"Memahami muatan, beda potensial, arus, hambatan, rangkaian seri-paralel, dan daya listrik.",
    intro:"Kelistrikan menghubungkan muatan dan energi. Untuk rangkaian arus searah, identifikasi susunan komponen terlebih dahulu sebelum menghitung arus atau tegangan.",
    concepts:[
      ["Muatan dan gaya listrik","Muatan sejenis tolak-menolak dan muatan berbeda jenis tarik-menarik. Besar gaya listrik dipengaruhi muatan dan jarak."],
      ["Arus dan beda potensial","Arus menyatakan laju aliran muatan. Beda potensial menyatakan energi per satuan muatan."],
      ["Rangkaian resistor","Pada seri, arus sama melalui setiap resistor. Pada paralel, beda potensial tiap cabang sama."],
      ["Daya listrik","Daya menunjukkan laju penggunaan atau pemindahan energi listrik."]
    ],
    formulas:[
      ["Hukum Ohm","V = IR","Berlaku untuk penghantar ohmik pada kondisi fisik tetap."],
      ["Hambatan seri","Rₜ = R₁ + R₂ + …","Arus sama pada tiap komponen."],
      ["Daya listrik","P = VI = I²R = V²/R","Pilih bentuk sesuai besaran yang diketahui."]
    ],
    method:["Gambar ulang rangkaian dan tandai titik percabangan.","Sederhanakan resistor seri atau paralel.","Gunakan Hukum Ohm dan aturan Kirchhoff jika diperlukan.","Hitung daya atau energi setelah arus dan tegangan diketahui."]
  },
  {
    id:"magnet", title:"Magnet dan Induksi Elektromagnetik", category:"Listrik", glyph:"⌁", level:"PENGAYAAN", duration:"15–20 menit",
    description:"Mengenal medan magnet, gaya Lorentz, fluks magnet, dan prinsip induksi elektromagnetik.",
    intro:"Kelistrikan dan kemagnetan saling berkaitan. Arus listrik dapat menghasilkan medan magnet, sedangkan perubahan fluks magnet dapat menginduksi gaya gerak listrik.",
    concepts:[
      ["Medan magnet","Medan magnet menggambarkan pengaruh magnet di sekitar sumber. Arah medan di luar magnet batang secara konvensional dari kutub utara ke selatan."],
      ["Gaya Lorentz","Muatan bergerak atau kawat berarus dalam medan magnet dapat mengalami gaya. Arah gaya bergantung pada arah gerak atau arus dan medan."],
      ["Fluks magnet","Fluks bergantung pada kuat medan, luas bidang, dan orientasi bidang terhadap medan."],
      ["Induksi Faraday-Lenz","Perubahan fluks magnet menimbulkan gaya gerak listrik induksi. Arah arus induksi menentang perubahan fluks penyebabnya."]
    ],
    formulas:[
      ["Gaya magnet pada muatan","F = qvB sin θ","θ adalah sudut antara kecepatan dan medan magnet."],
      ["Gaya pada kawat berarus","F = BIL sin θ","L adalah panjang kawat dalam medan."],
      ["Fluks magnet","Φ = BA cos θ","θ adalah sudut antara medan dan garis normal bidang."],
      ["GGL induksi","|ε| = N |ΔΦ/Δt|","Besar ggl induksi pada kumparan N lilitan."]
    ],
    method:["Identifikasi apakah situasinya melibatkan muatan bergerak, kawat berarus, atau perubahan fluks.","Tentukan arah medan, arus, dan gerak.","Gunakan aturan tangan kanan atau hukum Lenz sesuai konteks.","Periksa satuan tesla, weber, dan volt."]
  }
];

window.IRZA_QUESTIONS = [
  {id:"q-kin-01",topic:"Kinematika Gerak",level:"Penerapan",title:"Gerak lurus beraturan",prompt:"Sebuah kendaraan bergerak dengan kecepatan konstan 20 m/s selama 5 sekon. Berapa besar perpindahannya selama interval tersebut?",context:"Anggap gerak berlangsung pada satu garis lurus dan arah gerak tidak berubah.",choices:["4 m","25 m","100 m","400 m"],answer:2,hints:["Tandai bahwa kecepatan konstan, sehingga situasi ini termasuk GLB.","Hubungkan perpindahan, kecepatan, dan waktu.","Gunakan s = v × t, lalu masukkan nilai dengan satuan yang sesuai."],explanation:"Untuk GLB, s = vt. Dengan v = 20 m/s dan t = 5 s, perpindahan = 100 m."},
  {id:"q-din-01",topic:"Dinamika dan Hukum Newton",level:"Penerapan",title:"Resultan gaya",prompt:"Sebuah benda bermassa 2 kg mengalami percepatan 3 m/s². Berapa besar resultan gaya yang bekerja pada benda?",context:"Gunakan Hukum II Newton pada arah percepatan.",choices:["1,5 N","5 N","6 N","9 N"],answer:2,hints:["Cari hubungan antara resultan gaya, massa, dan percepatan.","Besaran yang diketahui adalah m dan a; targetnya adalah ΣF.","Susun ΣF = ma sebelum melakukan perkalian."],explanation:"Hukum II Newton menyatakan ΣF = ma. Jadi ΣF = 2 × 3 = 6 N."},
  {id:"q-vec-01",topic:"Vektor dan Resultan",level:"Penerapan",title:"Resultan dua vektor",prompt:"Dua gaya masing-masing 3 N dan 4 N bekerja saling tegak lurus pada sebuah benda. Berapa besar resultan kedua gaya?",context:"Kedua vektor berpangkal pada titik yang sama dan membentuk sudut 90°.",choices:["1 N","5 N","7 N","12 N"],answer:1,hints:["Karena kedua gaya tegak lurus, keduanya menjadi sisi siku-siku segitiga.","Gunakan hubungan Pythagoras untuk menentukan besar resultan.","Hitung akar dari jumlah kuadrat masing-masing komponen."],explanation:"R = √(3² + 4²) = √25 = 5 N."},
  {id:"q-energi-01",topic:"Usaha, Energi, dan Momentum",level:"Penerapan",title:"Usaha oleh gaya",prompt:"Gaya konstan sebesar 10 N bekerja searah perpindahan benda sejauh 5 m. Berapa usaha yang dilakukan gaya tersebut?",context:"Sudut antara gaya dan perpindahan adalah 0°.",choices:["2 J","15 J","50 J","100 J"],answer:2,hints:["Gunakan persamaan usaha oleh gaya konstan.","Perhatikan sudut antara gaya dan perpindahan. cos 0° = 1.","Substitusikan gaya dan perpindahan ke W = Fs cos θ."],explanation:"W = Fs cos θ = 10 × 5 × 1 = 50 J."},
  {id:"q-energi-02",topic:"Usaha, Energi, dan Momentum",level:"Penerapan",title:"Energi kinetik",prompt:"Sebuah benda bermassa 2 kg bergerak dengan kelajuan 3 m/s. Berapa energi kinetiknya?",context:"Gunakan kelajuan benda pada saat yang sedang dianalisis.",choices:["6 J","9 J","12 J","18 J"],answer:1,hints:["Energi kinetik bergantung pada massa dan kuadrat kelajuan.","Tuliskan Ek = ½mv².","Kuadratkan kelajuan terlebih dahulu, kemudian kalikan dengan setengah massa."],explanation:"Ek = ½ × 2 × 3² = 9 J."},
  {id:"q-fluid-01",topic:"Fluida Statis dan Dinamis",level:"Penerapan",title:"Tekanan pada permukaan",prompt:"Gaya tekan sebesar 200 N bekerja tegak lurus pada permukaan seluas 0,5 m². Berapa tekanan yang dihasilkan?",context:"Tekanan dihitung sebagai gaya tegak lurus dibagi luas bidang tekan.",choices:["100 Pa","200 Pa","400 Pa","1.000 Pa"],answer:2,hints:["Identifikasi gaya tegak lurus dan luas bidang tekan.","Gunakan definisi tekanan P = F/A.","Perhatikan bahwa membagi dengan 0,5 sama dengan mengalikan dua."],explanation:"P = F/A = 200/0,5 = 400 Pa."},
  {id:"q-wave-01",topic:"Gelombang, Bunyi, dan Cahaya",level:"Penerapan",title:"Cepat rambat gelombang",prompt:"Gelombang memiliki frekuensi 4 Hz dan panjang gelombang 2 m. Berapa cepat rambat gelombang tersebut?",context:"Anggap gelombang merambat dalam medium yang sama selama pengamatan.",choices:["2 m/s","4 m/s","6 m/s","8 m/s"],answer:3,hints:["Cari persamaan yang menghubungkan cepat rambat, frekuensi, dan panjang gelombang.","Gunakan v = fλ.","Kalikan frekuensi dengan panjang gelombang."],explanation:"v = fλ = 4 × 2 = 8 m/s."},
  {id:"q-electric-01",topic:"Listrik Statis dan Arus Searah",level:"Penerapan",title:"Hukum Ohm",prompt:"Sebuah resistor 4 Ω dihubungkan ke sumber tegangan 12 V. Berapa kuat arus yang mengalir?",context:"Anggap resistor bersifat ohmik dan hambatan tetap.",choices:["0,3 A","2 A","3 A","48 A"],answer:2,hints:["Tuliskan persamaan Hukum Ohm yang menghubungkan V, I, dan R.","Target adalah arus, jadi susun ulang menjadi I = V/R.","Masukkan tegangan dan hambatan, lalu hitung hasil pembagian."],explanation:"I = V/R = 12/4 = 3 A."},
  {id:"q-electric-02",topic:"Listrik Statis dan Arus Searah",level:"Pemahaman",title:"Hambatan rangkaian seri",prompt:"Dua resistor 2 Ω dan 3 Ω disusun seri. Berapa hambatan penggantinya?",context:"Tidak ada cabang lain pada rangkaian.",choices:["1 Ω","2,5 Ω","5 Ω","6 Ω"],answer:2,hints:["Ingat ciri rangkaian seri: arus yang melalui setiap resistor sama.","Hambatan pengganti seri diperoleh dengan menjumlahkan setiap hambatan.","Jumlahkan 2 Ω dan 3 Ω."],explanation:"Untuk susunan seri, Rtotal = R₁ + R₂ = 2 + 3 = 5 Ω."},
  {id:"q-thermal-01",topic:"Kalor dan Termodinamika",level:"Penerapan",title:"Kalor untuk menaikkan suhu",prompt:"Air bermassa 0,5 kg dipanaskan sehingga suhunya naik 10°C. Jika kalor jenis air 4.200 J/(kg·°C), berapa kalor yang diterima air?",context:"Anggap tidak ada kalor yang hilang ke lingkungan dan tidak terjadi perubahan wujud.",choices:["2.100 J","4.200 J","21.000 J","42.000 J"],answer:2,hints:["Karena tidak ada perubahan wujud, gunakan hubungan kalor dan perubahan suhu.","Gunakan Q = mcΔT.","Kalikan massa, kalor jenis, dan perubahan suhu."],explanation:"Q = 0,5 × 4.200 × 10 = 21.000 J."}
];
