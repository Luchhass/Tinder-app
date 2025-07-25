"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import ProfileDetail from "@/components/profile-detail";
import ProfileSlider from "@/components/profile-slider";
import ProfileModals from "@/components/profile-modals";

export default function ProfilePage() {
  const [activePanel, setActivePanel] = useState(null);
  const [data, setData] = useState([]);
  const supabase = createClient();

  // Ayarlar, Profili Düzenle Ve Medya Öğesi Ekle Modallarını kontrol Eder.
  const togglePanel = (panel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  // Giriş Yapan Kullanıcı Bilgileriyle Tablo Karşılaştırması Yapıp Verileri Getirir
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", user.id);

      setData(data);
    };

    fetchData();
  }, []);


  return (
    <div className="profile">
      <ProfileDetail data={data} togglePanel={togglePanel} />

      <ProfileSlider />

      <ProfileModals data={data} activePanel={activePanel} setActivePanel={setActivePanel} />
    </div>
  );
}
