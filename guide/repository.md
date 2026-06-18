# Riwayat Scan (Repository)

Halaman ini menyimpan seluruh riwayat pemeriksaan X-Ray yang pernah dilakukan.

## Filter & Pencarian

| Filter | Deskripsi |
|---|---|
| **MAWB** | Cari berdasarkan Master Air Waybill |
| **HAWB** | Cari berdasarkan House Air Waybill |
| **Screener** | Cari berdasarkan nama operator |
| **Tanggal Awal** | Filter dari tanggal tertentu |
| **Tanggal Akhir** | Filter hingga tanggal tertentu |
| **Status** | Semua / Finished XRay / Pending XRay |

## Statistik Cards

| Kartu | Deskripsi |
|---|---|
| **Total Scans** | Total seluruh scan yang pernah dilakukan |
| **Finished XRay** | Jumlah kargo yang dinyatakan lolos |
| **Pending XRay** | Jumlah kargo yang ditunda |
| **Submitted Customs** | Jumlah yang sudah dikirim ke bea cukai |

## Aksi pada Data Scan

| Tombol | Fungsi |
|---|---|
| **👁 Lihat Snapshot** | Lihat seluruh gambar (Top View, Side View, Foto Barang, hasil crop AI) dalam modal dengan zoom |
| **✏ Edit** | Edit data scan (memerlukan konfirmasi password) |
| **🔄 Re-Scan** | Kembali ke halaman Screening dengan data MAWB/HAWB terisi |
| **📤 Submit Customs** | Kirim data ke bea cukai (CEISA) — mencatat timestamp submission |
| **🗑 Hapus** | Hapus riwayat scan (memerlukan konfirmasi password) |

## Detail Snapshot

1. Klik ikon **Mata (Eye)** pada baris data untuk melihat snapshot lengkap
2. Modal akan menampilkan:
   - **Top View X-Ray** — gambar dari atas
   - **Side View X-Ray** — gambar dari samping
   - **Foto Barang** — foto fisik (jika diunggah)
   - **Hasil Crop AI** — semua crop koli terdeteksi
3. Klik pada gambar untuk memperbesar tampilan (Zoom in/out)

> Gambar ditampilkan langsung dari folder `uploads/` pada server dalam format **PNG lossless**.

## Export Excel

Ekspor data ke Excel dengan embedded gambar crop di dalam sel. File Excel memiliki:
- Header dengan styling profesional
- Warna baris selang-seling
- Gambar crop koli tertanam dalam sel

## Verifikasi Cargo

Tabel menampilkan badge verifikasi:
- ✅ **Hijau** — Kargo cocok dengan data manifest
- ❌ **Merah** — Kargo tidak ditemukan di data manifest
