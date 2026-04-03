import { useState } from "react";
import "../home.css"; // pastikan path sesuai

export default function Contact() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const handleWhatsApp = () => {
    const nomor = "62882016503408"; // ganti dengan nomor WA tujuan
    const pesan = `Halo, saya ${nama} (${email}) ingin menghubungi Ridwan Furniture.`;
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    const tujuan = "ilhamsurya0602@gmail.com";
    const subject = "Kontak dari Website";
    const body = `Halo, saya ${nama} (${email}) ingin menghubungi Ridwan Furniture.`;
    const url = `mailto:${tujuan}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Hubungi Kami</h2>

        <label>Nama</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan nama Anda"
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email Anda"
        />

        <div className="contact-buttons">
          <button onClick={handleWhatsApp} className="btn-whatsapp">
            Kirim via WhatsApp
          </button>
          <button onClick={handleEmail} className="btn-email">
            Kirim via Email
          </button>
        </div>
      </div>
    </section>
  );
}
