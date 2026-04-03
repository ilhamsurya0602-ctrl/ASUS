import produk1 from "../assets/produk-1.jpg"
import produk2 from "../assets/produk-2.jpg"
import produk3 from "../assets/produk-3.jpg"
import "./../styles/portfolio.css"; // pastikan path benar

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <h2 className="portfolio-title">Portfolio</h2>
        <p className="portfolio-subtitle">
          Berikut adalah koleksi produk furnitur berkualitas dari Ridwan Furniture.
          Setiap karya dibuat dengan detail, bahan pilihan, dan desain modern
          untuk mempercantik ruangan Anda. Kami berkomitmen menghadirkan produk
          yang tidak hanya indah dipandang, tetapi juga nyaman digunakan dan tahan lama.
        </p>

        <div className="grid">
          <div className="card">
            <img src={produk1} alt="Meja Kayu Jati" />
            <h3>Meja Kayu Jati</h3>
          </div>
          <div className="card">
            <img src={produk2} alt="Kursi Minimalis" />
            <h3>Kursi Minimalis</h3>
          </div>
          <div className="card">
            <img src={produk3} alt="Lemari Modern" />
            <h3>Lemari Modern</h3>
          </div>
        </div>
      </div>
    </section>
  );
}


