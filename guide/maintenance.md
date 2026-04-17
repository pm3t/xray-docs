# Pemeliharaan & Pembaruan Sistem

## Cara Menjalankan Server
Server harus berjalan agar sistem dapat diakses.

```bash
node server.mjs
```

Buka browser dan akses: **`http://localhost:3000`**

## Cara Melakukan Pembaruan (Update)

1. Sambungkan **USB Drive** yang berisi folder pembaruan ke workstation.
2. Tutup **semua browser** yang sedang membuka aplikasi.
3. Buka USB Drive, masuk ke folder `Dist/`.
4. Salin (copy) **seluruh isi** folder `Dist/`.
5. Buka direktori aplikasi di workstation: `C:\XRay`.
6. Tempel (paste) dan pilih **Replace All** jika ada konfirmasi file duplikat.
7. Jalankan kembali server: `node server.mjs`.

> **Penting:** **Jangan hapus** file `xray.db` dan folder `uploads/` saat melakukan update. Kedua file tersebut berisi seluruh data dan gambar yang sudah tersimpan.

## Lokasi File Penting

| File / Folder | Lokasi | Keterangan |
|---|---|---|
| `server.mjs` | `C:\XRay\` | Aplikasi server utama |
| `xray.db` | `C:\XRay\` | Database SQLite (seluruh data) |
| `uploads/` | `C:\XRay\uploads\` | Folder gambar X-Ray (PNG) |

## Pembersihan Database (Opsional)
Jika sistem terasa lambat atau ada korupsi data lokal:
1. Hentikan server (`Ctrl+C` di terminal).
2. Hapus file `xray.db`.
3. Jalankan kembali server — database baru akan dibuat otomatis.
4. **Catatan:** Riwayat scan dan data kargo akan hilang. File gambar di `uploads/` aman.
