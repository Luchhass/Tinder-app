"use client";

import {
  ModalCross,
  SecretMode,
  TinderBoostLogo,
  TinderGold,
  TinderMiniLogo,
  TinderPlus,
  TinderPremium,
} from "@/utils/iconify";
import { useState } from "react";
import "./profile-modals.css";

export default function ProfileModals({ data, activePanel, setActivePanel }) {
  const [editPreview, setEditPreview] = useState("edit");
  const [logOut, setLogOut] = useState(false);

  // Çıkış Yapabilmek İçin Çerezleri Siler
  const clearCookies = () => {
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = `${cookie
        .split("=")[0]
        .trim()}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
    window.location.reload();
  };

  // Düzenle Ve Ön İzleme Sayfalarını kontrol Eder.
  const modalTest = (panel) => {
    setEditPreview((prev) => (prev === panel ? null : panel));
  };

  return (
    <>
      {activePanel === "settings" && (
        <div className="modal modal-animation">
          <div className="modal-content">
            <div className="settings">
              <div className="settings-header">
                <h3>Ayarlar</h3>
                <button
                  onClick={() => setActivePanel(null)}
                  className="modal-close"
                >
                  Tamam
                </button>
              </div>

              <div className="premium-settings">
                <div className="premium-card">
                  <TinderPremium />
                  <p>Tinder deneyemini en üst seviyeye çıkar</p>
                </div>

                <div className="premium-card">
                  <TinderGold />
                  <p>Seni kimlerin Beğendiğini ve çok daha fazlasını keşfet</p>
                </div>

                <div className="premium-card">
                  <TinderPlus />
                  <p>Sınırsız beğeni ve daha fazlası</p>
                </div>

                <div className="boost-card">
                  <TinderBoostLogo />
                  <p>0 adet kaldı</p>
                  <p>Daha Fazla Boost Al</p>
                </div>

                <div className="secret-card">
                  <SecretMode />
                  <p>Gizli Moda Geç</p>
                </div>
              </div>

              <div className="account-settings">
                <h3>HESAP DETAYLARI</h3>

                <div className="set-item">
                  <p>Ödeme Hesabını Yönet</p>
                </div>

                <div className="set-item">
                  <p>Satın Alınanları Geri Yükle</p>
                </div>

                <div className="set-item">
                  <p>E-posta</p>
                  <p>{data[0]?.email}</p>
                </div>

                <div className="set-item">
                  <p>Bağlantılı Hesaplar</p>
                </div>

                <div className="set-item">
                  <p>Telefon Numarası</p>
                  <p>{data[0]?.phone}</p>
                </div>

                <div className="set-item">
                  <p>Promosyon Kodu</p>
                </div>
              </div>

              <div className="accessiblity-settings">
                <h3>Accessibility</h3>

                <button>Keyboard shortcuts</button>
                <button>Tinder'ı Paylaş</button>
                <button onClick={() => setLogOut(true)}>Çıkış</button>

                <div className="version">
                  <TinderMiniLogo />
                  <p>Versiyon 5.43.2</p>
                </div>

                <button onClick={() => setLogOut(true)}>Hesabı Sil</button>
              </div>

              {logOut === true && (
                <div className="modal-common">
                  <div className="modal-content-1">
                    <h1>Oturumu kapatmak istediğinden emin misin?</h1>

                    <p>
                      En son bilinen konumundaki uyumlu kullanıcılar seni
                      görmeye devam edecek.
                    </p>

                    <button onClick={() => clearCookies}>Çıkış</button>
                    <button onClick={() => setLogOut(null)}>İptal et</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activePanel === "editProfile" && (
        <div className="modal modal-animation">
          <div className="modal-content">
            <form className="edit-profile">
              <div className="edit-profile-header">
                <h3>Bilgileri Düzenle</h3>

                <button className="modal-close" type="submit">
                  Tamam
                </button>
              </div>

              <div className="edit-preview">
                <button
                  type="button"
                  onClick={() => modalTest("edit")}
                  className={editPreview === "edit" ? "activeButton" : ""}
                >
                  Düzenle
                </button>
                <button
                  type="button"
                  onClick={() => modalTest("preview")}
                  className={editPreview === "preview" ? "activeButton" : ""}
                >
                  Ön İzleme
                </button>
              </div>

              <div className="photo-section"></div>

              <div className="about-me">
                <div className="edit-form-item">
                  <label htmlFor="biography">KİM BU {data[0].name}</label>
                  <input type="text" id="biography" name="biography" />

                  <p>
                    Lütfen profilinde sosyal medya kullanıcı adları veya diğer
                    iletişim bilgilerini paylaşma
                  </p>
                </div>

                <div className="edit-form-item">
                  <label htmlFor="height">BOYUN</label>
                  <input type="text" id="height" name="height" />
                </div>
              </div>

              <div className="detailed-about-me"></div>

              <div className="life-style"></div>

              <div className="others"></div>
            </form>
          </div>
        </div>
      )}

      {activePanel === "addMedia" && (
        <div className="modal modal-animation">
          <div className="modal-content">
            <div className="add-media">
              <div className="add-media-header">
                <div className="media-title">
                  <h3>Yenisini Oluştur</h3>
                  <p>İçerik türü seç</p>
                </div>

                <button
                  onClick={() => setActivePanel(null)}
                  className="modal-close"
                >
                  <ModalCross />
                </button>
              </div>

              <form className="add-media-content">
                <button className="gallery">
                  <p>Şuradan Yükle</p>
                  <h3>Galeri</h3>
                </button>

                <button className="camera">
                  <p>Şununla Yakala</p>
                  <h3>Kamera</h3>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
