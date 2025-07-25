"use client";

import {
  EmptyPageLogo,
  ModalCross,
  ModalTick,
  TinderGold,
} from "@/utils/iconify";
import "./gold-home.css";
import { useRef, useState } from "react";

export default function GoldHomePage() {
  const [selected, setSelected] = useState("1-week");
  const [activePanel, setActivePanel] = useState(false);

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    scrollRef.current.style.cursor = "grabbing";
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  return (
    <>
      <div className="gold-home">
        <h1 className="title"> Beğeni Al</h1>

        <div className="empty-container">
          <EmptyPageLogo />
          <h2>Seni beğenen kişileri görmek için Gold&apos;a yükselt</h2>
        </div>

        <button className="gold-button" onClick={() => setActivePanel(true)}>
          Seni Kimlerin Beğendiğini Gör
        </button>
      </div>
      
      {activePanel === true && (
        <div className="modal modal-animation">
          <div className="modal-content">
            <div className="super-like">
              <div className="modal-header">
                <button
                  onClick={() => setActivePanel(null)}
                  className="modal-close"
                >
                  <ModalCross />
                </button>

                <TinderGold />
              </div>

              <h1>
                Super Like ile ön plana çık ve eşleşme yakalama şansını 3 katına
                çıkar.
              </h1>

              <div className="plan-section">
                <p>Plan seç</p>

                <div
                  ref={scrollRef}
                  className="scroll-container"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUpOrLeave}
                  onMouseLeave={handleMouseUpOrLeave}
                >
                  <button
                    onClick={() => selectedBox("1-week")}
                    className={
                      selected === "1-week"
                        ? "scroll-item selected-color"
                        : "scroll-item"
                    }
                  >
                    <p>Popüler</p>
                    <h1>1 Hafta</h1>
                    <h3>66,49/hf</h3>
                  </button>

                  <button
                    onClick={() => selectedBox("1-month")}
                    className={
                      selected === "1-month"
                        ? "scroll-item selected-color"
                        : "scroll-item"
                    }
                  >
                    <h1>1 Aylık</h1>
                    <h3>33,50/hf</h3>
                  </button>

                  <button
                    onClick={() => selectedBox("6-month")}
                    className={
                      selected === "6-month"
                        ? "scroll-item selected-color"
                        : "scroll-item"
                    }
                  >
                    <p>En İyi Teklif</p>
                    <h1>6 Aylık</h1>
                    <h3>16,83/hf</h3>
                  </button>
                </div>
              </div>

              <div className="tinder-gold-includes">
                <div className="includes-item">
                  <ModalTick />
                  <p>Sınırsız Beğeni Hakkı</p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>Seni Kimlerin Beğendiğini Gör</p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>Sınırsız Geri Alma Hakkı</p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>
                    Ayda 1 Ücretsiz Boost <br />
                    <span>
                      Ücretsiz aylık Boost yalnızca 1 aylık veya daha uzun
                      süreli abonelikler için geçerlidir.
                    </span>
                  </p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>Haftada 3 Ücretsiz Super Like</p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>
                    Sınırsız Passport™ Modu <br />
                    <span>
                      Dünyanın dört bir yanındaki insanlarla eşleş ve sohbet et.
                    </span>
                  </p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>
                    Profilini Kontrol Et <br />
                    <span>
                      İnsanlara sadece bilmelerini istediğin şeyleri göster.
                    </span>
                  </p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>
                    Seni Kimlerin Gördüğünü Kontrol Et <br />
                    <span>Kimlerin seni görebileceğini yönet.</span>
                  </p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>
                    Kimleri Gördüğünü Kontrol Et <br />
                    <span>Bağlantı kurmak istediğin türde insanları seç.</span>
                  </p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>Reklamları Gizle</p>
                </div>
              </div>

              <div className="modal-footer">
                <p>
                  Devam&apos;a dokunursan ödemen tahsil edilir ve sen Hesap
                  Ayarlarından iptal etmediğin sürece, aboneliğin aynı fiyata
                  aynı paket uzunluğunda yenilenir ve{" "}
                  <span>Koşullarımızı </span>
                  kabul etmiş olursun
                </p>

                <button>Devam</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
