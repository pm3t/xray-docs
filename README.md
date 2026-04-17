# X-Ray Offline System

Selamat datang di panduan pengguna **X-Ray Offline System**.

Sistem ini dirancang untuk memproses pemeriksaan kargo (screening) secara efisien dengan penyimpanan data lokal menggunakan **SQLite** dan penyimpanan gambar X-Ray ke dalam **folder server**.

## Fitur Utama
* **Manajemen Manifest:** Pengelolaan data kargo melalui input manual atau impor massal via Excel.
* **Screening Real-time:** Pengambilan gambar otomatis dari kamera Top View dan Side View saat keputusan direkam.
* **Penyimpanan Lokal (SQLite):** Seluruh data kargo, riwayat scan, dan pengaturan tersimpan di database `xray.db`.
* **Penyimpanan Gambar:** Citra X-Ray disimpan sebagai file PNG lossless di folder `uploads/` pada server.
* **Offline First:** Seluruh operasional inti berjalan tanpa koneksi internet.

## Persyaratan Sistem
* **Node.js** versi 20 atau lebih baru.
* Browser **Google Chrome** (versi terbaru direkomendasikan).
* Koneksi USB untuk capture card kamera X-Ray.

## Cara Menjalankan Sistem

```bash
# Jalankan server (backend + frontend sekaligus)
cd C:\XRay
node server.mjs
```

Sistem akan berjalan di: **`http://localhost:3000`**

Output yang muncul jika berhasil:
```
✅ X-Ray Server running at http://localhost:3000
📁 Database: C:\XRay\xray.db
🖼️  Uploads: C:\XRay\uploads
```
