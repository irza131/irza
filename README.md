# IRZA LEARNING

**Think · Explore · Master**

IRZA LEARNING adalah ruang belajar mandiri untuk memahami konsep Fisika, berlatih menalar soal, dan memantau progres persiapan asesmen.

## Fitur

- Dashboard belajar dengan ringkasan progres.
- Jalur materi dengan 10 topik Fisika.
- Ringkasan konsep, rumus penting, dan alur pemecahan masalah.
- Ruang latihan dengan petunjuk bertahap.
- Pembahasan setelah jawaban diperiksa.
- Pencarian topik dan filter kategori.
- Progres tersimpan pada browser melalui `localStorage`.
- Tampilan responsif untuk desktop dan perangkat mobile.
- Mode gelap dan terang.

## Struktur

- `index.html` — kerangka dan tampilan halaman.
- `style.css` — sistem desain responsif.
- `app.js` — navigasi, interaksi, kuis, dan progres.
- `drilling.js` — materi dan bank soal latihan.

## Menjalankan secara lokal

Buka `index.html` melalui server statis lokal. Contoh:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## GitHub Pages

Repository ini disiapkan untuk deployment otomatis menggunakan GitHub Actions pada branch `main`.

1. Buka **Settings → Pages**.
2. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
3. Pastikan GitHub Actions diizinkan pada pengaturan repository.
4. Push perubahan ke branch `main`; workflow akan memeriksa sintaks JavaScript dan melakukan deployment.

Target URL: https://irza131.github.io/irza/

## Catatan akademik

Soal di ruang latihan merupakan soal latihan mandiri yang dibuat untuk platform ini; bukan soal resmi atau bocoran TKA. Materi adalah ringkasan pengantar dan sebaiknya dipelajari bersama buku serta referensi yang kredibel. Untuk informasi cakupan dan ketentuan asesmen, periksa dokumen resmi Pusmendik.

## Penyimpanan data

Progres disimpan secara lokal pada browser/perangkat yang digunakan. Data tidak tersinkronisasi ke server dan dapat hilang saat data situs/browser dihapus.
