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

**Cara 1 — Manual:**
1. Ketik **MAWB** dan **HAWB** pada field input di bawah video
2. Sistem akan otomatis mencocokkan dengan data cargo (jika ada) dan mengisi HAWB

**Cara 2 — Scanner OCR Otomatis:**
- Jika terintegrasi dengan kamera fixed/scanner, data MAWB/HAWB akan terisi otomatis melalui koneksi SSE (Server-Sent Events)
- Status koneksi ditunjukkan oleh ikon **WiFi** (hijau = terhubung, merah = terputus)

**Cara 3 — Auto Screening (Antrian):**
- Aktifkan fitur **Auto Screening** di Pengaturan
- Data dari scanner akan masuk antrian dan diproses otomatis dengan delay yang dapat diatur

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

**Langkah-langkah:**
1. Pastikan kamera Top View menampilkan kargo
2. Tekan tombol **AI Analyze** — sistem akan mendeteksi koli secara otomatis
3. Bounding box hijau akan muncul mengelilingi setiap koli yang terdeteksi
4. Hasil crop koli akan muncul di panel **Hasil Crop Koli**
5. Jumlah koli terdeteksi otomatis mengisi field Qty

## Kalibrasi Background (BGS)

Untuk hasil deteksi yang lebih akurat dengan metode BGS:
1. Pastikan tidak ada kargo di frame kamera (konveyor kosong)
2. Klik tombol **Calibrate Background** (ikon kamera)
3. Sistem akan menyimpan baseline gambar (maksimal 2)
4. Baselines disimpan di localStorage browser

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

Panel ini menampilkan semua hasil crop koli dari deteksi AI atau cropping manual. Setiap crop menampilkan:
- Gambar hasil crop
- Nomor urut koli
- Tombol **X** untuk menghapus crop tertentu

## Riwayat Scan Terbaru

Panel kanan bawah menampilkan 10 scan terakhir untuk referensi cepat operator.
