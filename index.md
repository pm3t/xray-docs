---
layout: home

hero:
  name: X-Ray Offline System
  text: Technohub X-Ray Solution v2.4
  tagline: Sistem pemeriksaan kargo berbasis web dengan dukungan AI, penyimpanan lokal, dan integrasi multi-workstation.
  actions:
    - theme: brand
      text: Mulai Gunakan
      link: /getting-started
    - theme: alt
      text: Panduan Fitur
      link: /guide/input-data

features:
  - icon: 📦
    title: Manajemen Manifest
    details: "Kelola data kargo melalui input manual atau impor massal via Excel. Dukungan MAWB, HAWB, ULD, dan tracking status scan."
  - icon: 🎥
    title: Screening Real-time
    details: "Pengambilan gambar otomatis dari kamera Top View dan Side View dengan dukungan AI untuk deteksi koli."
  - icon: 🗄️
    title: Repository Lokal
    details: "Seluruh data kargo, riwayat scan, dan gambar tersimpan di SQLite dan folder server — offline first."
  - icon: 🤖
    title: Deteksi AI
    details: "Tiga metode deteksi koli: OpenCV (server-side), MediaPipe (client-side), atau Manual cropping."
  - icon: 📊
    title: Customs Dashboard
    details: "Monitoring real-time untuk petugas bea cukai dengan metrik, panel detail, dan auto-refresh."
  - icon: 🔄
    title: Multi-Workstation
    details: "Sinkronisasi data antar Workstation, Hub, dan Cloud dengan dukungan PostgreSQL."
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
| **Workstation** | Stasiun kerja pemeriksaan X-Ray individual. Input data screening dan scanning. |
| **Hub** | Server pusat yang mengkonsolidasi data dari beberapa Workstation. |
| **Cloud** | Server tingkat atas untuk agregasi data antar Hub dan pelaporan terpusat. |

## Hak Akses

| Role | Akses |
|---|---|
| **USER** | Data Cargo, Screening, Scan History, Settings |
| **CUSTOMS** | Hanya Customs Dashboard |
| **Admin** | Semua fitur + Manajemen Pengguna |
