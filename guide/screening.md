# Screening X-Ray

Halaman ini adalah inti dari aplikasi — tempat operator melakukan pemeriksaan X-Ray terhadap kargo.

## Persiapan Kamera

1. Pastikan kamera/capture card terhubung ke komputer
2. Browser akan meminta izin akses kamera — klik **Izinkan**
3. Dua panel video akan muncul:
   - **Kamera Top View** (kiri) — Kamera atas untuk deteksi koli
   - **Kamera Side View** (kanan) — Kamera samping
4. Gunakan dropdown di atas masing-masing panel untuk memilih perangkat kamera jika tersedia lebih dari satu

## Input Data Screening

**Cara 1 — Barcode Scanner:**
1. Scan Barcode **MAWB** dan **HAWB**, dengan posisi cursor menyesuaikan isian.
2. Sistem akan otomatis mencocokkan dengan data cargo (jika ada) dan mengisi HAWB

**Cara 2 — Scanner OCR :**
- Jika terintegrasi dengan kamera fixed/scanner, data MAWB/HAWB akan terisi otomatis
- Status koneksi ditunjukkan oleh ikon **WiFi** (hijau = terhubung, merah = terputus)

**Cara 3 — Link pada Data Cargo:**
- Masuk ke Halaman Data Cargo > Pilih dokumen yang akan discan
- Klik Link MAWB. Layar akan diteruskan ke layar Screening dengan MAWB & HAWB terkait

## Ambil Foto Barang

1. Klik area **Foto Barang** (atau tombol Upload)
2. Pilih file gambar dari komputer
3. Preview akan muncul di panel Foto Barang

## Deteksi Koli dengan AI

Aplikasi mendukung tiga metode deteksi koli:

| Metode | Cara Kerja | Kelebihan |
|---|---|---|
| **OpenCV** | Server-side Python (edge detection + contour finding) | Akurat, tidak membebani browser |
| **MediaPipe** | Client-side EfficientDet via WASM | Cepat, offline, tanpa server |
| **Manual** | Drag & crop interaktif dengan mouse | Kontrol penuh oleh operator |

## Kalibrasi Background (BGS)

Proses Kalibrasi perlu dilakukan 1x saja saat instalasi XRay, yang berguna bagi AI untuk mengecualikan layar kosong, langkah-langkahnya adalah sbb:
1. Pastikan tidak ada kargo di frame kamera (konveyor kosong)
   <img src="/images/layar-baseline.png" width="400">
2. Klik tombol  <img src="/images/tombol-kalibrasi.png" width="150">
3. Sistem akan menyimpan baseline gambar (maksimal 2)
4. Baselines disimpan di localStorage browser


**Langkah-langkah Deteksi dengan AI**
1. Pastikan kamera Top View menampilkan kargo
<img src="/images/layar-kargo.png" width="400">

2. Tekan tombol  <img src="/images/tombol-ai.png" width="150">— sistem akan mendeteksi koli secara otomatis
3. Bounding box hijau akan muncul mengelilingi setiap koli yang terdeteksi
4. Hasil crop koli akan muncul di panel **Hasil Crop Koli**
5. Jumlah koli terdeteksi otomatis mengisi field Qty


## Crop Manual

Untuk mode **Manual**:
1. Pilih metode **Manual** di Pengaturan
2. Klik dan drag pada video Top View atau Side View
3. Lepaskan mouse untuk menyimpan crop
4. Crop akan muncul di panel hasil

## Membuat Keputusan

Setelah data lengkap dan analisis selesai:

| Tombol | Arti |
|---|---|
| **✔ Finished XRay** | Kargo dinyatakan **LOLOS** / release |
| **✖ Pending XRay** | Kargo dinyatakan **DITOLAK** / perlu pemeriksaan lanjutan |

Setelah memutuskan:
1. Klik salah satu tombol keputusan
2. Data scan akan disimpan ke database
3. Gambar akan diberi watermark (MAWB, HAWB, timestamp)
4. Notifikasi sukses akan muncul

## Panel Hasil Crop

<img src="/images/layar-koli.png" width="400">

Panel ini menampilkan semua hasil crop koli dari deteksi AI atau cropping manual. Setiap crop menampilkan:
- Gambar hasil crop
- Nomor urut koli
- Tombol <img src="/images/tombol-hapus-koli.png" width="50"> untuk menghapus crop tertentu

## Riwayat Scan Terbaru

Panel kanan bawah menampilkan 10 scan terakhir untuk referensi cepat operator.
