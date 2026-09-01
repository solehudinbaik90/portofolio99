---
layout: Post
title: How To Create A Card Matching Game Using React And RxJS
description: Incididunt adipisicing voluptate quis ipsum non culpa fugiat officia. Ea ad nulla laborum cillum ullamco exercitation irure.
date: '2022-10-01'
tags:
  - next-js
  - tailwind
  - guide
images:
  - src: /photos/blog-game.jpg
    alt: image alt attribute
---

Fisika sering kali dianggap sebagai momok yang menakutkan oleh sebagian besar siswa karena tumpukan rumus yang rumit. Padahal, inti dari belajar fisika adalah memahami bagaimana alam semesta ini bekerja melalui fenomena di sekitar kita 🌌. Salah satu konsep paling mendasar yang wajib dikuasai dengan logis adalah Hukum Newton tentang gerak.

### Paragraf

Untuk membuat paragraf, gunakan baris kosong untuk memisahkan satu atau lebih baris teks seperti ini:

Paragraf pertama. Saya benar-benar suka mempelajari fisika lewat kejadian sehari-hari.

Paragraf kedua. *Gaya*, **massa**, ~~mistis~~, Emoji 🍎 🚀, dan `percepatan`. Saya rasa saya akan memakai pendekatan ini untuk memahami semua rumus mulai sekarang.

---

### Judul (Heading)

