# Riwayat Scan (Repository)

Seluruh riwayat pemeriksaan kargo disimpan dalam modul **Scan History** dan dapat diakses kapan saja.

## Dashboard Statistik
Di bagian atas halaman terdapat empat kartu ringkasan:
* **Total Scans:** Total seluruh pemeriksaan yang tercatat.
* **Total Finished XRay:** Jumlah kargo yang dinyatakan selesai diperiksa.
* **Total Pending XRay:** Jumlah kargo yang tertahan.
* **Submit ke CEISA:** Jumlah data yang sudah dikirim *(Future Development)*.

## Melihat Riwayat
1. Buka menu **Scan History**.
2. Daftar hasil scan ditampilkan dengan status badge:
    * 🟢 **Finished XRay**
    * 🔴 **Pending XRay**
3. Gunakan kotak pencarian untuk mencari berdasarkan MAWB atau HAWB.
4. Gunakan dropdown filter untuk memfilter berdasarkan status.

## Detail Snapshot
1. Klik ikon **Mata (Eye)** pada baris data untuk melihat snapshot lengkap.
2. Modal akan menampilkan:
    * **Top View X-Ray** — gambar dari atas.
    * **Side View X-Ray** — gambar dari samping.
    * **Foto Barang** — foto fisik (jika diunggah).
3. Klik pada gambar untuk memperbesar tampilan (Zoom in/out).

> Gambar ditampilkan langsung dari folder `uploads/` pada server. Gambar disimpan dalam format **PNG lossless** (tidak terkompresi).

## Pengulangan Scan (Redo)
Klik ikon **Rotate (↺)** untuk mengulangi proses screening item tersebut. Data scan lama akan tetap tersimpan di riwayat sebagai referensi.

## Menghapus Riwayat
* **Hapus satu:** Klik ikon tempat sampah di baris yang diinginkan.
* **Hapus massal:** Centang beberapa baris, lalu klik tombol **Hapus Terpilih** yang muncul.

## Sinkronisasi ke Bea Cukai (CEISA)
Status: **Future Development**.
