# Input Data Manifest (Cargo)

Halaman **Data Cargo** adalah halaman utama setelah login. Digunakan untuk mengelola data manifest kargo.

## Ringkasan Dashboard

Empat kartu ringkasan menampilkan statistik:

| Kartu | Deskripsi |
|---|---|
| **Total MAWB** | Jumlah Master Air Waybill unik |
| **Total HAWB** | Jumlah House Air Waybill unik |
| **Incomplete Scan** | Jumlah kargo yang belum selesai discan |
| **Complete Scan** | Jumlah kargo yang sudah selesai discan seluruhnya |

## Menambah Data Cargo

1. Klik tombol **+ Tambah Data** (di atas tabel)
2. Isi data pada form yang muncul:
   - **ULD No** — Nomor Unit Load Device
   - **MAWB** (wajib) — Master Air Waybill
   - **HAWB** — House Air Waybill
   - **Tot Pcs** — Jumlah piece yang dideklarasikan
   - **Tot Weight** — Berat total (kg)
   - **Goods Desc** — Deskripsi barang
3. Klik **Simpan**

## Mengedit Data Cargo

Klik ikon **Edit (pensil)** pada baris cargo yang ingin diubah. Konfirmasi dengan password untuk menyimpan perubahan.

## Menghapus Data Cargo

- **Hapus satu:** Klik ikon **Hapus (trash)** pada baris cargo
- **Hapus massal:** Centang beberapa baris, lalu klik **Hapus Massal**
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

Template import tersedia di folder `templates/Excel Template v2.xls`.

## Export ke Excel

Klik tombol **Export Excel** untuk mengunduh data cargo yang sedang difilter ke file `.xlsx` dengan format profesional (header biru, warna baris selang-seling, conditional formatting untuk status scan).

## Pencarian & Filter

- **Kotak pencarian:** Cari berdasarkan MAWB, ULD No, atau HAWB
- **Filter Status:** All / Complete / Incomplete
- **Atur jumlah baris:** 10, 20, 50, 100, atau All

## Atur Kolom Tampilan

Klik tombol **Kolom** untuk menampilkan/menyembunyikan kolom tertentu (ULD No, Total Weight, Goods Description, Actual Pcs, Released Pcs, Rejected Pcs).

## Fitur Lainnya

| Tombol | Fungsi |
|---|---|
| **Send to CEISA** | Menandai kargo sebagai sudah dikirim ke sistem bea cukai |
| **Sync API** | Sinkronisasi data dari API eksternal (simulasi) |
| **Remove Duplicates** | Hapus data duplikat berdasarkan kombinasi MAWB + HAWB |
| **Remove Blank** | Hapus data yang MAWB dan HAWB-nya kosong |
| **Print Label** | Cetak label IATA cargo dengan barcode |

## Cetak Label Kargo

Klik tombol **Print Label** pada baris cargo. Akan muncul tampilan cetak dengan barcode yang berisi nomor-nomor referensi kargo.
