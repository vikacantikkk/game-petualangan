
import { useState } from "react";
import "./App.css";
import { menu } from "./main";

type MenuItem = {
  nama: string;
  ikon: string;
};

const ASSETS = "/assets/";

export default function App() {
  const [halamanAktif, setHalamanAktif] =
    useState<string>("Beranda");

  const [mulai, setMulai] = useState<boolean>(false);

  return (
    <main className="game-screen">
      <div className="sky-glow" />

      <img
        className="world-background"
        src={`${ASSETS}world-background.png`}
        alt=""
      />

      <header className="topbar">
        <section className="student-card">
          <div className="avatar">👦🏻</div>

          <div className="student-info">
            <span>Siswa</span>
            <strong>Nanaa</strong>

            <div className="level-track">
              <i />
            </div>

            <span>Level 3</span>
          </div>
        </section>

        <div className="currencies">
          <div className="currency">
            <span>⭐</span>
            <b>120</b>
            <i>+</i>
          </div>

          <div className="currency">
            <span>💎</span>
            <b>45</b>
            <i>+</i>
          </div>

          <button
            className="settings"
            aria-label="Pengaturan"
            type="button"
          >
            ⚙
          </button>
        </div>
      </header>

      <aside className="daily-mission">
        <div className="clipboard">📋</div>

        <div className="mission-copy">
          <strong>Misi Hari Ini</strong>

          <span>
            Selesaikan 3 level
            <br />
            dengan nilai sempurna
          </span>

          <div className="mission-progress">
            <i />
          </div>
        </div>

        <b className="mission-count">1/3</b>
      </aside>

      <section className="hero-content">
        <img
          className="game-logo"
          src="/assets/logo.png"
          alt="Petualangan Bangun Datar"
        />

        <button
          className="start-button"
          type="button"
          onClick={() => setMulai(true)}
        >
          <span className="play-icon">▶</span>
          {mulai
            ? "Petualangan Dimulai!"
            : "Mulai Petualangan"}
        </button>
      </section>

      <img
        className="left-sign"
        src={`${ASSETS}signboard.png`}
        alt="Papan Kenali Bangun Datar"
      />

      <img
        className="flag-hill"
        src={`${ASSETS}flag-hill.png`}
        alt=""
      />

      <img
        className="hero-character"
        src={`${ASSETS}character-triangle.png`}
        alt="Karakter segitiga"
      />

      <img
        className="islands"
        src={`${ASSETS}floating-islands.png`}
        alt=""
      />

      <img
        className="shape-friends"
        src={`${ASSETS}geometric-shapes.png`}
        alt="Bentuk-bentuk geometri"
      />

      {mulai && (
        <section className="start-notice">
          <h2>Level 1: Kenali Bangun Datar</h2>

          <p>
            Siap mengenal segitiga, persegi, dan lingkaran?
          </p>

          <button
            type="button"
            onClick={() => setMulai(false)}
          >
            Kembali ke Beranda
          </button>
        </section>
      )}

      <nav className="bottom-nav" aria-label="Navigasi utama">
        {menu.map((item: MenuItem) => (
          <button
            key={item.nama}
            type="button"
            className={
              halamanAktif === item.nama
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setHalamanAktif(item.nama)}
          >
            <span className="nav-icon">{item.ikon}</span>
            <span>{item.nama}</span>
          </button>
        ))}
      </nav>
    </main>
  );
}
