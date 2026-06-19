"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
const products = [
{
name: "Kaktus Mini",
description: "Cocok untuk meja kerja dan ruangan minimalis.",
price: "Mulai Rp25.000",
image: "/product-1.jpeg",
},
{
name: "Sukulen Mini",
description: "Mudah dirawat dan cocok untuk pemula.",
price: "Mulai Rp30.000",
image: "/product-2.jpeg",
},
{
name: "Paket Kado Wisuda",
description: "Hadiah unik dengan kartu ucapan personal.",
price: "Mulai Rp75.000",
image: "/product-3.jpeg",
},
];

const whatsapp = "https://wa.me/6285156023275";
const [recipient, setRecipient] = useState("Lyandra");
const [occasion, setOccasion] = useState("Wisuda");
const [message, setMessage] = useState(
"Selamat Wisuda 🎓"
);

return (
<main className="min-h-screen bg-[#F7F4ED] text-[#2F2F2F]">

  {/* Navbar */}
  <nav className="sticky top-0 z-50 bg-[#F7F4ED]/90 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="PotAndPrickle" width={80} height={80} className="w-12 h-12 md:w-16 md:h-16" />

        <div>
          <h1 className="font-bold text-lg md:text-xl">
            PotAndPrickle
          </h1>

          <p className="text-xs text-gray-500">
            Hadiah yang terus tumbuh
          </p>
        </div>
      </div>

      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#6F8F72] text-white px-4 py-2 md:px-5 md:py-3 rounded-xl text-sm md:text-base hover:opacity-90 transition">
        WhatsApp
      </a>

    </div>
  </nav>

  {/* Hero */}
  <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">

    <div className="flex flex-wrap gap-3 mt-6">

      <span className="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
        🎁 Custom Card Gratis
      </span>

      <span className="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
        🌵 Mudah Dirawat
      </span>

      <span className="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
        📦 Packing Aman
      </span>

    </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      <div className="order-1 md:order-2">
        <Image src="/hero-cactus.jpg" alt="PotAndPrickle" width={1000} height={700} className="w-full rounded-3xl shadow-xl object-cover" />
      </div>

      <div className="order-2 md:order-1">

        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          🌵 Tanaman Hias & Kado Unik
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hadiah yang
          <br />
          Terus Tumbuh 🌵
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Kaktus dan sukulen dengan kartu ucapan personal
          untuk wisuda, ulang tahun, pernikahan,
          dan momen spesial lainnya.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <a href="#koleksi" className="bg-[#6F8F72] text-white px-6 py-3 rounded-xl text-center">
            Lihat Koleksi
          </a>

          <a href="#card-generator" className="border border-[#6F8F72] px-6 py-3 rounded-xl text-center">
            Custom Card
          </a>

        </div>

      </div>

    </div>
  </section>

  {/* Benefit */}
  <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      {[
      {
      icon: "🌱",
      title: "Mudah Dirawat",
      desc: "Cocok untuk pemula dan orang yang sibuk.",
      },
      {
      icon: "🎁",
      title: "Cocok untuk Hadiah",
      desc: "Lebih berkesan dan tahan lama dibanding bunga.",
      },
      {
      icon: "📦",
      title: "Packing Aman",
      desc: "Dikemas dengan perlindungan ekstra.",
      },
      ].map((item) => (
      <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="text-2xl mb-3">
          {item.icon}
        </div>

        <h3 className="font-semibold text-lg">
          {item.title}
        </h3>

        <p className="text-gray-600 mt-2">
          {item.desc}
        </p>

      </div>
      ))}

    </div>

  </section>

  <section id="card-generator" className="max-w-6xl mx-auto px-4 py-24">

    <div className="text-center mb-12">

      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
        GRATIS CUSTOM CARD
      </span>

      <h2 className="text-4xl font-bold mt-4">
        Buat Kartu Ucapan Anda
      </h2>

      <p className="text-gray-600 mt-4">
        Coba isi nama dan pesan untuk melihat hasilnya.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* Form */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <div className="space-y-5">

          <div>

            <label className="block font-medium mb-2">
              Nama Penerima
            </label>

            <input type="text" value={recipient} onChange={(e)=>
            setRecipient(e.target.value)
            }
            className="w-full border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block font-medium mb-2">
              Jenis Momen
            </label>

            <select value={occasion} onChange={(e)=>
              setOccasion(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3"
              >

              <option>Wisuda</option>
              <option>Ulang Tahun</option>
              <option>Pernikahan</option>
              <option>New Journey</option>
              <option>Terima Kasih</option>

            </select>

          </div>

          <div>

            <label className="block font-medium mb-2">
              Pesan
            </label>

            <textarea rows={4} value={message} onChange={(e)=>
		      setMessage(e.target.value)
		    }
		    className="w-full border rounded-xl px-4 py-3"
		  />

		</div>

	      </div>

	    </div>

	    {/* Preview */}

	    <div className="flex justify-center">

	      <div
		className="
		  bg-white
		  rounded-3xl
		  shadow-xl
		  p-8
		  w-full
		  max-w-md
		"
	      >

		<div className="border-2 border-dashed border-[#6F8F72] rounded-2xl p-8 text-center">

		  <p className="uppercase text-sm tracking-widest text-gray-500">
		    {occasion}
		  </p>

		  <h3 className="text-3xl font-bold mt-4">
		    {recipient}
		  </h3>

		  <div className="w-16 h-[2px] bg-[#6F8F72] mx-auto my-6" />

		  <p className="text-lg leading-relaxed">
		    {message}
		  </p>

		  <p className="mt-8 text-sm text-gray-500">
		    🌵 PotAndPrickle
		  </p>

		</div>

	      </div>

	    </div>
	    
	    		<a
		  href={`https://wa.me/6285156023275?text=${encodeURIComponent(
		    `Halo PotAndPrickle,

		Saya ingin memesan:

		Nama Penerima: ${recipient}
		Momen: ${occasion}
		Pesan: ${message}`
		  )}`}
		  target="_blank"
		  rel="noopener noreferrer"
		  className="
		    mt-6
		    block
		    text-center
		    bg-[#6F8F72]
		    text-white
		    py-3
		    rounded-xl
		  "
		>
		  Pesan Dengan Card Ini
		</a>

	  </div>

	</section>


	{/* Produk */}
	<section
	  id="koleksi"
	  className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-24 md:pb-32"
	>
	  <h2 className="text-3xl md:text-4xl font-bold text-center">
	    Koleksi Unggulan
	  </h2>

	  <p className="text-center text-gray-600 mt-3 mb-12">
	    Produk favorit pelanggan PotAndPrickle
	  </p>


	  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

	    {products.map((product) => (

	      <div
		key={product.name}
		className="
		  bg-white 
		  rounded-2xl 
		  p-6 
		  shadow-sm 
		  hover:shadow-lg 
		  transition 
		  flex 
		  flex-col
		  h-full
		"
	      >

		{/* Image */}
		<div className="relative h-56 w-full mb-5 overflow-hidden rounded-xl">

		  <Image
		    src={product.image}
		    alt={product.name}
		    fill
		    sizes="
		      (max-width: 640px) 100vw,
		      (max-width: 1024px) 50vw,
		      33vw
		    "
		    className="
		      object-cover 
		      hover:scale-105 
		      transition 
		      duration-300
		    "
		  />

		</div>


		{/* Content */}
		<div className="flex flex-col flex-1">

		  <h3 className="text-xl font-semibold">
		    {product.name}
		  </h3>


		  <p className="
		    text-gray-600 
		    mt-3
		    min-h-[48px]
		    leading-relaxed
		  ">
		    {product.description}
		  </p>


		  {/* Price */}
		  <p className="
		    font-bold 
		    text-lg 
		    mt-auto
		    pt-6
		  ">
		    {product.price}
		  </p>


		  {/* Button */}
		  <a
		    href={whatsapp}
		    target="_blank"
		    rel="noopener noreferrer"
		    className="
		      block
		      text-center
		      w-full
		      mt-6
		      bg-[#6F8F72]
		      text-white
		      py-3
		      rounded-xl
		      hover:opacity-90
		      transition
		    "
		  >
		    Pesan Sekarang
		  </a>


		</div>

	      </div>

	    ))}

	  </div>

	</section>
      
      <section className="max-w-6xl mx-auto px-4 py-24">

	  <div className="text-center mb-14">
	    <p className="text-[#6F8F72] font-medium">
	      MUDAH & CEPAT
	    </p>

	    <h2 className="text-4xl font-bold mt-2">
	      Cara Pemesanan
	    </h2>
	  </div>

	  <div className="grid md:grid-cols-3 gap-8">

	    {[
	      {
		number: "01",
		title: "Pilih Produk",
		desc: "Pilih tanaman atau paket hadiah yang Anda sukai."
	      },
	      {
		number: "02",
		title: "Custom Ucapan",
		desc: "Tambahkan nama penerima dan pesan spesial."
	      },
	      {
		number: "03",
		title: "Kami Kirim",
		desc: "Hadiah dikemas rapi dan dikirim ke tujuan."
	      }
	    ].map((item) => (
	      <div
		key={item.number}
		className="bg-white rounded-3xl p-8 shadow-sm"
	      >
		<span className="text-5xl font-bold text-[#C7D8C6]">
		  {item.number}
		</span>

		<h3 className="text-xl font-semibold mt-4">
		  {item.title}
		</h3>

		<p className="text-gray-600 mt-3">
		  {item.desc}
		</p>
	      </div>
	    ))}
	  </div>

	</section>
	
	{/* Care Guide */}
	<section className="py-24 bg-[#F7F4ED]">

	  <div className="max-w-6xl mx-auto px-4">

	    <div className="text-center mb-16">

	      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
		🌵 Perawatan Mudah
	      </span>

	      <h2 className="mt-5 text-3xl md:text-5xl font-bold">
		Mudah Dirawat untuk Siapa Saja
	      </h2>

	      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
		Bahkan jika penerima belum pernah merawat tanaman sebelumnya.
		Kaktus dan sukulen hanya membutuhkan sedikit perhatian.
	      </p>

	    </div>


	    <div className="grid md:grid-cols-3 gap-8">

	      <div className="bg-white rounded-3xl p-8 shadow-sm">

		<div className="text-5xl mb-5">
		  ☀️
		</div>

		<h3 className="font-bold text-xl mb-3">
		  Suka Cahaya Terang
		</h3>

		<p className="text-gray-600 leading-relaxed">
		  Letakkan dekat jendela atau area yang terang.
		  Tidak perlu perawatan khusus setiap hari.
		</p>

	      </div>


	      <div className="bg-white rounded-3xl p-8 shadow-sm">

		<div className="text-5xl mb-5">
		  💧
		</div>

		<h3 className="font-bold text-xl mb-3">
		  Siram Seminggu Sekali
		</h3>

		<p className="text-gray-600 leading-relaxed">
		  Cukup disiram saat media benar-benar kering.
		  Cocok untuk orang yang sibuk bekerja.
		</p>

	      </div>


	      <div className="bg-white rounded-3xl p-8 shadow-sm">

		<div className="text-5xl mb-5">
		  🌱
		</div>

		<h3 className="font-bold text-xl mb-3">
		  Awet Bertahun-Tahun
		</h3>

		<p className="text-gray-600 leading-relaxed">
		  Dengan perawatan sederhana, tanaman bisa tumbuh
		  dan menjadi kenang-kenangan yang bertahan lama.
		</p>

	      </div>

	    </div>


	    <div className="mt-16 bg-gradient-to-r from-[#6F8F72] to-[#88A488] rounded-3xl p-8 md:p-12 text-center text-white">

	      <h3 className="text-2xl md:text-3xl font-bold">
		🎁 Hadiah yang Tidak Layu Setelah Seminggu
	      </h3>

	      <p className="mt-4 max-w-2xl mx-auto opacity-90">
		Berbeda dengan bunga potong, kaktus dan sukulen dapat
		terus tumbuh selama bertahun-tahun sebagai pengingat
		momen spesial yang pernah diberikan.
	      </p>

	    </div>

	  </div>

	</section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">

	  <div
	    className="
	      relative
	      overflow-hidden
	      rounded-[32px]
	      bg-[#6F8F72]
	      p-8 md:p-16
	      text-white
	    "
	  >

	    {/* Background Decoration */}

	    <div className="absolute -right-10 -top-10 text-[180px] opacity-10">
	      🌵
	    </div>

	    <div className="absolute -left-10 -bottom-10 text-[180px] opacity-10">
	      🎁
	    </div>

	    <div className="relative z-10 text-center">

	      <span
		className="
		  inline-block
		  bg-white/20
		  px-4
		  py-2
		  rounded-full
		  text-sm
		"
	      >
		🌱 Hadiah Unik & Berkesan
	      </span>

	      <h2
		className="
		  mt-6
		  text-3xl
		  md:text-5xl
		  font-bold
		  leading-tight
		"
	      >
		Berikan Hadiah yang
		<br />
		Terus Tumbuh
	      </h2>

	      <p
		className="
		  max-w-2xl
		  mx-auto
		  mt-6
		  text-white/90
		  text-base
		  md:text-lg
		"
	      >
		Cocok untuk wisuda, ulang tahun,
		anniversary, maupun hadiah untuk
		rekan kerja dan orang tersayang.
	      </p>

	      <div
		className="
		  mt-10
		  flex
		  flex-col
		  sm:flex-row
		  gap-4
		  justify-center
		"
	      >

		<a
		  href={whatsapp}
		  target="_blank"
		  rel="noopener noreferrer"
		  className="
		    bg-white
		    text-[#6F8F72]
		    font-semibold
		    px-8
		    py-4
		    rounded-xl
		    hover:scale-105
		    transition
		  "
		>
		  Pesan via WhatsApp
		</a>

		<a
		  href="#koleksi"
		  className="
		    border
		    border-white
		    px-8
		    py-4
		    rounded-xl
		    hover:bg-white/10
		    transition
		  "
		>
		  Lihat Koleksi
		</a>

	      </div>

	      <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto">

		  <div>
		    <div className="text-2xl">
		      🎁
		    </div>

		    <p className="text-sm mt-2">
		      Custom Card
		    </p>
		  </div>

		  <div>
		    <div className="text-2xl">
		      🌵
		    </div>

		    <p className="text-sm mt-2">
		      Mudah Dirawat
		    </p>
		  </div>

		  <div>
		    <div className="text-2xl">
		      📦
		    </div>

		    <p className="text-sm mt-2">
		      Packing Aman
		    </p>
		  </div>

		</div>

	    </div>

	  </div>

	</section>

	<footer className="border-t border-gray-200">

	  <div
	    className="
	      max-w-6xl
	      mx-auto
	      px-4
	      py-10
	      text-center
	    "
	  >

	    <Image
	      src="/logo.png"
	      alt="PotAndPrickle"
	      width={70}
	      height={70}
	      className="mx-auto"
	    />

	    <h3 className="font-bold mt-4">
	      PotAndPrickle
	    </h3>

	    <p className="text-gray-500 mt-2">
	      Tanaman kecil untuk momen yang besar.
	    </p>

	    <div className="mt-6 flex justify-center gap-6 text-sm">

	      <a href="#koleksi">
		Koleksi
	      </a>
	      
	      <a href={whatsapp}>
		WhatsApp
	      </a>

	    </div>

	    <p className="text-xs text-gray-400 mt-8">
	      © 2026 PotAndPrickle. All Rights Reserved.
	    </p>

	  </div>

	</footer>

	<a
	  href={whatsapp}
	  target="_blank"
	  rel="noopener noreferrer"
	  className="
	    fixed
	    bottom-5
	    right-5
	    z-50
	    bg-[#25D366]
	    text-white
	    px-5
	    py-4
	    rounded-full
	    shadow-xl
	    hover:scale-105
	    transition
	  "
	>
	  💬 Chat
	</a>

    </main>
  );
}	