Untuk membuat judul, tambahkan tanda pagar (#) di depan kata atau frasa. Jumlah tanda pagar yang digunakan harus sesuai dengan level judul. Misalnya, untuk membuat judul level tiga (`<h3>`), gunakan tiga tanda pagar (mis. `### Hukum Newton`).

# Fisika

## Mekanika Klasik

### Hukum Newton

#### Gaya

##### Percepatan

###### Massa

---

### Rumus Fisika

Alih-alih langsung menghafal rumus matematis, mari kita bedah konsepnya lewat kejadian sehari-hari: mengapa tubuh kita terdorong ke depan saat bus tiba-tiba direm mendadak? Semua jawabannya tersimpan dalam Hukum II Newton berikut ⚛️.

  ```text  {4-7} showLineNumbers
  // Hukum II Newton tentang gerak
  // F = gaya (Newton), m = massa (kg), a = percepatan (m/s²)

  // di bawah 3 baris ini adalah rumus inti
  F = m × a

  // Diketahui:
  m = 10 kg
  a = 2 m/s²

  // maka gaya yang dibutuhkan:
  F = 10 × 2
  F = 20 N
  ```

Rumus fisika juga bisa ditampilkan di dalam komponen `<Wide />`.

<Wide>

  ```text  {4-7} showLineNumbers
  // Hukum II Newton tentang gerak
  // F = gaya (Newton), m = massa (kg), a = percepatan (m/s²)

  // di bawah 3 baris ini adalah rumus inti
  F = m × a

  // Diketahui:
  m = 10 kg
  a = 2 m/s²

  // maka gaya yang dibutuhkan:
  F = 10 × 2
  F = 20 N
  ```

</Wide>

---

### Kotak Donasi

Untuk menerima donasi (kontribusi) dari pembaca, kami telah mengembangkan komponen React `<TipJar />` yang berfungsi penuh dan terintegrasi dengan [Saweria](https://saweria.co/msoleh90), yang bisa Anda gunakan di mana saja dalam artikel atau halaman blog Anda.

```md
<TipJar />
```
Ini akan menampilkan komponen TipJar:

<TipJar />

---

### Newsletter

Tema ini terintegrasi dengan [Brevo](https://www.brevo.com/features/email-templates/) untuk membesarkan daftar email pelanggan Anda. Dengan membuat daftar email, Anda bisa memberi tahu pelanggan saat menerbitkan artikel baru, misalnya seri pembahasan fisika berikutnya tentang teori relativitas atau tekanan.

```md
<Newsletter className="bg-omega-800 p-10" />
```
Ini akan menampilkan komponen Newsletter:

<Newsletter className="bg-omega-800 p-10" />

---

### Gambar

Untuk menambahkan gambar, tambahkan tanda seru (!), diikuti teks alternatif dalam kurung siku, dan path atau URL gambar dalam kurung. Anda juga bisa menambahkan judul dalam tanda kutip setelah path atau URL.

```md
![Apel jatuh yang menginspirasi Newton](/photos/blog-newton-apple.jpg "Momen Eureka Newton")
```
Gambar ini dibungkus di dalam komponen `<Wide />`.

<Wide>
  ![Apel jatuh yang menginspirasi Newton](/photos/blog-newton-apple.jpg "Momen Eureka Newton")
</Wide>

### Gambar Bertaut

Untuk menambahkan tautan pada gambar, bungkus sintaks Markdown gambar dalam kurung siku, lalu tambahkan tautan dalam kurung.

```md
[![Apel jatuh yang menginspirasi Newton](/photos/blog-newton-apple.jpg "Momen Eureka Newton")](https://id.wikipedia.org/wiki/Isaac_Newton)
```

---

### Video Youtube

Anda bisa menyematkan video Youtube menggunakan komponen `<Youtube />` dan memasukkan ID video Youtube ke dalamnya.

```md
<Youtube
  id="RKQ4LDHV6KM"
  title="Hukum Newton Tentang Gerak - Penjelasan Lengkap"
/>
```
Ini akan menampilkan sematan di bawah ini:

<Wide>
  <Youtube
    id="87Wb47fmNWA"
    title="Hukum Newton Tentang Gerak - Penjelasan Lengkap"
  />
</Wide>

---

### Tabel

Untuk menambahkan tabel, gunakan tiga tanda hubung (---) atau lebih untuk membuat kepala setiap kolom, dan gunakan garis tegak (|) untuk memisahkan setiap kolom.

Tabel bisa terlihat seperti ini:

| Hukum      | Bunyi Singkat |
| ----------- | ----------- |
| Hukum I      | Benda cenderung mempertahankan posisinya (Inersia)       |
| Hukum II   | F = m × a        |
| Hukum III   | Setiap aksi menimbulkan reaksi yang sama besar       |

Anda bisa mengatur perataan teks pada kolom ke kiri, kanan, atau tengah dengan menambahkan titik dua (:) di sisi kiri, kanan, atau kedua sisi tanda hubung pada baris kepala.

|Besaran |Satuan  | Alat Ukur|
|:--- | ---: | :---:|
|Gaya| Newton (N)|Neraca pegas|
|Massa|Kilogram (kg)|Timbangan|

---

### Daftar (Lists)

Anda bisa mengelompokkan poin ke dalam daftar berurutan dan tidak berurutan.

##### Daftar Berurutan

Untuk membuat daftar berurutan, tambahkan baris dengan angka diikuti titik. Angkanya tidak harus berurutan, tetapi daftar harus dimulai dari angka satu.

1. Pahami Hukum I Newton (Inersia)
2. Pahami Hukum II Newton (F = m × a)
3. Pahami Hukum III Newton (Aksi-Reaksi)
4. Latih dengan soal cerita sehari-hari

Untuk membuat daftar tidak berurutan, tambahkan tanda hubung (-), asterisk (*), atau tanda tambah (+) di depan baris. Indentasikan satu atau lebih poin untuk membuat daftar bersarang.

##### Daftar Tidak Berurutan

- Mobil direm mendadak, penumpang terdorong ke depan 🚗
- Lemari berat lebih susah digeser dibanding kursi kayu
- Roket mendorong gas ke bawah agar terangkat ke atas 🚀
- Bola menggelinding pelan lalu berhenti karena gesekan

##### Daftar Bersarang

Sekarang daftar bersarang, contoh eksperimen sederhana Hukum I Newton:

 1. Pertama, siapkan alat-alat berikut:

      * selembar kertas HVS
      * segelas air
      * meja yang rata

 2. Letakkan gelas berisi air di atas kertas, lalu kertas di atas meja.

 3. Tarik kertas dengan sangat cepat dan ikuti langkah ini:

        pegang ujung kertas
        tarik dengan sentakan cepat dan horizontal
        jangan tarik pelan-pelan
        amati gelas
        gelas akan tetap diam di tempat (atau ulangi jika tumpah)

    Jangan menarik kertas secara perlahan, karena gelas akan ikut tertarik.

Perhatikan lagi bagaimana teks selalu sejajar pada indentasi 4 spasi (termasuk
baris terakhir yang melanjutkan poin 3 di atas).

---

### Tautan (Links)

Untuk membuat tautan, bungkus teks tautan dalam kurung siku (mis. `[PhET Simulations]`) lalu langsung ikuti dengan URL dalam kurung (mis. `([phet.colorado.edu](https://phet.colorado.edu)`).

Berikut tautan ke [simulasi virtual PhET](https://phet.colorado.edu), ke [halaman layanan](services), dan ke [bagian rumus fisika di dokumen ini](#rumus-fisika).

---

### Kutipan (Blockquotes)

Untuk membuat kutipan, tambahkan tanda > di depan paragraf. Hasilnya terlihat seperti ini:

> Jika saya bisa melihat lebih jauh, itu karena saya berdiri
> di atas bahu para raksasa.

Kutipan bisa berisi elemen Markdown lainnya. Tidak semua elemen bisa digunakan — Anda perlu mencoba sendiri untuk melihat mana yang berhasil.

> ###### Kutipan dengan Elemen Lain
>
> - Percepatan bertambah sesuai gaya yang diberikan.
> - Massa benda tetap, meski gayanya berubah.
>
>  *Semuanya* berjalan sesuai dengan **hukum alam**.

---

### HTML

Anda bisa menggunakan tag HTML dalam teks berformat Markdown. Ini membantu jika Anda lebih suka tag HTML tertentu dibanding sintaks Markdown.

```md
Kata **gaya** ini dicetak tebal. Kata <em>percepatan</em> ini dicetak miring.
```

Hasilnya akan terlihat seperti ini:

Kata **gaya** ini dicetak tebal. Kata <em>percepatan</em> ini dicetak miring.

---

### Daftar Tugas (Task Lists)

Daftar tugas memungkinkan Anda membuat daftar poin dengan kotak centang. Untuk membuat daftar tugas, tambahkan tanda hubung (-) dan kurung siku dengan spasi ([ ]) di depan poin. Untuk mencentang kotak, tambahkan huruf x di antara kurung ([x]).

```md
- [x] Pahami Hukum I Newton (Inersia)
- [x] Pahami Hukum II Newton (F = m × a)
- [ ] Pahami Hukum III Newton (Aksi-Reaksi)
- [ ] Kerjakan 5 soal latihan
```

Hasilnya akan terlihat seperti ini:

- [x] Pahami Hukum I Newton (Inersia)
- [x] Pahami Hukum II Newton (F = m × a)
- [ ] Pahami Hukum III Newton (Aksi-Reaksi)
- [ ] Kerjakan 5 soal latihan
