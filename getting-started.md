# Persyaratan Sistem & Instalasi

## Prasyarat

- **Node.js** versi 18 atau 20
- **npm** (Node Package Manager)
- **Python 3** + `opencv-python` dan `numpy` (untuk AI OpenCV)
- Browser modern (Chrome/Edge/Firefox terbaru)
- Koneksi USB untuk capture card kamera X-Ray

## Instalasi

```bash
# Masuk ke direktori aplikasi (sesuaikan dengan lokasi instalasi)
cd C:\XRay

# Install dependensi
npm install

# Jalankan server (backend + frontend terintegrasi)
node server.mjs
```

Aplikasi akan berjalan di **http://localhost:3000**

Output yang muncul jika berhasil:
```
✅ X-Ray Server running at http://localhost:3000
📁 Database: xray.db
🖼️  Uploads: uploads/
```

## Struktur Direktori

| File / Folder | Keterangan |
|---|---|
| `server.mjs` | Aplikasi server utama (backend + frontend) |
| `xray.db` | Database SQLite (seluruh data) |
| `uploads/` | Folder gambar X-Ray (PNG lossless) |
| `public/` | Aset frontend (CSS, JS, WASM, model) |
| `templates/` | Template Excel untuk impor data |
