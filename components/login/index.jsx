"use client";

import {
  Facebook,
  HamburgerMenuLogo,
  Instagram,
  ModalBack,
  ModalCross,
  Tiktok,
  TinderLogo,
  TinderMiniLogo,
  Twitter,
  Youtube,
} from "@/utils/iconify";

import { login, signup } from "../../actions/login-actions";
import Image from "next/image";
import { useState } from "react";

import "./login.css";

export default function LoginComponent() {
  const [activePanel, setActivePanel] = useState(null);
  const [step, setStep] = useState(0);

  const togglePanel = (panel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  return (
    <div className="login-container">
      <div className="first-layer">
        <div className="login-header">
          <TinderLogo />
          <button className="hamburger">
            <HamburgerMenuLogo />
          </button>
        </div>

        <div className="login-content">
          <h1>Sağa Kaydır</h1>

          <div className="modal-buttons">
            <button
              className="signup-button"
              onClick={() => togglePanel("signup")}
            >
              Hesap Oluştur
            </button>
            <button
              className="login-button"
              onClick={() => togglePanel("login")}
            >
              Oturum aç
            </button>
          </div>

          <Image
            src={"/images/play-store.png"}
            width={206}
            height={80}
            alt="store"
          ></Image>
          <p className="photo-exp">
            Tüm fotoğraflar, açıklayıcı olması amacıyla temsili olarak
            kullanılmıştır
          </p>
        </div>

        {activePanel === "signup" && (
          <div className="modal modal-animation">
            <div className="modal-content">
              {step === 0 ? (
                <button
                  onClick={() => setActivePanel(null)}
                  className="modal-close"
                >
                  <ModalCross />
                </button>
              ) : (
                <button
                  onClick={() => setStep(step - 1)}
                  className="modal-back"
                >
                  <ModalBack />
                </button>
              )}

              <TinderMiniLogo />

              {step === 0 ? (
                <>
                  <h2>Hesap Oluştur</h2>

                  <p>
                    Oturum Aç veya Devam Et seçeneğine dokunarak,{" "}
                    <span>Koşullar</span>'nı kabul ediyorsun. Verilierini nasıl
                    işlediğimizi öğrenmek için <span>Gizlilik Politikası</span>
                    ve <span>Çerez Politikası</span>'nı inceleyebilirsin.
                  </p>
                </>
              ) : (
                ""
              )}

              {step !== 0 ? (
                <form className="signup-form">
                  <div
                    className={
                      step === 1 ? "form-item" : "form-item empty-item"
                    }
                  >
                    <label htmlFor="email">Mailini alabilir miyiz?</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="mail"
                      required
                    />
                  </div>

                  <div
                    className={
                      step === 2 ? "form-item" : "form-item empty-item"
                    }
                  >
                    <label htmlFor="password">Şifre Giriniz</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>

                  <div
                    className={
                      step === 3 ? "form-item" : "form-item empty-item"
                    }
                  >
                    <label htmlFor="name">Adın ne?</label>
                    <input id="name" name="name" required />
                  </div>

                  {step === 3 ? (
                    <button formAction={signup}>Kayıt Ol</button>
                  ) : (
                    <button onClick={() => setStep(step + 1)}>İlerle</button>
                  )}
                </form>
              ) : (
                " "
              )}

              {step === 0 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="sign-up-with-email"
                >
                  Gmail ile oturum aç{" "}
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        {activePanel === "login" && (
          <div className="modal modal-animation">
            <div className="modal-content">
              {step === 0 ? (
                <button
                  onClick={() => setActivePanel(null)}
                  className="modal-close"
                >
                  <ModalCross />
                </button>
              ) : (
                <button
                  onClick={() => setStep(step - 1)}
                  className="modal-back"
                >
                  <ModalBack />
                </button>
              )}

              <TinderMiniLogo />
              {step === 0 ? (
                <>
                  <h2>Hemen Başla</h2>

                  <p>
                    Oturum Aç veya Devam Et seçeneğine dokunarak,{" "}
                    <span>Koşullar</span>'nı kabul ediyorsun. Verilierini nasıl
                    işlediğimizi öğrenmek için <span>Gizlilik Politikası</span>
                    ve <span>Çerez Politikası</span>'nı inceleyebilirsin.
                  </p>
                </>
              ) : (
                <form action="" className="login-form">
                  <div className="form-item">
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" required />
                    <label htmlFor="password">Password:</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>

                  <button formAction={login}>Oturum Aç</button>
                </form>
              )}

              {step === 0 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="sign-up-with-email"
                >
                  Gmail ile oturum aç{" "}
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>

      <div className="second-layer">
        <div className="example-cards">
          <div className="card-title">
            <h2>Shannon ve Julian</h2>
          </div>

          <p>
            Memleketimde kendimi yalnız hissediyordum çünkü ben yurt dışındayken
            arkadaşlarımın çoğu romantik ilişkilere başlamıştı. İkimiz de
            Tinder'ı indirip neler olacağını görmeye karar verdik.
          </p>

          <p>
            Uygulama olmasaydı belki de hiç tanışmış ve bu sürprizlerle dolu
            harika yolculuğa çıkmamış olabilirdik. Bizi ve dünyanın dört bir
            yanındaki diğer pek çok çifti bir araya getirdiğiniz için teşekkür
            ederim. Sonsuza kadar minnettar kalacağım.
          </p>
        </div>

        <div className="footer-navigation">
          <ul>
            <h3>Yasal</h3>

            <li>Gizlilik</li>
            <li>Tüketici Sağlık Verileri Gizlilik Politikası</li>
            <li>Koşullar</li>
            <li>Çerez Politikası</li>
            <li>Fikri Mülkiyet</li>
          </ul>

          <ul>
            <h3>Kariyer</h3>

            <li>Kariyer Portalı</li>
            <li>Teknoloji Blogu</li>
          </ul>

          <ul>
            <h3>Sosyal</h3>

            <div className="div1">
              <li>
                <Instagram />
              </li>
              <li>
                <Tiktok />
              </li>
              <li>
                <Youtube />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Facebook />
              </li>
            </div>
          </ul>

          <ul>
            <li>SSS</li>
            <li>Varış Noktaları</li>
            <li>Basın Odası</li>
            <li>Bize Ulaşın</li>
            <li>Promosyon Kodu</li>
          </ul>
        </div>

        <div className="download-app">
          <h2>Uygulamayı indir!</h2>
          <p>
            Sevgili bekârlar, bize kulak verin: Eğer aşkı arıyorsanız, flört
            etmek istiyorsanız veya plansız ilişkiler peşindeyseniz, mutlaka
            Tinder'da olmalısınız. Bugüne kadar 55 milyardan fazla eşleşme
            sağlayan uygulamamız, kendine en uygun eşleşmeyi bulmak için en
            doğru yer. Gerçekçi olalım; flörtleşme dünyası son günlerde çok
            değişti zira artık çoğu insan online platformlarda birbiriyle
            tanışıyor ve sosyalleşiyor. Dünyanın en popüler ücretsiz arkadaşlık
            uygulaması olan Tinder sayesinde, tıpkı sizin gibi bekâr ve yeni
            insanlarla tanışmaya hazır milyonlarca kişi parmaklarınızın ucunda.
            İster heteroseksüel ister LGBTQIA topluluğuna ait bir birey olun,
            Tinder tüm potansiyel eşleşmelerizi karşınıza çıkarmak için burada.
          </p>{" "}
          <br />
          <p>
            Tinder'da herkes için bir şey var. Bir ilişki mi istiyorsunuz?
            Burada bulabilirsiniz. Yeni arkadaşlar bulmaya mı çalışıyorsunuz?
            Doğru adres burası. Kampüse girdiği andan itibaren üniversite
            deneyiminin keyfini çıkarmak isteyen bir öğrenci misiniz? Tinder U
            tam da istediğiniz şey. Tinder bildiğiniz arkadaşlık sitelerinden
            değildir. Farklı geçmişlere ve deneyimlere sahip yetişkinlerin
            yepyeni bağlantılar kurmak, anı biriktirmek ve daha birçok şeyi
            birlikte yapmak için davet edildiği çok renkli bir arkadaşlık
            uygulamasıdır.
          </p>
        </div>

        <footer className="footer">
          <p>
            <span>SSS </span> / <span> Güvenlik İpuçları </span> /{" "}
            <span> Koşullar </span> / <span> Çerez Politikası </span> /{" "}
            <span> Gizlilik Ayarları </span>{" "}
          </p>

          <small>© 2024 Tinder LLC, Tüm Hakları Saklıdır.</small>
        </footer>
      </div>
    </div>
  );
}
