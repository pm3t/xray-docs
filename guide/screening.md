# Screening X-Ray

Modul **Screening** digunakan untuk melakukan pemeriksaan fisik kargo menggunakan mesin X-Ray dan mencatat hasilnya.

## Memulai Screening
1. Dari halaman **Input Data**, klik nomor **MAWB** pada tabel untuk membuka layar screening khusus kargo tersebut.
2. Pastikan kamera/capture card sudah terdeteksi. Live feed akan muncul otomatis di panel TOP VIEW dan SIDE VIEW.

## Penggunaan Kamera
Sistem mendukung dua tampilan kamera secara bersamaan:
* **TOP VIEW:** Tampilan atas kargo.
* **SIDE VIEW:** Tampilan samping kargo.

Anda dapat mengganti sumber kamera menggunakan dropdown di atas setiap panel video.

## Alur Kerja Scan Barcode
1. Cursor akan otomatis fokus pada kolom **MAWB**.
2. Scan barcode MAWB menggunakan scanner.
3. Tekan **Enter**, cursor akan otomatis berpindah ke kolom **HAWB**.
4. Scan barcode HAWB (jika ada).
5. Masukkan jumlah koli (**Actual Pcs**) yang diperiksa.

## Upload Foto Fisik Barang (Opsional)
Klik area **Preview Foto Barang** di panel kiri untuk mengunggah foto fisik barang. Foto akan disimpan bersama data scan.

## Mencatat Hasil Screening
Langsung pilih keputusan akhir — **screenshot dari kedua kamera diambil secara otomatis** saat tombol ditekan:

* **FINISHED XRAY** (Hijau): Barang dinyatakan aman. Proses selesai.
* **PENDING XRAY** (Merah): Barang memerlukan pemeriksaan lebih lanjut.

> Setelah keputusan disimpan, sistem akan mengosongkan input MAWB/HAWB dan kembali fokus ke kolom MAWB untuk item berikutnya.

## Penyimpanan Gambar
Semua gambar (Top View, Side View, Foto Barang) disimpan sebagai file **PNG lossless** di folder `uploads/` pada server. Database hanya menyimpan URL path referensi ke file, bukan data gambar itu sendiri.
