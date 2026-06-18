# Pengaturan Sistem

## Tab Umum

| Pengaturan | Deskripsi |
|---|---|
| **Metode Analisis Koli** | OpenCV (server), MediaPipe (browser), atau Manual (drag) |
| **Default Records Per Page** | Jumlah baris default per halaman |

## Tab Kamera & Scanner

| Pengaturan | Deskripsi |
|---|---|
| **Mode Integrasi Kamera Pindai** | TCP_FTP, JSON API, atau None |
| **Port TCP** | Port untuk menerima data AWB dari kamera (default: 1337) |
| **Port FTP** | Port untuk upload foto dari kamera (default: 2121) |
| **Auto Screening** | Proses screening otomatis (Aktif/Non-aktif) |
| **Delay Otomasi** | Waktu tunggu antar item (detik, default: 11) |

## Tab Jaringan

| Pengaturan | Deskripsi |
|---|---|
| **App Role** | Workstation / Hub / Cloud |
| **Workstation ID** | Identitas unik mesin (contoh: WS-01) |
| **URL Central Hub** | Alamat server Hub untuk sinkronisasi |
| **Cloud API URL** | Alamat cloud untuk sinkronisasi ke cloud |
| **PostgreSQL Connection** | String koneksi PostgreSQL (untuk Hub/Cloud) |

## Tab API Eksternal

| Pengaturan | Deskripsi |
|---|---|
| **Manifest API** | URL, API Key, Username, Password untuk API manifest eksternal |
| **CEISA API** | URL, API Key, Username, Password untuk API bea cukai |

## Menyimpan Pengaturan

Klik tombol **Simpan Pengaturan** di pojok kanan bawah. Perubahan port TCP/FTP memerlukan restart server.
