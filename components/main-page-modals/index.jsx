"use client";

import { ModalCross, ModalTick, TinderGold, TinderPlus } from "@/utils/iconify";
import "./main-page-modals.css";
import { useRef, useState } from "react";

export default function MainPageModals({ data, activePanel, setActivePanel }) {
  const [selected, setSelected] = useState("1-week");

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

  // Düzenle Ve Ön İzleme Sayfalarını kontrol Eder.
  const selectedBox = (panel) => {
    setSelected((prev) => (prev === panel ? null : panel));
  };

  return (
    <>
      {activePanel === "take-back" && (
        <div className="modal modal-animation">
          <div className="modal-content">
            <div className="plus">
              <div className="modal-header">
                <button
                  onClick={() => setActivePanel(null)}
                  className="modal-close"
                >
                  <ModalCross />
                </button>

                <TinderPlus />
              </div>

              <h1>
                Sınırsız Geri Alma Hakkı. Kaydırdığın profili geri getir ve
                tekrar dene!
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
                    <h3>22,25/hf</h3>
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
                    <h3>₺44,00/hf</h3>
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
                    <h3>11,21/hf</h3>
                  </button>
                </div>
              </div>

              <div className="tinder-plus-includes">
                <div className="includes-item">
                  <ModalTick />
                  <p>Sınırsız Beğeni Hakkı</p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>Sınırsız Geri Alma Hakkı</p>
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
                  Devam'a dokunursan ödemen tahsil edilir ve sen Hesap
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

      {activePanel === "super-like" && (
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
                  Devam'a dokunursan ödemen tahsil edilir ve sen Hesap
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

      {activePanel === "boost" && (
        <div className="modal modal-animation">
          <div className="modal-content">
            <div className="boost">
              <div className="modal-header">
                <button
                  onClick={() => setActivePanel(null)}
                  className="modal-close"
                >
                  <ModalCross />
                </button>
              </div>

              <h1>
                Daha fazla eşleşme yakalamak için 30 dakika boyunca bölgendeki
                en popüler profillerden biri ol!
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
                    <h3>22,25/hf</h3>
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
                    <h3>₺44,00/hf</h3>
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
                    <h3>11,21/hf</h3>
                  </button>
                </div>
              </div>

              <div className="tinder-plus-includes">
                <div className="includes-item">
                  <ModalTick />
                  <p>Sınırsız Beğeni Hakkı</p>
                </div>

                <div className="includes-item">
                  <ModalTick />
                  <p>Sınırsız Geri Alma Hakkı</p>
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
                  Devam'a dokunursan ödemen tahsil edilir ve sen Hesap
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
