# Customs Dashboard

Halaman ini dirancang untuk monitoring oleh petugas bea cukai (customs).

## Metrik Utama

| Metrik | Warna | Deskripsi |
|---|---|---|
| **Total Diperiksa** | Biru | Total seluruh kargo yang diperiksa |
| **Finished XRay** | Hijau | Kargo yang dinyatakan lolos |
| **Pending XRay** | Merah | Kargo yang perlu perhatian khusus |

## Tabel Data

- Menampilkan daftar scan dengan kolom: Timestamp, Durasi, MAWB, HAWB, ULD, Qty, Status, Aksi
- Filter berdasarkan rentang tanggal
- Pencarian berdasarkan MAWB/HAWB
- Tabel dapat diekspor ke Excel

## Panel Detail (Dark Theme)

Saat mengklik salah satu baris, panel detail akan muncul di sisi kanan dengan:
- **Gambar besar:** Top View, Side View, Foto Barang
- **Hasil Crop AI:** Semua crop koli terdeteksi
- **Informasi:** MAWB, HAWB, Qty, Status, Screener, Timestamp, Durasi
- Klik pada gambar untuk memperbesar (zoom modal)

## Alert / Peringatan Risiko

Panel alert di bawah menampilkan semua kargo dengan status **Pending XRay** sebagai indikator risiko tinggi dengan ikon segitiga merah.

## Auto-Refresh

Dashboard secara otomatis me-refresh data setiap 5 detik untuk monitoring real-time.
