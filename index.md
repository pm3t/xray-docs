---
layout: home

hero:
  name: X-Ray Offline System
  text: User Manual
  actions:
    - theme: brand
      text: Persyaratan & Instalasi
      link: /getting-started
    - theme: alt
      text: Panduan
      link: /guide/input-data

features:
  - icon: 📦
    title: Manajemen Manifest
    details: "Kelola data manifest kargo melalui input manual atau import Excel. Hal ini bertujuan untuk memberikan kontrol kepada pengguna mana cargo yang telah complete scan, sebagian, atau belum sama sekali"
  - icon: 🎥
    title: Screening Real-time
    details: "Mirroring screen Top View dan Side View dari sistem XRay."
  - icon: 🗄️
    title: Repository Lokal
    details: "Seluruh data kargo, riwayat scan, dan gambar tersimpan di SQLite dan folder local workstation."
  - icon: 🤖
    title: Auto Crop & Manual Crop
    details: "Pilihan penggunaan AI dalam Cropping area Cargo: OpenCV (server-side), MediaPipe (client-side), atau Manual cropping."
  - icon: 📊
    title: Customs Dashboard
    details: "Monitoring real-time untuk petugas bea cukai dengan metrik dan panel detail"
  - icon: 🔄
    title: Konsolidasi Laporan
    details: "Sinkronisasi data antar Workstation ke Central Hub, dan ke Cloud"
---

## Fitur Utama

- **Manajemen Manifest:** Pengelolaan data kargo melalui input manual atau impor massal via Excel.
- **Screening Real-time:** Pengambilan gambar otomatis dari kamera Top View dan Side View saat keputusan direkam.
- **Penyimpanan Lokal (SQLite):** Seluruh data kargo, riwayat scan, dan pengaturan tersimpan di database `xray.db`.
- **Penyimpanan Gambar:** Citra X-Ray disimpan sebagai file PNG lossless di folder `uploads/` pada server.
- **Deteksi Koli Otomatis:** Integrasi AI dengan OpenCV, MediaPipe, atau mode manual.
- **Offline First:** Seluruh operasional inti berjalan tanpa koneksi internet.
- **Multi-Tingkat:** Mendukung arsitektur Workstation, Hub, dan Cloud.

## Peran Aplikasi

| Peran | Deskripsi |
|---|---|
| **Workstation** | Input data screening dan scanning, melekat pada sistem XRay. |
| **Hub** | Server pusat yang mengkonsolidasi data dari beberapa Workstation. |
| **Cloud** | Server tingkat atas untuk agregasi data antar Hub dan pelaporan terpusat. |

## Hak Akses

| Role | Akses |
|---|---|
| **USER** | Data Cargo, Screening, Scan History, Settings |
| **CUSTOMS** | Hanya Customs Dashboard |
| **Admin** | Semua fitur + Manajemen Pengguna |
