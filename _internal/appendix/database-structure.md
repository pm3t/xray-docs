# Struktur Database

## Tabel `cargo`

| Kolom | Tipe | Deskripsi |
|---|---|---|
| id | TEXT | Primary key |
| uldNo | TEXT | Nomor ULD |
| mawb | TEXT | Master Air Waybill |
| hawb | TEXT | House Air Waybill |
| totalPcs | INTEGER | Jumlah piece dideklarasikan |
| totalWeight | REAL | Berat total (kg) |
| goodsDescription | TEXT | Deskripsi barang |
| actualPcs | INTEGER | Jumlah piece hasil scan |
| isSentToCeisa | INTEGER | Status kirim ke CEISA |
| smu | TEXT | Nomor SMU |
| airline | TEXT | Kode maskapai |
| flightNumber | TEXT | Nomor penerbangan |
| origin | TEXT | Asal |
| destination | TEXT | Tujuan |

## Tabel `scan_history`

| Kolom | Tipe | Deskripsi |
|---|---|---|
| scanId | INTEGER | Primary key auto increment |
| mawb | TEXT | MAWB hasil scan |
| hawb | TEXT | HAWB hasil scan |
| uldNo | TEXT | Nomor ULD |
| totalWeight | REAL | Berat total |
| topViewImage | TEXT | Path gambar Top View |
| sideViewImage | TEXT | Path gambar Side View |
| fotoBarang | TEXT | Path foto barang |
| qty | INTEGER | Jumlah piece |
| status | TEXT | Finished XRay / Pending XRay |
| timestamp | TEXT | Waktu submit |
| submittedToCustoms | INTEGER | Status kirim ke bea cukai |
| userID | TEXT | ID operator |
| cropImages | TEXT | JSON array gambar crop |
| workstationId | TEXT | ID workstation asal |
| startTime | TEXT | Waktu mulai screening |
