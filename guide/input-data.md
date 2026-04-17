# Input Data Manifest

Halaman **Input Data** adalah langkah pertama dalam alur kerja screening. Di sini, Anda dapat mengelola daftar kargo yang akan diperiksa.

## Dashboard Ringkasan
Di bagian atas halaman terdapat tiga kartu ringkasan:
* **Total MAWB:** Jumlah nomor MAWB unik yang terdaftar.
* **Total HAWB:** Jumlah nomor HAWB unik yang terdaftar.
* **Incomplete Scan:** Jumlah kargo yang jumlah scan aktualnya belum mencapai total koli.

## Menambah Data Manual
1. Klik tombol **Add New** di pojok kanan atas.
2. Isi formulir yang tersedia:
    * **ULD No:** Nomor kontainer (jika ada).
    * **MAWB (SMU):** Nomor Air Waybill utama *(wajib diisi)*.
    * **HAWB:** Nomor Air Waybill rumah.
    * **Total Pcs & Total Weight:** Jumlah koli dan berat barang.
    * **Goods Description:** Deskripsi barang.
3. Klik **Save Cargo**.

## Impor Data dari Excel
Sistem mendukung impor data massal menggunakan template Excel yang telah ditentukan.

1. Download dan gunakan template resmi: **Excel Template v2.xls**.
2. Klik tombol **Import XLS**.
3. Pilih file data Anda. Sistem akan memproses dan menambahkan data ke tabel. Data otomatis tersimpan ke SQLite.

**Kolom yang dikenali template:**

| Kolom di Excel | Keterangan |
|---|---|
| `ULD No` | Nomor ULD |
| `MAWB` | Master Air Waybill |
| `HAWB` | House Air Waybill |
| `Tot Pcs` | Total Koli |
| `Tot Weight` | Total Berat |
| `Nature of Goods` | Deskripsi Barang |

## Aksi Per Baris (di bawah MAWB)
Setiap baris data memiliki ikon aksi kecil:
* **Printer:** Cetak label IATA kargo.
* **Send:** Kirim ke CEISA *(Future Development)*.
* **Edit (Pensil):** Edit data kargo.
* **Hapus (Tempat Sampah):** Hapus data.

## Filter & Pencarian
* Gunakan kotak pencarian untuk mencari berdasarkan MAWB, HAWB, atau ULD No.
* Aktifkan **Show Incomplete Only** untuk menampilkan hanya kargo yang belum selesai di-scan.

## Sinkronisasi API
Status: **To Be Defined (TBD)**.
