# Pemecahan Masalah

## Kamera Tidak Terdeteksi

1. Pastikan kamera terhubung dan terinstall drivernya
2. Izinkan akses kamera di browser (klik ikon gembok di address bar)
3. Restart browser
4. Coba browser lain (Chrome/Edge sangat disarankan)

## AI OpenCV Error

1. Pastikan Python 3 terinstall
2. Install OpenCV: `pip install opencv-python numpy`
3. Restart server `node server.mjs`
4. Cek log terminal untuk pesan error detail

## MediaPipe Tidak Berfungsi

1. Pastikan file WASM ada di `public/wasm/`
2. Gunakan browser modern (Chrome 80+)
3. Pastikan model file ada di `public/models/efficientdet_lite0.tflite`

## Sinkronisasi Gagal

1. Cek pengaturan jaringan di tab **Jaringan**
2. Pastikan URL Hub/Cloud benar dan dapat dijangkau
3. Cek koneksi jaringan
4. Cek log server untuk pesan error sinkronisasi

## Lupa Password Admin

Password admin default: `password`. Jika dirubah dan lupa, hubungi administrator sistem atau reset database dengan menghapus file `xray.db`.

## Kesalahan saat Import Excel

1. Pastikan format file `.xls` atau `.xlsx`
2. Gunakan template yang tersedia di folder `templates/`
3. Pastikan nama kolom sesuai dengan template
