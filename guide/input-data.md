# Input Data Manifest (Cargo)

Halaman **Data Cargo** adalah halaman utama setelah login. Digunakan untuk mengelola data manifest kargo.

## Ringkasan Dashboard

<img src="/images/dashboard-cargo.png" alt="dashboard" width="800">

Empat kartu ringkasan menampilkan statistik:

| Kartu | Deskripsi |
|---|---|
| **Total MAWB** | Jumlah Master Air Waybill unik |
| **Total HAWB** | Jumlah House Air Waybill unik |
| **Incomplete Scan** | Jumlah kargo yang belum selesai discan |
| **Complete Scan** | Jumlah kargo yang sudah selesai discan seluruhnya |

## Menambah Data Cargo

1. Klik tombol <img src="/images/tombol-add-new.png" width="100">
2. Isi data pada form berikut:

<img src="/images/add-new-cargo.png" width="500">

   - **ULD No** — Nomor Unit Load Device
   - **MAWB** (wajib) — Master Air Waybill
   - **HAWB** — House Air Waybill
   - **Tot Pcs** — Jumlah piece yang dideklarasikan
   - **Tot Weight** — Berat total (kg)
   - **Goods Desc** — Deskripsi barang
3. Klik **Save Cargo**

## Mengedit Data Cargo

Klik ikon **Edit** <img src="/images/tombol-edit.png" width="50"> pada baris cargo yang ingin diubah. Konfirmasi dengan password untuk menyimpan perubahan.

## Menghapus Data Cargo

- **Hapus satu:** Klik ikon **Hapus (trash)** <img src="/images/tombol-hapus.png" width="50"> pada baris cargo
- **Hapus massal:** Centang beberapa baris, lalu klik **Delete Selected** <img src="/images/tombol-hapus-masal.png" width="200"> 
- Semua penghapusan memerlukan konfirmasi password

## Import Data dari Excel

1. Klik tombol **Import Excel**
2. Pilih file `.xls` atau `.xlsx` dengan format template:

| Kolom di Excel | Keterangan |
|---|---|
| `ULD No` | Nomor ULD |
| `MAWB` | Master Air Waybill |
| `HAWB` | House Air Waybill |
| `Tot Pcs` | Total Koli |
| `Tot Weight` | Total Berat |
| `Nature of Goods` | Deskripsi Barang |

3. Data akan langsung ditambahkan ke tabel

Template import tersedia <a href="template/Excel Template v2.xls">di tautan ini</a>.

## Export ke Excel

Klik tombol **Export Excel** <img src="/images/tombol-export-xls.png" width="150"> untuk mengunduh data cargo yang sedang difilter ke file `.xlsx` .

## Pencarian & Filter

- **Kotak pencarian:** Cari berdasarkan MAWB, ULD No, atau HAWB
- **Filter Status:** All / Complete / Incomplete
- **Atur jumlah baris:** 10, 20, 50, 100, atau All

## Atur Kolom Tampilan

Klik tombol **Kolom** untuk menampilkan/menyembunyikan kolom tertentu (ULD No, Total Weight, Goods Description, Actual Pcs, Released Pcs, Rejected Pcs).

## Fitur Lainnya

| Tombol | Fungsi |
|---|---|
| **Send to CEISA** <img src="/images/tombol-hapus-masal.png" width="150"> |  Kirim ke sistem bea cukai |
| **Sync API** <img src="/images/tombol-synch-api.png" width="150">| Sinkronisasi data dari API eksternal, misal: Cargowise, Existing warehouse system, dst|
| **Remove Duplicates** <img src="/images/tombol-remove-duplicate.png" width="150">| Hapus data duplikat berdasarkan kombinasi MAWB + HAWB |
| **Remove Blank** <img src="/images/tombol-remove-blank.png" width="150">| Hapus data yang MAWB dan HAWB-nya kosong |

