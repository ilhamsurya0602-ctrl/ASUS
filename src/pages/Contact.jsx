import { useState } from "react";
import "../home.css";

export default function Contact() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleWhatsApp = () => {
    if (!nama || !email || !pesan) {
      alert("Harap isi semua field sebelum mengirim!");
      return;
    }
    const nomor = "62882016503408"; 
    const text = `Halo, saya ${nama} (${email}) ingin menghubungi Ridwan Furniture.\nPesan: ${pesan}`;
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    if (!nama || !email || !pesan) {
      alert("Harap isi semua field sebelum mengirim!");
      return;
    }
    const tujuan = "ilhamsurya0602@gmail.com";
    const subject = "Kontak dari Website";
    const body = `Halo, saya ${nama} (${email}) ingin menghubungi Ridwan Furniture.\nPesan: ${pesan}`;
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
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email Anda"
          required
        />

        <label>Pesan</label>
        <textarea
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesan Anda"
          rows="4"
          required
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
