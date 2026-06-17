import Image from "next/image";

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

  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#2F2F2F]">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#F7F4ED]/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="PotAndPrickle"
              width={80}
              height={80}
              className="w-12 h-12 md:w-16 md:h-16"
            />

            <div>
              <h1 className="font-bold text-lg md:text-xl">
                PotAndPrickle
              </h1>

              <p className="text-xs text-gray-500">
                Hadiah yang terus tumbuh
              </p>
            </div>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6F8F72] text-white px-4 py-2 md:px-5 md:py-3 rounded-xl text-sm md:text-base hover:opacity-90 transition"
          >
            WhatsApp
          </a>

        </div>
      </nav>


      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="order-1 md:order-2">
            <Image
              src="/hero-cactus.jpg"
              alt="PotAndPrickle"
              width={1000}
              height={700}
              className="w-full rounded-3xl shadow-xl object-cover"
            />
          </div>


          <div className="order-2 md:order-1">

            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              🌵 Tanaman Hias & Kado Unik
            </span>


            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Tanaman Kecil,
              <br />
              Kesan yang Besar
            </h1>


            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
              Kaktus dan sukulen pilihan yang cocok untuk hadiah,
              dekorasi meja kerja, maupun momen spesial yang ingin
              dikenang lebih lama.
            </p>


            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <a
                href="#koleksi"
                className="bg-[#6F8F72] text-white px-6 py-3 rounded-xl text-center"
              >
                Lihat Koleksi
              </a>


              <a
                href="#tentang"
                className="border border-[#6F8F72] px-6 py-3 rounded-xl text-center"
              >
                Tentang Kami
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
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
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


      {/* Tentang */}
      <section
        id="tentang"
        className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20 text-center"
      >

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Tentang PotAndPrickle
        </h2>


        <p className="text-base md:text-lg text-gray-600 leading-8">
          Kami percaya hadiah terbaik bukan hanya indah saat
          diterima, tetapi juga terus tumbuh dan menjadi bagian
          dari keseharian penerimanya.
        </p>

      </section>


      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-16 md:pb-20">

        <div className="bg-[#6F8F72] text-white rounded-3xl p-6 md:p-12 text-center">

          <h2 className="text-2xl md:text-4xl font-bold">
            Siap Memberikan Hadiah yang Berbeda?
          </h2>


          <p className="mt-4 opacity-90 max-w-2xl mx-auto">
            Temukan tanaman yang cocok untuk hadiah,
            dekorasi ruangan, maupun meja kerja Anda.
          </p>


          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-[#6F8F72] font-semibold px-6 py-3 rounded-xl"
          >
            Chat WhatsApp
          </a>

        </div>

      </section>


      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        © 2026 PotAndPrickle. Tanaman kecil untuk momen yang besar.
      </footer>

    </main>
  );
}	
