import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Kaktus Mini",
      description: "Cocok untuk meja kerja dan ruangan minimalis.",
      price: "Mulai Rp25.000",
    },
    {
      name: "Sukulen Mini",
      description: "Mudah dirawat dan cocok untuk pemula.",
      price: "Mulai Rp30.000",
    },
    {
      name: "Paket Kado Wisuda",
      description: "Hadiah unik dengan kartu ucapan personal.",
      price: "Mulai Rp75.000",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#2F2F2F]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#F7F4ED]/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="PotAndPrickle"
	      width={120}
	      height={120}
            />

            <div>
              <h1 className="font-bold text-xl">
                PotAndPrickle
              </h1>

              <p className="text-xs text-gray-500">
                Hadiah yang terus tumbuh
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6F8F72] text-white px-5 py-3 rounded-xl hover:opacity-90 transition"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              🌵 Tanaman Hias & Kado Unik
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Hadiah yang
              <br />
              Terus Tumbuh
            </h1>

            <p className="text-lg text-gray-600 mt-6">
              PotAndPrickle menghadirkan kaktus dan sukulen
              pilihan yang cocok untuk hadiah, dekorasi meja
              kerja, dan momen spesial yang berkesan.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#koleksi"
                className="bg-[#6F8F72] text-white px-6 py-3 rounded-xl"
              >
                Lihat Koleksi
              </a>

              <a
                href="#tentang"
                className="border border-[#6F8F72] px-6 py-3 rounded-xl"
              >
                Tentang Kami
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/hero-cactus.jpg"
              alt="PotAndPrickle"
              width={800}
              height={600}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">
              Mudah Dirawat
            </h3>

            <p className="text-gray-600 mt-2">
              Cocok untuk pemula dan orang dengan aktivitas
              yang padat.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">
              Cocok untuk Hadiah
            </h3>

            <p className="text-gray-600 mt-2">
              Memberikan kesan lebih lama dibanding bunga
              potong biasa.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">
              Packing Aman
            </h3>

            <p className="text-gray-600 mt-2">
              Dikemas dengan hati-hati agar sampai dalam
              kondisi terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Produk */}
      <section
        id="koleksi"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Koleksi Unggulan
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Pilihan favorit pelanggan PotAndPrickle
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">🌵</div>

              <h3 className="text-xl font-semibold">
                {product.name}
              </h3>

              <p className="text-gray-600 mt-3">
                {product.description}
              </p>

              <p className="font-bold text-lg mt-6">
                {product.price}
              </p>

              <button className="w-full mt-6 bg-[#6F8F72] text-white py-3 rounded-xl">
                Pesan Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="tentang"
        className="max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          Tentang PotAndPrickle
        </h2>

        <p className="text-lg text-gray-600 leading-8">
          PotAndPrickle hadir untuk menghadirkan tanaman kecil
          yang mudah dirawat dan memiliki makna. Kami percaya
          bahwa hadiah terbaik bukan hanya indah saat diterima,
          tetapi juga terus tumbuh dan menjadi bagian dari
          keseharian penerimanya.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-[#6F8F72] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold">
            Siap Memberikan Hadiah yang Berbeda?
          </h2>

          <p className="mt-4 opacity-90">
            Hubungi kami dan temukan tanaman yang cocok untuk
            hadiah maupun dekorasi ruangan Anda.
          </p>

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-[#6F8F72] font-semibold px-6 py-3 rounded-xl"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
        <p>
          © 2026 PotAndPrickle. Tanaman kecil untuk momen yang
          besar.
        </p>
      </footer>
    </main>
  );
}
